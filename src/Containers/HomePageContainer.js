import React from 'react';
import FeaturedCards from './FeaturedCards'

class HomePageContainer extends React.Component{
    
    FeaturedCards = () => {
        if(this.props.cards === 0)
        {
           return "Loading"
        }
        else
        {
            return this.props.cards.map(card => <FeaturedCards key={card.id} card={card} updateFav={this.props.updateFav} />)
        }
    }
    
    render(){
    return(
      <div>
          <br/>
          <br/>
          <br/>
          
          <div className="banner">
              <div className="bannerText">
                <h1 id="bannerMain">SPOOKY SEASON IS AMONGST US</h1>
                <h3 id="bannerSub">Give a loved one a fright with one of our featured Halloween cards</h3>
              </div>
          </div>

          <div>
              <div className="featured">
                  <br/>
                  <h1 id="featuredMain">Featured Cards</h1>
                  <br/>
                  <div className="cardContainer">
                    {this.FeaturedCards()}
                  </div>
              </div>
          </div>

      </div>
    )
  }
}

export default HomePageContainer;