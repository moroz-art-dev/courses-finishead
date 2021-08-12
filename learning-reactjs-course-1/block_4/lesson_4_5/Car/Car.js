import React from "react";
import Radium from "radium";
import styles from './Car.module.css';

const Car = props => {
    const inputClasses = [styles.input];

    if (props.name !== ""){
        inputClasses.push(styles.green)
    } else {
        inputClasses.push(styles.red)
    }

    if (props.name.length > 4){
        inputClasses.push(styles.bold)
    }

    const style = {
        border: '1px solid #ccc',
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)',
        ':hover': {
            border: '1px solid #aaa',
            boxShadow: '0 4px 15px 0 rgba(0, 0, 0, 0.25)',
            cursor: 'pointer'
        }
    }

    return (
        <div className={styles.Car} style={style}>
            <h3>Car name: {props.name}</h3>
            <p>Year: <strong>{props.year}</strong></p>
            <input
                type="text"
                onChange={props.onChangeName}
                value={props.name}
                className={inputClasses.join(' ')}
            />
            <button onClick={props.onDelete}>Delete</button>
        </div>
    )
}
export default Radium(Car)