import React,{Component} from 'react'
import './calculadora.css'

import Button from '../button/buttons.'
import Display from '../Display/Display'


export default class Calculadora extends Component{
    Inicial = {
        displayValue : 0,
        DisplayApag : false,
        valor : [0,0],
        ivalor: 0,
        operacao : null
        
        
    }
    
    
    state={...this.Inicial}

    constructor(props){
        super(props)
        this.ac = this.ac.bind(this)
        this.digit = this.digit.bind(this)
        this.operacao = this.operacao.bind(this)
        
       

    }

    ac(){
    this.setState(this.Inicial)
    }
    
    digit(a){
       
        if(a === '.' && this.state.displayValue.includes('.')){
            return
        }
        
        const Clear = this.state.displayValue === 0 || this.state.DisplayApag
        const SequenciaNum = Clear? '' : this.state.displayValue
        const DisplayValue = SequenciaNum + a
        
        this.setState({displayValue : DisplayValue, DisplayApag: false})
        
        if(a !== '.'){
            const DisplayValueF = parseFloat(DisplayValue)
            const i = this.state.ivalor
            const Valor = [...this.state.valor]
            Valor[i] = DisplayValueF
           
            this.setState({valor: Valor})
        }
    }


    operacao(operacao){
        if(this.state.ivalor === 0){
            this.setState({ivalor: 1, DisplayApag : true, operacao})
        
        }else{
            const finish = operacao === '='
            let Valor = [...this.state.valor]
            const op = this.state.operacao
   
            switch (op) {

                case '+':  
                Valor[0] = Valor[0] + Valor[1]
                break;
                
                case '-':
                Valor[0] = Valor[0] - Valor[1]  
                break;
                
                case 'x':    
                Valor[0] = Valor[0] * Valor[1]
                break;
                 
                case'÷':  
                Valor[0] = Valor[0]  /Valor[1]
                break;
                case finish:
                Valor[0] = Valor
                    break;
                default:
                }
           
            Valor[1]= 0

            this.setState({
            ivalor : finish? 0 :1,
            valor: Valor ,
            displayValue: Valor[0],
            DisplayApag: !finish })
        
            }
    }
   

    render(){
 
        return(
                <div className="calculadora">
                <Display value={this.state.displayValue}/>
                <Button label="AC" Contbutton={()=>this.ac()}/>
                <Button label="÷" Contbutton={(e)=>this.operacao(e)}/>
                <Button label="7" Contbutton={(a)=>this.digit(a)}/>
                <Button label="8" Contbutton={(a)=>this.digit(a)}/>
                <Button label="9" Contbutton={(a)=>this.digit(a)}/>
                <Button label="x" Contbutton={(e)=>this.operacao(e)}/>
                <Button label="4" Contbutton={(a)=>this.digit(a)}/>
                <Button label="5" Contbutton={(a)=>this.digit(a)}/>
                <Button label="6" Contbutton={(a)=>this.digit(a)}/>
                <Button label="-" Contbutton={(e)=>this.operacao(e)}/>
                <Button label="1" Contbutton={(a)=>this.digit(a)}/>
                <Button label="2" Contbutton={(a)=>this.digit(a)}/>
                <Button label="3" Contbutton={(a)=>this.digit(a)}/>
                <Button label="+" Contbutton={(e)=>this.operacao(e)}/>
                <Button label="0" Contbutton={(a)=>this.digit(a)}/>
                <Button label="." Contbutton={(a)=>this.digit(a)}/>
                <Button label="=" Contbutton={(e)=>this.operacao(e)}/>
        </div>
        )
    }
}