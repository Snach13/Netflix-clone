import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";

function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      ></video>
    </div>
  );
}

export default Watch;
