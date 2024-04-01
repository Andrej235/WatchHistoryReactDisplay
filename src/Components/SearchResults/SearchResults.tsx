import { useLoaderData } from "react-router";
import { SearchResultsLoaderResults } from "./SearchResultsLoader";
import SingleSongDisplay from "../SingleSongDisplay/SingleSongDisplay";
import "./SearchResults.scss";

export default function SearchResults() {
  const data = useLoaderData() as SearchResultsLoaderResults;

  return (
    <div id="search-results-wrapper">
      {data.songs.map((x) => (
        <SingleSongDisplay key={x.id} song={x} />
      ))}
    </div>
  );
}
