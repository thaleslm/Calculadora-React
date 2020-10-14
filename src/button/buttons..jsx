import React, {Component} from 'react'
import './buttons.css'


export default class Button extends Component{
    ClassButtons(){
       return(
           this.props.label === 'AC' ? 'tree' : '' ||
           this.props.label === '='  ? 'two': ''
          ) } 

    render(){
        return(
        <button
            onClick={()=> this.props.Contbutton && this.props.Contbutton(this.props.label)}
            className={`Buttons ${this.ClassButtons()}`} 
            >
            {this.props.label}
        </button>
        )
    
}}