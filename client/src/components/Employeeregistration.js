import logo from '../assets/logo-black.png'
import axios from 'axios'
import React from 'react'

class EmployeeRegistration extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show : false
        }
        this.registerEmployee = this.registerEmployee.bind(this)

    }
    registerEmployee() {
    const ename = document.querySelector("#empname").value
    const phone = document.querySelector("#phone").value
    const job = document.querySelector("#jobdes").value
    try {
        axios({
            url: "http://127.0.0.1:3000/createmp",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                empname: ename,
                phone: phone,
                jobdes: job,
                admin_id: 1
            }
        })
            .then((res) => {
                console.log("employee creation result: " + JSON.stringify(res))
                if (res.status === 201) {
                        this.setState({ show: true })
                    }
            }).catch(e => {
                console.log(e)
            })
    } catch (error) {
        console.log(error)
    }
}
    render(){
         return (
        <div>
            <div className="bg" id="bg">
                <div className='heading' id="heading" >
                    <span>Employee Registration</span>
                </div>
            </div>
            <div className="employee-content">

                <div className="regform">
                    <div className="regimage">
                        <img src={logo} alt="logo here" />
                    </div>
                    <div className="regfields">
                        <div className="regfield">
                            <label >Employee Name</label>
                            <input type="text" name="empname" placeholder="Enter guest's name" id="empname" />
                        </div>
                        <div className="regfield">
                            <label >Phone Number </label>
                            <input type="text" name="phone" placeholder="Enter room number" id="phone" />
                        </div>
                        <div className="regfield">
                            <label >Job Description</label>
                            <input type="text" name="jobdes" placeholder="Enter Job title" id="jobdes" />
                        </div>
                        <div className="regfield">
                            <label >Manager</label>
                            <input type="text" name="adminid" disabled value="1" id="adminid" />
                        </div>

                    </div>
                    <div className="btn-submit guestsub" onClick={this.registerEmployee}>
                        <p>submit</p>
                    </div>
                    {
                        this.state.show ? <div className='mess'>employee created successfully</div> : <div></div>
                    }
                </div>
            </div>
        </div>
    )
    }
   
}

export default EmployeeRegistration