import React, { useState, useEffect } from 'react';
import axios from "axios";

import { MainLayout } from 'modules/layouts';
// import { Anime } from 'modules/types';
import DiscoverPageLayout from './Layout';

const API = "https://api.jikan.moe/v3/search/anime?q=bleach&limit=10";

const DiscoverPage = () => {
  const [animeList, setAnimeList] = useState<any>([]);

  useEffect(() => {
    getAnimeList();
  }, [])

  const getAnimeList = async () => {
    const response = await axios.get(API);

    console.log(response);

    const filteredResults = response.data.results.filter(
      anime => anime.rated !== "Rx"
    )
    setAnimeList(filteredResults);
  };

    return (
      <MainLayout>
        <DiscoverPageLayout animeList={animeList}/>
      </MainLayout>
    );
}


export default DiscoverPage;