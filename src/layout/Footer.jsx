import React from "react";

export default class Footer extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <footer>
                <a href="https://github.com/Univercee"><img src="/images/github.svg"></img></a>
                <a href="https://www.linkedin.com/in/aleksandr-ostromogilskii-769315205/"><img src="/images/linkedin.svg"></img></a>
            </footer>
        )
    }
}