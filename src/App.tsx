import React, {useState} from 'react';
import axios from 'axios';

const App= () => {

  const [Images, setImages] = useState<any>([])

   const callApi = async ( ) => {
    const response = await axios.get(
      "https://api.jikan.moe/v3/search/anime?q=bleach&limit=10"
    );

    console.log(response)


    const filteredResults = response.data.results.filter(anime => anime.rated !== "Rx")

    setImages(filteredResults);
  }
  // console.log(Images)

  return (
    <div >
        <button onClick={callApi}>Test Api</button>

       {Images.map((pics, index) => <img key={index} src={pics.image_url} />)}

    </div>
  );
}

export default App;
