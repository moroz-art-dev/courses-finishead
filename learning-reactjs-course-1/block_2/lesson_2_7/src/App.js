import './App.css';
import Car from './Car/Car'

function App() {
    const divStyle = {
        'textAlign' : 'center'
    }
  return (
    <div style={divStyle}>
        <h1 style={{color: "blue", fontSize: "10px"}}>Hello Artr</h1>
        <Car name={'Ford'} year={2018}>
            <p style={{color: "blue"}}>COLOR</p>
        </Car>
        <Car name="Audi" year={2016}>
            <p style={{color: "red"}}>COLOR</p>
        </Car>
        <Car name={'Mazda'} year={2010} />
    </div>
  );
}

export default App;
