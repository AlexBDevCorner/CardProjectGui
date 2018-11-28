import React, { Component } from 'react'
import CardTable from './CardTable'

class App extends Component {
     
    render() {
        const title = 'Sergunjas project'

        return (
            <div>
                <div>{title}</div>

                <CardTable/>
            </div>     
        )
    }

}

export default App