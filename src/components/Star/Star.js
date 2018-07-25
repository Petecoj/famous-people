import React, { Component } from 'react';

class Star extends Component {
    constructor(props) {
        super(props);
        this.state = {
            star: {
                name: '',
                famousFor: '',
                popularity: ''
            }
        }
    }

    handleChangeFor = (propertyName) => (event) => {
        this.setState({
            star: {
                ...this.state.star,
                [propertyName]: event.target.value
            }
        })
    }
    // handleName = (event) => {
    //     console.log(event.target.value);

    //     this.setState({
    //         star: {
    //             ...this.state.star,
    //             name: event.target.value
    //         }
    //     })
    // }
    // handleFamousFor = (event) => {
    //     console.log(event.target.value);

    //     this.setState({
    //         star: {
    //             ...this.state.star,
    //             famousFor: event.target.value

    //         }
    //     })
    // }
    handleClick = (event) => {
        console.log(this.state.star)
        event.preventDefault();
        this.setState({
            star: {
                name: '',
                famousFor: '',
                popularity: ''
            }
        })
     
    }




    render() {
        return (
            <div>
                <form onSubmit={this.handleClick}>
                    <input value={this.state.star.name} type="text" onChange={this.handleChangeFor('name')} />
                    <input value={this.state.star.famousFor} type="text" onChange={this.handleChangeFor('famousFor')} />
                    <input value={this.state.star.popularity} type='number' onChange={this.handleChangeFor('popularity')} />
                    <input type="submit" value="Submit"/>
                    <div>
                        <p>{this.state.star.name}</p>
                        <p>is famous for</p>
                        <p>{this.state.star.famousFor}</p>
                        <p>and popularity score is</p>
                        <p>{this.state.star.popularity}</p>
                    </div>
                </form>
            </div>

        )
    }
}






export default Star;