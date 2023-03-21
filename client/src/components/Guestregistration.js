import logo from '../assets/logo-black.png'
import axios from 'axios'
import React from 'react'

class GuestRegistration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
        this.registerGuest = this.registerGuest.bind(this)
    }
    registerGuest() {
        const gname = document.querySelector("#guestname").value
        const groom = document.querySelector("#roomno").value
        const gemp = document.querySelector("#employeeid").value

        try {
            axios({
                url: "http://127.0.0.1:3000/creategst",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                data: {
                    gstname: gname,
                    room: groom,
                    employee_id: gemp,
                    admin_id: 1
                }
            })
                .then((res) => {
                    console.log("guest creation result: " + JSON.stringify(res))
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
    render() {
        return (
            <div>
                <div className="bg" id="bg">
                    <div className='heading' id="heading" >
                        <span>Guest Registration</span>
                    </div>
                </div>
                <div className="guest-content">

                    <div className="regform">
                        <div className="regimage">
                            <img src={logo} alt="logo here" />
                        </div>
                        <div className="regfields">
                            <div className="regfield">
                                <label >Guest Name</label>
                                <input type="text" name="guestname" placeholder="Enter guest's name" id="guestname" />
                            </div>
                            <div className="regfield">
                                <label >Room Number </label>
                                <input type="text" name="roomno" placeholder="Enter room number" id="roomno" />
                            </div>
                            <div className="regfield">
                                <label >Staff Responsible</label>
                                <input type="number" name="employeeid" id="employeeid" />
                            </div>

                        </div>
                        <div className="btn-submit guestsub" onClick={this.registerGuest}>
                            <p>submit</p>
                        </div>
                        {
                            this.state.show ? <div className='mess'>guest created successfully</div> : <div></div>
                        }
                    </div>
                </div>
            </div>
        )
    }

}

export default GuestRegistration