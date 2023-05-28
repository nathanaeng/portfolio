# [nathanaeng.com](https://www.nathanaeng.com)
This website portfolio acts as a spotlight search about me: you can search anything you want to know about me such as "hobbies", "work experience", "favorite ice cream flavor", etc.

## Architecture
### Local Hosting
During development on my local machine, the following tools and platforms were used:
- Docker container running Elasticsearch instance
- Docker container running Kibana
- Node.js backend with Express.js framework
- React web app

### Deployment
When it came to deployment, I considered several routes:
1. Use Elastic cloud for Elasticsearch instance and run Node.js backend on AWS EC2 instance; host on GitHub pages
2. Use AWS OpenSearch document store, Gateway API and Lambda function for handling requests; host on GitHub pages
3. Deploy ELK stack in a kubernetes cluster and run Node.js backend on AWS EC2 instance; host on GitHub pages

I chose to go with the 2nd option, since OpenSearch and Lambda functions are free (for basic configuration) under the AWS free tier. However, this does come at a cost of performance.

## Elasticsearch
This web application uses prefix, multi-match queries for a live search results experience.

Elasticsearch was chosen for this project because of their well-documented API as well as the excellent out-of-the-box performance. PostgreSQL also has a full-text search solution as an alternative.

## Performance
Elastic cloud has provided the best performance of the methods that I have tested, but it is less of a long term solution (at the moment). Provisioned concurrency can be used to reduce lambda function response times (https://aws.amazon.com/blogs/compute/new-for-aws-lambda-predictable-start-up-times-with-provisioned-concurrency/), but it is not free. Instead, I have opted to invoke the lambda function on page load to potentially avoid a cold start.
