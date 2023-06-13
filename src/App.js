import AnimalShow from './AnimalShow';
import 'bulma/css/bulma.css';
import { useState } from 'react';

function App() {
    
    const [count, setCount] = useState(0);
    const handleClick = () => {
        alert("This is a animal");
    }
    const handleClickCount = () => {
        // set the count 
        setCount(count + 1); 
    }
    
    //custom function for alert button
    function AlertButton({message, children}) {
        return (
            <button onClick={() => alert(message)}>{children}</button>
        );
    }
    
    return (
        
        <div>
            <button className='button is-black ml-6' onClick={function() {alert("Button is Clicked by Mudit")}}>Add Animal</button>
            <br></br>
            <br></br>
            <button className='button is-grey ml-6' onClick={ () => alert("Button is Clicked by Lion")}>Add Animal - Arrow Function</button>
            <br></br>
            <br></br>
            <button className='button is-red ml-6 buttons' onClick={handleClickCount}>Add Animal Count</button>
            <div>No of animals is: {count}</div>

            <div>********************************************* Buttons using custom default AlertButton*******************************************************</div>
            <AlertButton message="Hey Mudit! Playing">Play Movie</AlertButton>
            <AlertButton message="Uploading the Files! Please wait for a while">Upload Files</AlertButton>
            
    
        </div>
    )
}
export default App;
