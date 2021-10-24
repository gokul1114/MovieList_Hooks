import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import "./style.css";

export default function App(){
// const [color, setColor] = useState("orange");
// let styles = {backgroundColor : color};

// return <input value = {color} style = {styles} onChange = {(event)=> setColor(event.target.value) } />
return (
<div>
<MovieList />
</div>
);

}

function Color() {
  const [color, setColor] = useState("orange");
  let styles = {backgroundColor : color};
  let initialColors = ["orange", "red"]
  let [colorList, setColorList] = useState(initialColors);

return (
<div>
<input value = {color} style = {styles} onChange = {(event)=> setColor(event.target.value) } />
<Button variant="contained" onClick = {() => setColorList([...colorList,color])}>Add Color</Button>
{colorList.map(e => (<ColorBox clr={e} index={colorList.indexOf(e)} />))}
{console.log(colorList)}
</div>
);
}

function ColorBox({clr,index}) {
console.log(clr,index)
let styles = {background : clr, height : "100px", width : "400px"}
return(
<div style = {styles}>
{clr}
</div>
);
}

function MovieList() {
  const movies = [
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary: ` When Earth becomes uninhabitable in the future, a farmer and ex-NASA
  pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team
  of researchers, to find a new planet for humans.`
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary: `In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.`
    },
    {
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary: `Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.`
    },

    {
      name: "96",
      poster:
        "https://a10.gaanacdn.com/gn_img/albums/9En3peWXDV/En3pYMLPWX/size_xxl_1535086576.webp",
      rating: 8.6,
      summary: `K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart.`
    },

    {
      name: "M.S. Dhoni: The Untold Story",
      poster: "https://m.media-amazon.com/images/I/71miTEyKvYL._SL1112_.jpg",
      rating: 7.9,
      summary: `M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.`
    }
  ];
  const [moviesList, setMoviesList] = useState(movies);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  let data = {
    name : name,
    poster : img,
    rating : rating,
    summary : summary
  }
  return (
    <div>
    <div className = "inputCollection">
       <TextField id="outlined-basic" label="name" variant="outlined" onChange = {(event) => setName(event.target.value)} />
       <TextField id="outlined-basic" label="img" variant="outlined" onChange = {(event) => setImg(event.target.value)}/>
       <TextField id="outlined-basic" label="rating" variant="outlined" onChange = {(event) => setRating(event.target.value)}/>
       <TextField id="outlined-basic" label="summary" variant="outlined" onChange = {(event) => setSummary(event.target.value)}/>
       <Button variant="contained" onClick = {() => setMoviesList([...moviesList, data])}>
         {console.log(moviesList)} Add Movies</Button>
    </div>
    <div className="movie-list">
      {moviesList.map((e) => (
        <Display key = {e.name}
          className="main-content"
          name={e.name}
          img={e.poster}
          rating={e.rating}
          summary={e.summary}
        />
      ))}
    </div>
    </div>
  );

}

// function Input() {
//   let  []
//   return(
//     <div className = "inputCollection">
//        <TextField id="outlined-basic" label="name" variant="outlined" />
//        <TextField id="outlined-basic" label="img" variant="outlined" />
//        <TextField id="outlined-basic" label="rating" variant="outlined" />
//        <TextField id="outlined-basic" label="summary" variant="outlined" />
//        <Button variant="contained" onClick = {() => setColorList([...colorList,color])}>Add Color</Button>
//     </div>
//   );
// }
function Display({ name, img, rating, summary }) {
  const [styleForSummary, setStyleForSummary] = useState("block");

  let styles = {display : styleForSummary}
  return (
    <div className="movie-container">
      <img className="movie-poster" src={img} alt={name} />
      <div className="movie-specs">
        <h3 className="movie-name">{name}</h3>
        <p className="movie-rating">
          <span aria-label="" role="img">
            ⭐
          </span>
          {rating}
        </p>
      </div>
      <button onClick = {() => setStyleForSummary(styleForSummary == "none" ? "block" : "none")}>{styleForSummary == "none" ? "show descriptoin" : "hide description"}</button>
      <p style = {styles}>{summary}</p>
      <Counter />
    </div>
  );
}

function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div>
      <button onClick={() => setLike(like + 1)}>like {like}</button>
      <button onClick={() => setDisLike(disLike + 1)}>dislike {disLike}</button>
    </div>
  );
}
