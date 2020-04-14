import React, { Component } from 'react';
import styled from 'styled-components'

class Increament extends Component{
  
    state = {
        count:0
    }

    IncreamentItem (){
        this.setState({count: this.state.count + 1});
      
    }
    DecreaseItem(){
        this.setState({count: this.state.count - 1});
       if(this.state.count <=0){
           window.alert("Can't Decreament");
          this.setState({count:this.state.count = 0});
       }
    }
    reset(){
        this.setState({count: 0});
    }

    render(){

        // let show 
        
        // let  count = this.state.count;
        const Button = styled.button`
        background-color: #FF1493;
        margin-bottom: 1em;
        padding-top: 10px;
        padding-bottom:10px;
        padding-left:40px;
        padding-right:40px;
        text-align:center;
        `
        const Input = styled.input`
        text-align:center;
        justify-content:space-between;
        width: 20em;
        margin-left:1em;
        margin-right: 1em;
        font-size: 16px;
        padding-bottom: 10px;
        padding-top: 10px;
        `
        
        return(
            <div>
                <Button onClick={() => this.IncreamentItem()}>+</Button>
                <Input type="text" className="number" value={this.state.count}></Input>
                <Button className="Decreament" onClick={() => this.DecreaseItem()}>-</Button>
                <br/>
                <Button className="reset" onClick={()=>this.reset()}>Reset</Button>
                {/* <h1>Count {this.state.count}</h1> */}
            </div>
        );
        
    }
}
export default Increament;