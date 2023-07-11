import React from 'react'
export default class ErrorView extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            buttonText: "Another one?"
        }
    }
    render(){
        return (
            <main>
                <p>Oops, page not found</p>
                <a id="button" className="button" href="/">
                    <p className="button__text">To main page</p>
                </a>
                <div className="license-wrapper">
                    <img src="/images/error404.png" alt="" />
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
}