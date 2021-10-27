import axios from "components/Data/utils/axios";
import requests from "components/Data/utils/requests";

const getmovieinfo = (arrayofids) => {
  return new Promise((resolve) => {
    console.log(arrayofids);
    const buildMovieList = Promise.all(
      arrayofids.map(async (id) => {
        const res = await axios.get(requests.getMovieInfo(id));
        return res.data;
      })
    );

    const getlist = async () => {
      const list = await buildMovieList;
      console.log(list);
      resolve(list);
    };
    getlist();
  });
};

export default getmovieinfo;
