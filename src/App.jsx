import React, { useState, useEffect } from "react";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showS, setShowS] = useState(false);
  useEffect(() => {
    async function fetchAPIDATA() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
     
      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData)
        console.log('Fetched from cache today')
        return
      }
      localStorage.clear()
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const apiData = await res.json();
        localStorage.setItem(localKey,JSON.stringify(apiData))
        setData(apiData);
        console.log('Fetched from Api today')
      } catch (err) {
        console.log(err.message);
      }
    }

    fetchAPIDATA();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showS && <SideBar data={data} setShowS={setShowS} />}
      {data && <Footer data={data} setShowS={setShowS} />}
    </>
  );
}

export default App;
