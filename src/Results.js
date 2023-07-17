import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
        <h2>{props.results.word}</h2>
        <h5 id="phonetic">/{props.results.phonetic}/</h5>
        </section>
        {props.results.meanings.map(function (meanings, index) {
          return (
            <div key={index}>
              <section>
              <Meaning meaning={meanings} />
              </section>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
