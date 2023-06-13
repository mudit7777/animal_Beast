import AnimalShow from './AnimalShow';
import 'bulma/css/bulma.css';

function App() {
    const handleClick = () => {
        console.log("This is a animal");
    }
    return (
        <div>
            <button className='button is-black' onClick={handleClick}>Add Animal</button>
            Animals List is here 
        </div>
    )
}
export default App;