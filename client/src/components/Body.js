import Signup from './Signup';
import Login from './Login';
import Notification from './Notification'
import React from 'react';
import axios from 'axios';

class Body extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selection: true,
            notify: false,
            failed: false,
        }
        this.loginState = this.loginState.bind(this)
        this.signupState = this.signupState.bind(this)
        this.showNotification = this.showNotification.bind(this)


    }
    validator(){
        console.log("start login validation")
        const name = document.querySelector("#login_name").value
        const pwd = document.querySelector("#login_pwd").value
        try {
            axios({
                url:"http://127.0.0.1:3000/login",
                method: "POST",
                data: {
                    username: name,
                    password: pwd
                }
            }).then((res)=>{
                console.log(" this is the login result" + JSON.stringify(res))
                if (res.data.error) {
                    console.log("error found")
                } else {
                    window.location.replace('/home');
                }
            }).catch((err)=>{
                console.log("this is the login error "+ err)
            })
        } catch (error) {
            console.log("this is the outer login error "+ error)
        }
    }
    loginState(){ 
        this.setState({selection : false}) 
    } 
    signupState(){ 
        console.log("login clicked")
        this.setState({selection : true}) 
    }
    showNotification(){
        console.log("clicked")
        const usrname = document.querySelector("#name").value
        const usremail = document.querySelector("#email").value
        const usrpwd = document.querySelector("#pwd").value
        try {
            axios({
                url: "http://127.0.0.1:3000/signup",
                method: "POST",
                data: {
                    username: usrname,
                    email: usremail,
                    password: usrpwd
                }
            }).then((res)=>{
                console.log("this is result " + res)
                this.setState({notify : true})
            }).catch((err)=>{
                console.log("this is the err" + err)
                this.setState({failed : true})

            })
        } catch (error) {
            console.log("this is the error" + error)
        }
        
    }


    render() {
        return (
            <div>
                <button onClick={this.signupState}>go to login</button>
                <button onClick={this.loginState}>go to signup</button>
                <div>
                    {
                        this.state.selection ? <Login validation={this.validator} /> : <Signup success={this.showNotification}/>
                    }
                </div>
                <div>
                    {
                        this.state.notify ? <Notification message= 'you can now proceed to' login={this.signupState}/> : null
                    }
                </div>
                <div>
                    {
                        this.state.failed ? <Notification message= 'signup failed. Please try again.'/> : null
                    }
                </div>
            </div>
            
        )

    }

}
export default Body