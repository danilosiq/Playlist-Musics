import { headerInfo, tracks } from "../services/api"
import Playlist from "./components/playlists";
import Playitens from "./components/playitens"


const Player = () => {
    return (
      <div className="player-container">
        <Playlist {...headerInfo} />
        {
            tracks.map(track =>(
                <Playitens {...track} key={track.id}/>
            ))
        }
      </div>
    );
  };

export default Player