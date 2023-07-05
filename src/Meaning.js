import React from "react";
import Example from "./Example.js";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
     <div className="definition">
      {props.meaning.definition}
     </div>
     <Example example={props.meaning.example}/>
     
    </div>
  );
}
