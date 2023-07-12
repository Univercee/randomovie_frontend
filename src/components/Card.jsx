import React from "react";
import Emitter from "../utils/EventEmitter";

export default class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            default_image: '/images/noimage.png',
            image: '',
            title: '',
            state_name: 'loading',
            init: false
        }
        this.onImageLoad = this.onImageLoad.bind(this)
        this.onImageError = this.onImageError.bind(this)
    }
    componentDidMount(){
        Emitter.once('get_movie_init', ()=>{
            this.setState({init: 'true'})
        })
        Emitter.on('get_movie_success', (data)=>{
            this.setState({image: data.image, title: data.title})
            this.setState({state_name: 'loaded'})
        })
        Emitter.on('get_movie_start', ()=>{
            this.setState({state_name: 'loading', title: '',})
        })
    }
    render(){
        let is_skeleton = 'skeleton'
        let title = ''
        let licenseVisibility = 'hidden'
        let imageVisibility = 'hidden'
        if(this.state.state_name=='img_loaded'){
            is_skeleton = ''
            title = this.state.title
            imageVisibility = 'visible'
            licenseVisibility = this.state.image==this.state.default_image ? 'visible' : 'hidden'
        }
        return (
            <div className="card">
                <div className={`card__image ${is_skeleton}`}>
                    <img src={this.state.image} style={{visibility: imageVisibility}} onError={this.onImageError} onLoad={this.onImageLoad}/>
                    <a style={{visibility: licenseVisibility}} className="img-license" href="https://www.flaticon.com/free-icons/no-camera" title="no camera icons">No camera icons created by Those Icons - Flaticon</a>
                </div>
                <div className="card__body">
                    <div className={`card__title ${is_skeleton}`}>
                        <p>{title}</p>
                    </div>
                </div>
            </div>
        )
    }
    onImageLoad(){
        if(this.state.init){
            this.setState({state_name: 'img_loaded'})
        }
        else{
            this.setState({init: true})
        }
    }
    onImageError(){
        if(this.state.init){
            this.setState({image: this.state.default_image, state_name: 'img_loaded'})
        }
        else{
            this.setState({init: true})
        }
    }
}