import logo from '../assets/logo-black.png'
function EmployeeRegistration(props){
    return(
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
                            <label for="empname">Employee Name</label>
                            <input type="text" name="empname" placeholder="Enter guest's name" id="empname" />
                        </div>
                        <div className="regfield">
                            <label for="phone">Phone Number </label>
                            <input type="text" name="phone" placeholder="Enter room number" id="phone" />
                        </div>
                        <div className="regfield">
                            <label for="jobdes">Job Description</label>
                            <input type="text" name="jobdes" placeholder="Enter Job title" id="jobdes" />
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

export default EmployeeRegistration