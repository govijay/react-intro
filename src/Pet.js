import React from "react";

function Pet({ name, animal, breed }) {
  /* return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h3", {}, breed),
  ]); */

  return (
    <div>
      <h1>Name : {name.toUpperCase()}</h1>
      <h2>Animal : {animal}</h2>
      <h3>Breed : {breed}</h3>
    </div>
  );
}
export default Pet;
