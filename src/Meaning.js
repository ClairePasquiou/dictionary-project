import React from "react";
import Example from "./Example.js";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="definition">
        
        {props.meaning.definition}
      </div>
      <Example example={props.meaning.example} />
      <div>
         <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
