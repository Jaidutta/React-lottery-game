import React, {Component} from 'react'
import Ball from './Ball';
import './Lottery.css'
class Lottery extends Component{
  static defaultProps = {
    title: 'Lotto',
    balls:  6,
    maxNum: 40
  }
  constructor(props){
    super(props);
    this.state = {
      nums: Array(this.props.balls).fill(null)
    }
    this.clickHandler = this.clickHandler.bind(this)
  }
  generate(){
    this.setState(prevState => ({
      nums: this.state.nums.map(n => Math.floor(Math.random() * this.props.maxNum)+ 1)
    }))
  }
  clickHandler(){
    this.generate()
  }
  render(){
    return(
      <div className="Lottery">
       
          {<h1>{this.props.title}</h1>}
          <div className="Lottery-ball-container">
            {this.state.nums.map(n => <Ball num={n}/>)}
          </div>
          <button onClick={this.clickHandler} className="Lottery-btn">Generate Numbers</button>
        
      </div>
    )
  }
}

export default Lottery;