import { ActionFunctionArgs, ParamParseKey, Params } from "react-router-dom";

const path = {
  searchresults: "/searchresults/:searchterm",
} as const;

interface Args extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof path.searchresults>>;
}

export interface SearchResultsLoaderResults {
  songs: string[]; //Replace with a specific model
}

export default async function searchResultsLoader({
  params,
}: Args): Promise<SearchResultsLoaderResults> {
  return {
    songs: ["test: ", params.searchterm ?? ""],
  };
}
