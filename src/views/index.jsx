import CButton from '../components/Button'
import CCard from '../components/Card'
import CFilter from '../components/Filter'
import React from 'react'
import Emitter from '../utils/EventEmitter'
import axios from 'axios'
export default class IndexView extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            buttonText: "Another one?",
        }
        this.getMovie = this.getMovie.bind(this)
    }
    componentDidMount(){
        this.getMovie()
    }
    render(){
        return (
            <main>
                {/* <CButton text={this.state.buttonText} onClick={this.getMovie}/>
                <CCard/> */}
                <CFilter/>
            </main>
        )
    }
    getMovie(){
        Emitter.emit('get_movie_start', {})
        // axios.get(process.env.REACT_APP_API_URL+'/api/movie', {
        //     headers: {
        //         'Content-type': 'application/json'
        //     }
        // })
        // .then((response)=>{
        //     let image = response.data.image
        //     let title = response.data.title
        //     Emitter.emit('get_movie_success', {image: image, title: title})
        // })
    }
}