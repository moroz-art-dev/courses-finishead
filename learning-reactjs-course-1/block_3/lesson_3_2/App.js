import './App.css';
import Car from './Car/Car'
import {Component} from "react";

class App extends Component {
    state = {
        cars: [
            {'name': "Ford", 'year': 2018},
            {'name': "Audi", 'year': 2016},
            {'name': "Mazda", 'year': 2012},
        ],
        pageTitle: 'React components'
    }
   changeTitleHandler = () => {
        console.log('click');
   }

   render() {

       const cars = this.state.cars
       const divStyle = {
           'textAlign': 'center'
       }
       return (
           <div style={divStyle}>
               <h1>{this.state.pageTitle}</h1>
               <button onClick={this.changeTitleHandler}>Change title</button>
               <Car name={cars[0].name} year={cars[0].year} />
               <Car name={cars[1].name} year={cars[1].year} />
               <Car name={cars[2].name} year={cars[2].year} />
           </div>
       );
   }
}

export default App;
