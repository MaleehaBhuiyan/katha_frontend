import React from 'react'

const heartButton = require('../images/heartButton.png')
const unfilledHeartButton = require('../images/unfilledHeartButton.png')
const shoppingCartButton = require('../images/shoppingCartButton.png')

class FeaturedCards extends React.Component{
    state = {
        hover:false 
    }

    toggleHover() {
        this.setState({hover: !this.state.hover})
    }

    image = () => {
        if (this.state.hover === false) 
        {
            return <img src={this.props.card.img_one} width="250px" alt="Card Cover" />
        } 
        else 
        {
            return <img src={this.props.card.img_three} width="250px" alt="Card Cover" />
        }
    }

    favClick = () => {
        this.props.updateFav(this.props.card.id)
    }



    render(){

        return(
            
            <div className="cardCard">
                <div onMouseEnter={() => this.toggleHover()} onMouseLeave={() => this.toggleHover()}>{this.image()}</div>
                <div onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} />
                <div className="middleSection">
                    <div id="shoppingCartButton" className="middleChild"><img src={shoppingCartButton} width="45" /></div>
                    <div id="heartButton" className="middleChild" onClick={() => this.favClick()}><img src={unfilledHeartButton} width="45" /></div>
                </div>
                <h3 className="middleChild">${this.props.card.price}</h3>
                <p>{this.props.card.name}</p>
            </div>
        )
    }
}

export default FeaturedCards


