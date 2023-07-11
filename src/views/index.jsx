import CButton from '../components/Button'
import CCard from '../components/Card'
import React from 'react'
export default class IndexView extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            buttonText: "Another one?",
        }
    }
    render(){
        return (
            <main>
                <CButton text={this.state.buttonText} />
                <CCard/>
            </main>
        )
    }
}