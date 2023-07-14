import CButton from '../components/Button'
import CCard from '../components/Card'
import CFilter from '../components/Filter'
import React from 'react'
import Emitter from '../utils/EventEmitter'
import axios from 'axios'
import UseAnimations from 'react-useanimations'
import settings2 from 'react-useanimations/lib/settings2'
export default class IndexView extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            buttonText: "Another one?",
            activeGenres: new Set(),
            menuShowed: false
        }
        this.getMovie = this.getMovie.bind(this)
        this.showMenu = this.showMenu.bind(this)
    }
    componentDidMount(){
        Emitter.on('change_filter', (params)=>{
            this.setState({activeGenres: params})
        })
        this.getMovie()
    }
    render(){
        return (
            <main>
                <div style={{display: 'grid', gridTemplateColumns: '3em auto 3em', alignItems: 'center'}}>
                    <div></div>
                    <CButton text={this.state.buttonText} onClick={this.getMovie}/>
                    <UseAnimations animation={settings2} size={56} onClick={this.showMenu} wrapperStyle={{marginLeft: '.5em', cursor: 'pointer'}}/>
                </div>
                <CCard/>
                <div id='popup_menu' style={{transition: 'all .2s ease',position: 'absolute', top: 0, left: '100%', width: '30%', height: '100vh', overflow: 'hidden'}}>
                    <CFilter/>
                </div>
            </main>
        )
    }
    getMovie(){
        Emitter.emit('get_movie_start', {})
        let random_index = Math.floor(Math.random()*this.state.activeGenres.size)
        let random_gener = [...this.state.activeGenres][random_index]??''
        axios.get(process.env.REACT_APP_API_URL+'/api/movie?genre='+random_gener, {
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then((response)=>{
            let image = response.data.image
            let title = response.data.title
            Emitter.emit('get_movie_success', {image: image, title: title})
        })
    }
    showMenu(){
        if(this.state.menuShowed){
            document.getElementById('popup_menu').style.left = '100%'
        }
        else {
            document.getElementById('popup_menu').style.left = '70%'
        }
        this.setState({menuShowed: !this.state.menuShowed})
    }
}