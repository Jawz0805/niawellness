
import './App.css';
import Header from '../Containers/Header/Header';
import VideoPlayer from '../Components/VideoPlayer/VideoPlayer';
import Grid from '../Containers/Grid/Grid';
import SideBar from '../Containers/SideBar/SideBar';
import { useState } from 'react';
import About from '../Containers/About/About';
import episode1 from '../Assets/ScheduleData'


function App() {
  const [page, setPage] = useState("watch")
  const [episode, setEpisode] = useState(episode1)
  return (
    <div className="App">
      <Header page={page} setPage={setPage} />
      <div className="video-container">
        <VideoPlayer video="https://player.twitch.tv/?channel=niatvlive&parent=nia-wellness.netlify.app" title="Nia Tv" />
      </div>
      {page === "watch" ?
        <Grid cards={episode} /> : <About />}
      <SideBar episode={episode1} setEpisode={setEpisode} />
    </div>
  );
}

export default App;
