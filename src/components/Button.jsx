import React from "react";

export default class Button extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            background: ''
        }
        this.onAnimationStart = this.onAnimationStart.bind(this)
        this.onAnimationEnd = this.onAnimationEnd.bind(this)
    }
    render(){
        return (
            <div>
                <button style={{background: this.state.background}} className="button" onClick={this.props.onClick} onAnimationEnd={this.onAnimationEnd} onAnimationStart={this.onAnimationStart}>
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
}