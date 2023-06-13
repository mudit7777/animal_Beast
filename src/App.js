import AnimalShow from './AnimalShow';
import 'bulma/css/bulma.css';

function App() {
    const handleClick = () => {
        alert("This is a animal");
    }
    return (
        
        <div>
            <button className='button is-black ml-6' onClick={function() {alert("Button is Clicked by Mudit")}}>Add Animal</button>
            <br></br>
            <br></br>
            <button className='button is-grey ml-6' onClick={ () => alert("Button is Clicked by Lion")}>Add Animal - Arrow Function</button>

            Animals List is here 
        </div>
    )
}
export default App;
