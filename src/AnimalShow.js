import './AnimalShow.css'
import { useState } from 'react'
import bird from './svg/bird.svg'
import cat from './svg/cat.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import heart from './svg/heart.svg'
import horse from './svg/horse.svg'

// do the map of the SVG'S 

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}



function AnimalShow({ type }) {
    const [clicks, setClicks] = useState(0);
    // handle the no of clicks
    const handleClicks = () => {
        return setClicks(clicks + 1);
    }
   return (
    <div className="animal-show">
        <img alt="animal" className='animal' src={svgMap[type]} /> 
        <img alt="heart" className='heart' onClick={handleClicks} src={heart} style={{width:10 + 10*clicks + "px"}}/>         
    </div>
   );
}

export default AnimalShow;