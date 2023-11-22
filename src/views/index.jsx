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
        this.switchMenu = this.switchMenu.bind(this)
    }
    componentDidMount(){
        Emitter.on('change_filter', (params)=>{
            this.setState({activeGenres: params})
        })
        Emitter.on('close_filter', ()=>{
            this.setState({menuShowed: false})
        })
        this.getMovie()
    }
    render(){
        return (
            <main>
                <div style={{display: 'grid', gridTemplateColumns: '3em auto 3em', alignItems: 'center'}}>
                    <div></div>
                    <CButton text={this.state.buttonText} onClick={this.getMovie}/>
                    <UseAnimations animation={settings2} size={32} onClick={this.switchMenu} wrapperStyle={{marginLeft: '.5em', cursor: 'pointer'}}/>
                </div>
                <CCard/>
                <div className={`popup-menu ${this.state.menuShowed ? 'show': ''}`}>
                    <CFilter/>
                </div>
            </main>
        )
    }
    getMovie(){
        Emitter.emit('get_movie_start', {})
        const options = {
            method: 'GET',
            url: 'https://moviesdatabase.p.rapidapi.com/titles/random',
            params: {
              list: 'top_rated_series_250',
              limit: 1,
              genre: null
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_TOKEN,
                'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
            }
        };
        if(this.state.activeGenres.size > 0){
            let random_index = Math.floor(Math.random()*this.state.activeGenres.size)
            let random_gener = [...this.state.activeGenres][random_index]??''
            options.params.genre = random_gener
        }
        
        axios.request(options)
            .then(function (response){
                let movie = response.data.results[0]
                let image = movie.primaryImage ? movie.primaryImage.url : ''
                let title = movie.originalTitleText ? movie.originalTitleText.text : ''
                let year = movie.releaseYear ? movie.releaseYear.year : ''
                title = [title, year].filter(el => {return el}).join(', ')
                Emitter.emit('get_movie_success', {image: image, title: title})
            })
            .catch(err => {
                console.log(err);
            })
    }
    switchMenu(){
        this.setState({menuShowed: !this.state.menuShowed})
    }
}