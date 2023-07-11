import React from "react";
import axios from "axios";
import Emitter from "../utils/EventEmitter";

export default class Button extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            background: ''
        }
        this.onAnimationStart = this.onAnimationStart.bind(this)
        this.onAnimationEnd = this.onAnimationEnd.bind(this)
        this.getMovie = this.getMovie.bind(this)
        this.onClick = this.onClick.bind(this)
    }
    render(){
        return (
            <div>
                <button style={{background: this.state.background}} className="button" onClick={this.onClick} onAnimationEnd={this.onAnimationEnd} onAnimationStart={this.onAnimationStart}>
                    <p className="button__text">{this.props.text}</p>
                </button>
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
    onClick(){
        Emitter.emit('get_movie_start', {})
        this.getMovie()
    }
    getMovie(){
        axios.get('http://api.randomovie.cloud/api/movie')
        .then((response)=>{
            let image = response.data.image
            let title = response.data.title
            Emitter.emit('get_movie_success', {image: image, title: title})
        })
        
    }
}