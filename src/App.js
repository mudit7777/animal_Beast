import './App.css';
import { render } from '@testing-library/react';
import AnimalShow from './AnimalShow';
import 'bulma/css/bulma.css';
import { useState } from 'react';
function getRandomAnimal() {
    const animals = ['bird','cat','cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)];
}

//console.log(getRandomAnimal());

function App() {
    const [animals, setAnimals] = useState([]);
  
    const handleClick = () => {
    //animals.push(getRandomAnimal()); // this code modifies a piece of state and we never want to modify the state.
    setAnimals([...animals, getRandomAnimal()])
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index}/>   })

    return (
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">{renderedAnimals}</div>
        </div>
    );
}
export default App;
