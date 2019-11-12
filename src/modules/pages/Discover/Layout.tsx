import React from "react";
// import {  } from "modules/components";
import { Anime } from "modules/types";

interface DiscoverPageLayoutProps {
  animeList: [Anime]
}

const DiscoverPageLayout: React.FC<DiscoverPageLayoutProps> = ({ animeList }) => {
  return (
    <div>
      {animeList.map(anime => <div>{anime}</div>)}
    </div>
  )
}

export default DiscoverPageLayout;
