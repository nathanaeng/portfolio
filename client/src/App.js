import { useEffect, useState } from 'react';
import Searchbar from './components/Searchbar';
import Results from './components/Results';
import About from './components/About';
import DarkModeToggle from './components/DarkModeToggle';
import './components/DarkModeToggle.css';
import './App.css';
import ResumeModal from './components/ResumeModal';

// Get dark mode from local storage
const getDarkMode = () => {
  let ls = JSON.parse(localStorage.getItem('darkmode'));
  return ls !== null ? ls : false;
}

function App() {
  const [data, setData] = useState([]);
  const [darkMode, setDarkMode] = useState(getDarkMode());

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const fetchData = async (query) => {
    try {
      const text = query.replace("", "+");
      const res = await fetch(`https://j67kngp1yj.execute-api.us-east-2.amazonaws.com/nathanaeng-os-api-test?q=${text}`);
      const body = await res.json();
      setData(body);
    } catch (error) {
      console.error(error);
    }
  }

  const clearResults = () => setData([]);

  useEffect(() => {
    // Avoid cold start
    fetch('https://j67kngp1yj.execute-api.us-east-2.amazonaws.com/nathanaeng-os-api-test?q=!');

    // Fade-in effect on load
    setTimeout(() => {document.querySelector('.title').classList.add('fade-in')}, 100);
    setTimeout(() => {document.querySelector('.about').classList.add('fade-in')}, 1000);
    setTimeout(() => {document.querySelector('.darkmode-toggle-btn').classList.add('fade-in')}, 2000);
  }, []);

  return (
    <div className="all">
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <div className="title-container">
        <h1 className="title">Nathan Eng</h1>
        <About />
      </div>
      <div className="content">
        <div className="content-box">
          <Searchbar fetchData={fetchData} clearResults={clearResults}/>
          <Results data={data} darkMode={darkMode}/>
        </div>
        <ResumeModal />
      </div>
    </div>
  );
}

export default App;
