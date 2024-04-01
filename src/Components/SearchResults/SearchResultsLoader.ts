import { ActionFunctionArgs, ParamParseKey, Params } from "react-router-dom";
import Song from "../../Models/Song";

const path = {
  searchresults: "/search/:searchterm",
} as const;

interface Args extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof path.searchresults>>;
}

export interface SearchResultsLoaderResults {
  songs: Song[]; //Replace with a specific model
}

export default async function searchResultsLoader({
  params,
}: Args): Promise<SearchResultsLoaderResults> {
  const response = await fetch(
    `http://192.168.1.100:5165/api/song?q=song=${params.searchterm}&limit=25`,
    {
      method: "GET",
    }
  );
  const data = (await response.json()) as {
    id: number;
    artistName: string;
    name: string;
    numberOfListens: number;
  }[];

  return {
    songs: data.map(
      (x) => new Song(x.id, x.name, x.artistName, x.numberOfListens)
    ),
  };
}
