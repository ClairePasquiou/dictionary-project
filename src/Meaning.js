import React from "react";
import Example from "./Example.js";
import Synonyms from "./Synonyms.js";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="definition">
        
        {props.meaning.definition}
      </div>
      <div className="example">
        <Example example={props.meaning.example} />
      </div>
      
      <div className="synonym">
         <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
