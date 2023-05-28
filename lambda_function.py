import boto3
import json
import requests
from requests_aws4auth import AWS4Auth

region = 'us-east-2' # For example, us-west-1
service = 'es'
credentials = boto3.Session().get_credentials()
awsauth = AWS4Auth(credentials.access_key, credentials.secret_key, region, service, session_token=credentials.token)

host = 'https://search' # The OpenSearch domain endpoint with https://
index = 'me'
url = host + '/' + index + '/_search'

def process_json(text):
    d = json.loads(text)['hits']['hits']
    n = len(d)
    
    if n < 0:
        return "[]"
        
    results = []
    
    for i in range(n):
        data = []
        curr = d[i]['_source']
        l = curr['label']
        data.append(l)
        
        if l == 'projects':
            data.extend(curr[key] for key in [
                'name', 'date', 'description',
                'tools used', 'url', 'category'
                ])
        elif l == 'work experience' or l == 'research':
            data.extend(curr[key] for key in [
                'name', 'start date', 'end date', 'location',
                'position', 'description', 'category'
                ])
        elif l == 'links':
            data.extend(curr[key] for key in ['info', 'url'])
        elif l == 'favorite movies' or l == 'favorite books':
            data.extend(curr[key] for key in ['name', 'by'])
        elif l == 'favorite songs':
            data.extend(curr[key] for key in ['name', 'by', 'link', 'image'])
        else:
            data.append(curr['info'])
        
        results.append(data)
    
    return results

# Lambda execution starts here
def lambda_handler(event, context):

    # Put the user query into the query DSL for more accurate search results.
    # Note that certain fields are boosted (^).
    query = {
        "size": 50,
        "sort": {
            "_script": {
              "type": "number",
              "script": "return Integer.parseInt(doc['_id'].value)",
              "order": "asc"
            }
          },
        "query": {
            "multi_match": {
                "query": event['queryStringParameters']['q'],
                "type": "phrase_prefix",
                "fields": ["label", "info", "name", "category", "tags"]
            }
        }
    }

    # Elasticsearch 6.x requires an explicit Content-Type header
    headers = { "Content-Type": "application/json" }

    # Make the signed HTTP request
    r = requests.get(url, auth=awsauth, headers=headers, data=json.dumps(query))

    # Create the response and add some extra content to support CORS
    response = {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin": '*'
        },
        "isBase64Encoded": False
    }

    # Add the search results to the response
    data = process_json(r.text)
    response['body'] = json.dumps(data)
    return response