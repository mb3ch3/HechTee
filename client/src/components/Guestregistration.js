import logo from '../assets/logo-black.png'
function GuestRegistration(props) {
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
                            <label for="guestname">Guest Name</label>
                            <input type="text" name="guestname" placeholder="Enter guest's name" id="guestname" />
                        </div>
                        <div className="regfield">
                            <label for="roomno">Room Number </label>
                            <input type="text" name="roomno" placeholder="Enter room number" id="roomno" />
                        </div>
                        <div className="regfield">
                            <label for="employeeid">Manager</label>
                            <input type="text" name="employeeid" value="1" id="employeeid" />
                        </div>
                        
                    </div>
                    <div className="btn-submit guestsub">
                        <p>submit</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GuestRegistration