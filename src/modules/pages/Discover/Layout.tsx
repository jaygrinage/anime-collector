import React, {useState} from "react";
// import {  } from "modules/components";
import { Anime } from "modules/types";
import { Card } from "modules/components";
import './Layout.css';


interface DiscoverPageLayoutProps {
  animeList: [Anime];
  getAnimeList: (query) => Promise<void>;
}

const DiscoverPageLayout: React.FC<DiscoverPageLayoutProps> = ({ animeList, getAnimeList }) => {
  
   const [AnimeText, setAnimeText] = useState("");

   const [MyAnimeList, setMyAnimeList] = useState<any>([]);

   const onHandleAddClick = (title) => {
     setMyAnimeList([...MyAnimeList,title])
     console.log(MyAnimeList)
   }

   const onHandleSearchClick = () => {
     getAnimeList(AnimeText);
   };

   const getText = e => {
     setAnimeText(e.target.value);
   };
    //  console.log(animeList);

  return (
    <>
    <div className="searchBar">
      <input type="text" value={AnimeText} onChange={getText} />
      <button onClick={onHandleSearchClick}>SEARCH</button>
    </div>

    <div className="content">
      <section className="sectionLeft">
        {animeList.map(anime => (
          <React.Fragment key={anime.mal_id}>
            <Card
              title={anime.title}
              image={anime.image_url}
              text={anime.synopsis}
              handleAddClick={onHandleAddClick}
            ></Card>
          </React.Fragment>
        ))}
      </section>

          <section className="sectionRight">
            {MyAnimeList.map((item, index) => <div key={index}>{item}</div>)}
          </section>
          
    </div>



    </>
  );
}

export default DiscoverPageLayout;
