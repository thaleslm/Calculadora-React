import React, {Component} from 'react'
import './Display.css'

export default class Display extends Component{
    render(){
        return(
           
            <display className="Display" >
                {this.props.value}

            </display>
        
        )
    }
}