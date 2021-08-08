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
        pageTitle: 'React components',
        showCars: false
    }
   changeTitleHandler = pageTitle => {
        this.setState({pageTitle})
   }
    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    }

   render() {

       const divStyle = {
           'textAlign': 'center'
       }

       let cars = null
       if(this.state.showCars){
           cars = this.state.cars.map((car, index)=>{
               return (
                   <Car
                       key={index}
                       name={car.name}
                       year={car.year}
                       onChangeTitle={() => this.changeTitleHandler(car.name)}
                   />
               )
           })
       }

       return (
           <div style={divStyle}>
               <h1>{this.state.pageTitle}</h1>

               <button onClick={this.toggleCarsHandler}>Toggle cars</button>

               {/*{ this.state.showCars*/}
               {/*   ? this.state.cars.map((car, index)=>{*/}
               {/*       return (*/}
               {/*           <Car*/}
               {/*               key={index}*/}
               {/*               name={car.name}*/}
               {/*               year={car.year}*/}
               {/*               onChangeTitle={() => this.changeTitleHandler(car.name)}*/}
               {/*           />*/}
               {/*       )*/}
               {/*    })*/}
               {/*  : null*/}
               {/*}*/}

               {cars}

           </div>
       );
   }
}

export default App;
