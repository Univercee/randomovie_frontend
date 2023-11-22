import React from "react";
import Emitter from "../utils/EventEmitter";
import UseAnimations from 'react-useanimations'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import copy from 'react-useanimations/lib/copy'

export default class Button extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            animation: copy,
            copied: false
        }
        this.copy = this.copy.bind(this)
    }
    componentDidMount(){
        Emitter.on('get_movie_start', ()=>{
            this.setState({copied: false})
        })
    }
    render(){  
        return (
            <div className="card__copy">
                {this.state.copied
                    ?<FontAwesomeIcon icon={faCheck} style={{color: "#44c814"}} />
                    :<UseAnimations animation={this.state.animation} onClick={this.copy} size={32} wrapperStyle={{cursor: 'pointer', visibility: this.props.imageVisibility, textAlign: 'center'}}/>
                }
            </div>
        )
    }
    copy(){
        this.setState({copied: true})
        navigator.clipboard.writeText(this.props.title);
        this.forceUpdate()
    }
}