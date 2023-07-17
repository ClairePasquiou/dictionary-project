import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(){
    //documentation : https://www.shecodes.io/learn/apis/dictionary

    let apiKey = "b6c3674af95t190o44befdaa67cd0242";

    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
search();
    
  }




  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

function load (){
  setLoaded(true);
  search();
}

if (loaded) {
  return (
    <div className="Dictionary">
        <h1>What word are you looking for?</h1>

      <section>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
        </form>
        <div className="hint">i.e: sunset, books, toronto, running</div>
      </section>
      <Results results={results} />
    </div>
  );} else {
    load();
    return "Loading";
  }
  
}
