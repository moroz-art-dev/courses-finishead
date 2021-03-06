import React from "react";
import Radium from "radium";
import styles from './Car.module.css';

class Car extends React.Component {
    render() {
        const inputClasses = [styles.input];

        if (this.props.name !== ""){
            inputClasses.push(styles.green)
        } else {
            inputClasses.push(styles.red)
        }

        if (this.props.name.length > 4){
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
                <h3>Car name: {this.props.name}</h3>
                <p>Year: <strong>{this.props.year}</strong></p>
                <input
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(' ')}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}

export default Radium(Car)