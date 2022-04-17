import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { latestApi } from "../../../apis/movieApi";
import { MovieDetail } from "../../../types";

const useLatestMovie = () => {
  return useQuery<AxiosResponse<MovieDetail>,AxiosError>('LatestMovie', latestApi);
}

export default useLatestMovie;