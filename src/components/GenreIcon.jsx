import React from "react";

export default class Button extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            is_active: false
        }
        this.switch = this.switch.bind(this)
    }
    render(){
        return (
            <div className={`genre-icon ${this.state.is_active?'active':''}`} onClick={this.switch}>
                <div className="img-wrapper">
                    <div className="selector"></div>
                    <img src={this.props.image} alt={this.props.name} />
                </div>
                <p>{this.props.name}</p>
            </div>
        )
    }
    switch(){
        this.setState({is_active: !this.state.is_active})
    }
}