/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let articles = ["the", "an", "some", "another", "any"];
  let adjectives = ["awesome", "cool", "intriguing", "thrilling", "funny"];
  let nouns = ["website", "blog", "webapp", "spot", "hub"];
  let tlds = [".com", ".de", ".net", ".org", ".mx", ".us"];

  let domainNames = [];

  for (let article of articles) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          domainNames.push(`${article}${adjective}${noun}${tld}`);
        }
      }
    }
  }
  document.querySelector("#generate").onclick = () => {
    document.querySelector("#domain").innerHTML = `<h1>${
      domainNames[Math.floor(Math.random() * domainNames.length)]
    } </h1>`;
  };
};
