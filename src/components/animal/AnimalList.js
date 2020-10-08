import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AnimalContext } from "./AnimalProvider";
import { AnimalCard } from "./AnimalCard";
import "./Animal.css";

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext);
  const history = useHistory();

  //useEffect - reach out to the world for something
  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <>
      <h2>Animals</h2>
      <button
        onClick={() => {
          history.push("/animals/create");
        }}
      >
        Add Animal
      </button>
      <div className="animals">
        {animals.map((animal) => {
          return <AnimalCard key={animal.id} animal={animal} />;
        })}
      </div>
    </>
  );
};
