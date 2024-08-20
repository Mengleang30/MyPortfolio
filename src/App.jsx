import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleNight_mod = () => {
    setDarkMode(!darkMode);

    const content = document.querySelector('.Content');
    if (content) {
      if (!darkMode) {
        content.classList.add('dark-mode');
      } else {
        content.classList.remove('dark-mode');
      }
    }
  };

  return (
    <>
      <div id='header'>
        <Header  />
      </div>
      <Content />
      <Footer />
    </>
  )
}

export default App;
