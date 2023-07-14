import React from "react";
import genres from '../data/genres.json'
import CGenreIcon from '../components/GenreIcon'

export default class Button extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            activeGenres: []
        }
    }
    render(){
        return (
            <div className="filter-wrapper">
                {Object.entries(genres).map(([key, value]) => {
                    return <CGenreIcon key={key} name={key} image={value} />
                })}
            </div>
        )
    }
    onAnimationEnd(e){
        if(e.animationName === 'transfusionIn'){
            this.setState({background: "#eee"})
        }
    }
    onAnimationStart(e){
        if(e.animationName === 'transfusionOut'){
            this.setState({background: ""})
        }
    }
}