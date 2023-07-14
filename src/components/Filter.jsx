import React from "react";
import genres from '../data/genres.json'
import CGenreIcon from '../components/GenreIcon'
import Emitter from "../utils/EventEmitter";

export default class Button extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            activeGenres: new Set()
        }
    }
    componentDidMount(){
        Emitter.on('switch_genre', (name, is_active)=>{
            let activeGenres = new Set(this.state.activeGenres)
            if(is_active){
                activeGenres.add(name)
            }
            else{
                activeGenres.delete(name)
            }
            this.setState({activeGenres: activeGenres})
            Emitter.emit('change_filter', activeGenres)
        })
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
}