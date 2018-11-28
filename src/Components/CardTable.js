import React, { Component } from 'react'

class CardTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cards : [
                { name: "Tolik", price : 0.99 },
                { name: "Tolikll", price: 1999 }
            ]
        }
    }

    componentWillMount() {
        fetch("http://localhost:3123/stock")
            .then(res => res.json())
            .then(res => {
                const data = res.article.map(art => {
                    return {
                        name : art.product.enName,
                        price : art.price
                    }
                })
                this.setState({
                    cards : [
                        ...this.state.cards,
                        ...data
                    ]
                })
            })
    }

    render() {
        const cards = this.state.cards
        console.log(cards)
        
        return (
            <table>
                <thead>
                    <tr>
                        <th>Card Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cards.map(card => <tr key={card.name}><td>{card.name}</td><td>{card.price}</td></tr>)}
                </tbody>
            </table>
        )
    }

}

export default CardTable