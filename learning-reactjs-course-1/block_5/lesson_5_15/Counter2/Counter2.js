import React from 'react'
import {ClickedContext} from '../App'

export default props => {
    return (
        <div style={{
            border: '1px solid #ccc',
            width: 200,
            margin: '0 auto'
        }}>
            <h3>Counter 2</h3>
            <ClickedContext.Consumer>
                {clicked => clicked ? <p>Cliked</p> : null}
            </ClickedContext.Consumer>
            {/*{props.clicked ? <p>Cliked</p> : null}*/}
        </div>
    )
}