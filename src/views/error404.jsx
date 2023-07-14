import React from 'react'
import CButton from '../components/Button'
import { Navigate } from "react-router-dom";
export default class ErrorView extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            buttonText: "To main page",
            redirect: false
        }
        this.toMainPage = this.toMainPage.bind(this)
    }
    render(){
        return (
            <main>
                <p>Oops, page not found</p>
                {this.state.redirect && <Navigate to="/" replace={true}></Navigate>}
                <CButton text={this.state.buttonText} onClick={this.toMainPage}/>
                <div className="license-wrapper">
                    <img src="/images/error404.png" alt="" />
                    <a className="img-license" href="https://useanimations.com">useanimations</a>
                    <a className="img-license" href="http://www.freepik.com">Designed by Bamdewanto / Freepik</a>
                    <div style={{display: 'flex'}}>
                        <a className="img-license" target="_blank" href="https://icons8.com/icon/81984/movie-beginning">Movie Beginning</a>
                        <span>&nbsp;icon by&nbsp;</span>
                        <a target="_blank" href="https://icons8.com">Icons8</a>
                    </div>
                    <a className="img-license" href="https://www.flaticon.com/free-icons/no-camera" title="no camera icons">No camera icons created by Those Icons - Flaticon</a>
                </div>
            </main>
        )
    }
    toMainPage(){
        this.setState({redirect: true})
    }
}