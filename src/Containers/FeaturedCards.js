import React from 'react'

class FeaturedCards extends React.Component{
    render(){
        console.log("Feautured Card Props: ", this.props.card)
        return(
            
            <div className="cardCard">
                <img src={this.props.card.img_one} width="250px" alt="Card Cover" />
                <h3>{this.props.card.price}</h3>
                <p>{this.props.card.name}</p>
            </div>
        )
    }
}

export default FeaturedCards
