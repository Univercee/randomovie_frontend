import React from "react";
import Emitter from "../utils/EventEmitter";
export default class Button extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            is_active: false,
            is_fade: false
        }
        this.switch = this.switch.bind(this)
        this.onAnimationEnd = this.onAnimationEnd.bind(this)
    }
    render(){
        return (
            <div className={`genre-icon ${this.state.is_active?'active':''}`} onClick={this.switch}>
                <div className="img-wrapper">
                    <div className={`selector ${this.state.is_fade?'fade':''}`} onAnimationEnd={this.onAnimationEnd}></div>
                    <img src={this.props.image} alt={this.props.name} />
                </div>
                <p>{this.props.name}</p>
            </div>
        )
    }
    switch(){
        let is_active = !this.state.is_active
        this.setState({is_active: is_active, is_fade: !is_active})
        Emitter.emit('switch_genre', this.props.name, is_active)
    }
    onAnimationEnd(e){
        if(e.animationName === 'fillOut'){
            this.setState({is_fade: false})
        }
    }
}