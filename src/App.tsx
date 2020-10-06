import React from "react";
import './App.scss';

class App extends React.Component {
  state = {
    ValA: 0,
    ValB: 0,
    ValC: 0,
    checkedA: false,
    checkedB: false,
    checkedC: false,
    totalVal: 0
  };

  // Get value from input
  onChangeVal = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    this.setState({
      [name]: parseInt(value) || 0
    });
  };

  // Plus function
  tambah = () => {
    const { ValA, ValB, ValC, checkedA, checkedB, checkedC } = this.state;
    //this.setState({ totalVal: ValA + ValB + ValC });

    // Alert if single input value
    if (
      (checkedA === false && checkedB === false) ||
      (checkedA === false && checkedC === false) || 
      (checkedB === false && checkedC === false)) {
      alert("Please input minimum two value");
    }

    if (checkedA === true) {
      this.setState({ totalVal: 0 });
    } 

    if (checkedB === true) {
      this.setState({ totalVal: 0 });
    }

    if (checkedC === true) {
      this.setState({ totalVal: 0 });
    }

    if (checkedA === true && checkedB === true) {
      this.setState({ totalVal: ValA + ValB });
    }

    if (checkedA === true && checkedC === true) {
      this.setState({ totalVal: ValA + ValC });
    } 

    if (checkedB === true && checkedC === true) {
      this.setState({ totalVal: ValB + ValC });
    } 

    if (checkedA === true && checkedB === true && checkedC === true) {
      this.setState({ totalVal: ValA + ValB + ValC });
    }    
  };

  // Minus function
  kurang = () => {
    const { ValA, ValB, ValC, checkedA, checkedB, checkedC } = this.state;
    
    // Alert if single input value
    if (
      (checkedA === false && checkedB === false) ||
      (checkedA === false && checkedC === false) || 
      (checkedB === false && checkedC === false)) {
      alert("Please input minimum two value");
    }

    if (checkedA === true) {
      this.setState({ totalVal: 0 });
    } 

    if (checkedB === true) {
      this.setState({ totalVal: 0 });
    }

    if (checkedC === true) {
      this.setState({ totalVal: 0 });
    }

    if (checkedA === true && checkedB === true) {
      this.setState({ totalVal: ValA - ValB });
    } 

    if (checkedA === true && checkedC === true) {
      this.setState({ totalVal: ValA - ValC });
    } 

    if (checkedB === true && checkedC === true) {
      this.setState({ totalVal: ValB - ValC });
    } 

    if (checkedA === true && checkedB === true && checkedC === true) {
      this.setState({ totalVal: ValA - ValB - ValC });
    }
  };

  // Multiplication function
  kali = () => {
    const { ValA, ValB, ValC, checkedA, checkedB, checkedC } = this.state;
    
    // Alert if single input value
    if (
      (checkedA === false && checkedB === false) ||
      (checkedA === false && checkedC === false) || 
      (checkedB === false && checkedC === false)) {
      alert("Please input minimum two value");
    }

    if (checkedA === true) {
      this.setState({ totalVal: 0 });
    } 

    if (checkedB === true) {
      this.setState({ totalVal: 0 });
    }

    if (checkedC === true) {
      this.setState({ totalVal: 0 });
    }

    if (checkedA === true && checkedB === true) {
      this.setState({ totalVal: ValA * ValB });
    } 

    if (checkedA === true && checkedC === true) {
      this.setState({ totalVal: ValA * ValC });
    } 

    if (checkedB === true && checkedC === true) {
      this.setState({ totalVal: ValB * ValC });
    } 

    if (checkedA === true && checkedB === true && checkedC === true) {
      this.setState({ totalVal: ValA * ValB * ValC });
    }
  };

  // Divide function
  bagi = () => {
    const { ValA, ValB, ValC, checkedA, checkedB, checkedC } = this.state;
    
    // Alert if single input value
    if (
      (checkedA === false && checkedB === false) ||
      (checkedA === false && checkedC === false) || 
      (checkedB === false && checkedC === false)) {
      alert("Please input minimum two value");
    }

    if (checkedA === true) {
      this.setState({ totalVal: 0 });
    } 

    if (checkedB === true) {
      this.setState({ totalVal: 0 });
    }

    if (checkedC === true) {
      this.setState({ totalVal: 0 });
    }

    if (checkedA === true && checkedB === true) {
      this.setState({ totalVal: ValA / ValB });
    } 

    if (checkedA === true && checkedC === true) {
      this.setState({ totalVal: ValA / ValC });
    } 

    if (checkedB === true && checkedC === true) {
      this.setState({ totalVal: ValB / ValC });
    } 

    if (checkedA === true && checkedB === true && checkedC === true) {
      this.setState({ totalVal: ValA / ValB / ValC });
    }
  };

  render() {
    return (

      <div className="main-wrapper">
        <div className="calc-input">
          <div className="col12">
            <input
              name="ValA"
              value={this.state.ValA}
              type="text"
              onChange={this.onChangeVal}
            />

            <input
              className="input-float"
              type="checkbox"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const { checked } = event.target;
                this.setState({ checkedA: checked });

                if (checked === false) {
                  this.setState({
                    ValA: 0
                  });
                }
              }}
            />
          </div>
          <div className="col12">
            <input
              name="ValB"
              value={this.state.ValB}
              type="text"
              onChange={this.onChangeVal}
            />

            <input
              className="input-float"
              type="checkbox"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const { checked } = event.target;
                this.setState({ checkedB: checked });

                if (checked === false) {
                  this.setState({
                    ValB: 0
                  });
                }
              }}
            />
          </div>
          <div className="col12">
            <input
              name="ValC"
              value={this.state.ValC}
              type="text"
              onChange={this.onChangeVal}
            />

            <input
              className="input-float"
              type="checkbox"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const { checked } = event.target;
                this.setState({ checkedC: checked });

                if (checked === false) {
                  this.setState({
                    ValC: 0
                  });
                }
              }}
            />
          </div>
        </div>

        <div className="action">
          <button onClick={this.tambah}>+</button>
          <button onClick={this.kurang}>-</button>
          <button onClick={this.kali}>x</button>
          <button onClick={this.bagi}>/</button>
        </div>

        <div className="result">
          <span>Hasil:</span>
          <span>{this.state.totalVal}</span>
        </div>
      </div>
    );
  }
}

export default App;
