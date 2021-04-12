import React, { Component } from "react";
import './CSS/Form.css';

class Form extends Component {
    constructor(props){
        super(props)

        this.state = {
            firstName : "",
            lastName : "",
            gender : "",
            age : "",
            password : "",
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    firstHandler = (event) =>{
        this.setState({
            firstName : event.target.value
        })
    }

    lastHandler = (event) =>{
        this.setState({
            lastName : event.target.value
        })
    }

    genderHandler = (event) =>{
        this.setState({
            gender : event.target.value
        })
    }

    ageHandler = (event) =>{
        this.setState({
            age : event.target.value
        })
    }
    
    passwordHandler = (event) =>{
        this.setState({
            password : event.target.value
        })
    }

    handleSubmit = (event) =>{
        alert(`${this.state.firstName} ${this.state.lastName} Registered successfully!!!`)
        console.log(this.state);
        this.setState({
            firstName : "",
            lastName : "",
            gender : "",
            age : "",
            password : "",
        })
        event.preventDefault()
    }

    render(){
        return(
            <div className="one">
                <form onSubmit={this.handleSubmit} >
                    <h1>User Registration Form</h1>
                    <label>FirstName:</label> <input type="text" value={this.state.firstName} onChange={this.firsthandler} placeholder="FirstName" required /><br />
                    <label>LastName:</label> <input type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="LastName" required/><br />
                    <label>Gender: </label><select onChange={this.genderhandler} defaultValue="Select Gender" required>
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <label>  Age:</label> <input type="text" value={this.state.age} onChange={this.agehandler} placeholder="Age" required/><br />
                    <label>Password:</label> <input type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password" required/><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Form