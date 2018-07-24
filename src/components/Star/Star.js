import React, { Component } from 'react';

class Star extends Component {
    constructor(props){
        super(props);
        this.state = {
            star: {
                name: '',
                famousFor: ''
            }
        }
    }
    handleName = (event) => {
        console.log(event.target.value);

        this.setState({
            star: {
                ...this.state.star,
                name: event.target.value
            }
        })
    }
    handleFamousFor = (event) => {
        console.log(event.target.value);

        this.setState({
            star: {
                ...this.state.star,
                famousFor: event.target.value
                
            }
        })
    }
    handleClick = (event) => {
       console.log(this.state.star)

    }




    render(){
        return (
            <div>
                <input type="text" onChange={this.handleName}/>
                <input type="text" onChange={this.handleFamousFor}/>
                <button onClick={this.handleClick}>POST</button>
                <div>
                    <p>{this.state.star.name}</p>
                    <p>is famous for</p>
                    <p>{this.state.star.famousFor}</p>
                </div>
            </div>

        )
    }
}






export default Star;