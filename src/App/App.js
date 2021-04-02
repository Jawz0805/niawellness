
import './App.css';
import Header from '../Containers/Header/Header';
import VideoPlayer from '../Components/VideoPlayer/VideoPlayer';
import Grid from '../Containers/Grid/Grid';
import SideBar from '../Containers/SideBar/SideBar';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="video-container">
        <VideoPlayer video="https://www.youtube.com/embed/t6axvAjDljg" title="Nia Tv" />
      </div>
      <Grid />
      <SideBar />
    </div>
  );
}

export default App;
