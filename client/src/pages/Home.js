import React from 'react'
import '../App.css'
import logo from '../assets/logo-no-background.png'
import Dashboard from '../components/Dashboard'
import EmployeeRegistration from '../components/Employeeregistration'
import GuestRegistration from '../components/Guestregistration'
// import Modal from "../components/Modal";


class Home extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    constructor(props) {
        super(props)
        this.state = {
            theposition: '',
            choice: 'dashboard',
            employees: '',
            showModal:false
        }
        this.addGuest = this.addGuest.bind(this)
        this.addEmployee = this.addEmployee.bind(this)
        this.setDashboard = this.setDashboard.bind(this)
        this.handleShow = this.handleShow.bind(this)
        this.handleHide = this.handleHide.bind(this)
    }
    handleHide(){
        // this.setState({showModal: false})
        console.log("close clicked")
    }
    handleShow(){
        this.setState({showModal: true})
    }
    addGuest(){
        this.setState({choice: "guest"})
        document.getElementById("nav").style = "none"
    }
    addEmployee(){
        this.setState({choice: "employee"})
        document.getElementById("nav").style = "none"

    }
    setDashboard(){
        this.setState({choice : "dashboard"})
        document.getElementById("nav").style = "none"

    }
    logout(){
        window.location.replace("/")
        document.getElementById("nav").style = "none"

    }
    listenToScroll = () => {
        const heading = document.getElementById("bg")
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop

        // const height =
        //   document.documentElement.scrollHeight -
        //   document.documentElement.clientHeight

        const scrolled = winScroll

        this.setState({
            theposition: scrolled,
        })
        // console.log(" position is: " + this.state.theposition)
        if (this.state.theposition > 20) {
            // console.log("add style here")
            heading.style.position = "fixed";
            heading.style.top = 0
            heading.style.background = "white"
            heading.style.height = "10vh"


        } else {
            heading.style.position = "relative"
            heading.style.top = ""
            heading.style.height = "5vh"
            heading.style.background = "white"
        }
    }
    navToggle = () => {
        const nav = document.getElementById("nav")
        if(nav.style.display === "inline"){
            nav.style.display = "none"
        } else {
            nav.style.display = "inline"
        }
    }
    render() {
        const time = new Date().getHours()

        return (
            <div className='content'>
                <div className='ham-items' id='nav'>
                        <div className='ham-item' onClick={this.setDashboard}>Dashboard</div>
                        <div className='ham-item' onClick={this.addGuest}>Add guest</div>
                        <div className='ham-item' onClick={this.addEmployee}>Add Employee</div>
                        <div className='ham-item' onClick={this.logout}>Logout</div>
                    </div>
                <div className='side-panel'>
                    <img src={logo} alt='logo' />
                    <div className='hamburger' id='ham' onClick={this.navToggle}>
                        Menu
                    </div>
                    
                    <div className='tab-links'>
                        <div className={`tab-link ${this.state.choice === "dashboard" ? "tab-active" : ""}`} id='dashboard' onClick={this.setDashboard}>
                            Dashboard
                        </div>
                        <div className={`tab-link ${this.state.choice === "guest" ? "tab-active" : ""}`} id='guest' onClick={this.addGuest}>
                            Add guest
                        </div>
                        <div className={`tab-link ${this.state.choice === "employee" ? "tab-active" : ""}`} id='employee' onClick={this.addEmployee}>
                            Add Employee
                        </div>
                        <div className='tab-link' onClick={this.logout}>
                            Logout
                        </div>
                    </div>

                </div>
                <div className='main-panel'>
                    {
                        time >= 0 && time <= 12 ? <div className='greeting'>good morning,</div> : time > 12 && time <= 18 ? <div className='greeting'>good afternoon,</div> : <div className='greeting'>good evening,</div>
                    }
                    {
                        this.state.choice === "dashboard" ? <Dashboard /> : this.state.choice === "employee" ? <EmployeeRegistration/> : this.state.choice === "guest" ? <GuestRegistration/>: <Dashboard/>
                    }
                    
                </div>
            </div>
        )
    }
}



export default Home
