import { Key } from "react";
import "./Text.css"

async function getData() {
  const res = await fetch("https://65b266659bfb12f6eafda7b7.mockapi.io/api/v1/movies");
 
  if (!res.ok) {
    
    throw new Error('Failed to fetch data')
  }
 
  return res.json();
}
 
export default async function NewPlaylist() {
  const data = await getData();
  
  console.log(data[1].tags[0])
  return (
    
    <div className="containerMovies">
         <div className="text">Playlist</div>
    {data.map((item: { tags: String; imgPoster: string | undefined; name: any; }, index: Key | null | undefined) => (
      <div key={index} >
        
        {item.tags[0] === "newPlaylist" && (
          <img
            className="poster"
            src={item.imgPoster}
            alt={`Imagen de película ${item.name}`}
          />
        )
        }

        {}
      </div>
    ))}
  </div>
  );
}
  
