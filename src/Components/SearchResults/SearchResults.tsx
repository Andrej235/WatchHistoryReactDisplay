import { useLoaderData } from "react-router";
import { SearchResultsLoaderResults } from "./SearchResultsLoader";

export default function SearchResults() {
  const data = useLoaderData() as SearchResultsLoaderResults;

  return <div>{data.songs}</div>;
}
