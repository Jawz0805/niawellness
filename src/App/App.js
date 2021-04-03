
import './App.css';
import Header from '../Containers/Header/Header';
import VideoPlayer from '../Components/VideoPlayer/VideoPlayer';
import Grid from '../Containers/Grid/Grid';
import SideBar from '../Containers/SideBar/SideBar';
import { useState } from 'react';
import About from '../Containers/About/About';

function App() {
  const [page, setPage] = useState("watch")
  return (
    <div className="App">
      <Header page={page} setPage={setPage} />
      <div className="video-container">
        <VideoPlayer video="https://www.youtube.com/embed/t6axvAjDljg" title="Nia Tv" />
      </div>
      {page === "watch" ?
        <Grid /> : <About />}
      <SideBar />
    </div>
  );
}

export default App;
