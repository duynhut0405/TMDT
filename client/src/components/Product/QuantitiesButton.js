import React, {Component} from 'react';
import '../../styles/components/Product/QuantitiesButton.css';

class QuantitiesButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        quantity: 1,
        show: true,
        min: 0
      };
    }
  
    IncrementItem = () => {
        this.setState(prevState => {
          if(prevState.quantity < 9) {
            return {
              quantity: prevState.quantity + 1
            }
          } else {
            return null;
          }
        });
    }
    DecreaseItem = () => {
      this.setState(prevState => {
        if(prevState.quantity > 0) {
          return {
            quantity: prevState.quantity - 1
          }
        } else {
          return null;
        }
      });
    }
    ToggleClick = () => {
      this.setState({
        show: !this.state.show
      });
    }
    handleChange = (event) => {
      this.setState({quantity: event.target.value});
    }
  
    render() {
      return ( 
        <div className='quantitiesBtn'>
            <button onClick = {this.DecreaseItem}>- </button>
            <input className="inputne" value={this.state.quantity} onChange={this.handleChange}/>
            <button onClick={this.IncrementItem}>+</button>
        </div>
      );
    }
  }
  
  export default QuantitiesButton;