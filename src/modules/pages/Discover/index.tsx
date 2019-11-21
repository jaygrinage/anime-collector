import React, { useState, useEffect } from 'react';
import axios from "axios";

import { MainLayout } from 'modules/layouts';
// import { Anime } from 'modules/types';
import DiscoverPageLayout from './Layout';




const DiscoverPage = () => {
  const [animeList, setAnimeList] = useState<any>([]);

  useEffect(() => {
    getAnimeList("bleach");
  }, [])

  const getAnimeList = async (query) => {
    const API = `https://api.jikan.moe/v3/search/anime?q=${query}&limit=12`;
    const response = await axios.get(API);

    console.log(response);
    // const arr1 = [1,2,3];
    // const arr2 = [4,5,6];

    // console.log([...arr1,...arr2]);

    const filteredResults = response.data.results.filter(
      anime => anime.rated !== "Rx"
    )
    setAnimeList(filteredResults);
  };

    return (
      <MainLayout>
          <DiscoverPageLayout
            getAnimeList={getAnimeList}
            animeList={animeList}
          />
      </MainLayout>
    );
}


export default DiscoverPage;