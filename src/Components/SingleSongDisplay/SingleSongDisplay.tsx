import Song from "../../Models/Song";
import "./SingleSongDisplay.scss";

type SongDisplayProps = {
  song: Song;
};

export default function SingleSongDisplay({ song }: SongDisplayProps) {
  return (
    <div className="song-display">
      <h1>{song.name}</h1>
      <h2>{song.artist}</h2>
      <h3>Listened {song.listens} times</h3>
    </div>
  );
}
