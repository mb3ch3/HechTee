import React from 'react'
import '../App.css'
import logo from '../assets/logo-no-background.png'
import Dashboard from '../components/Dashboard'





class Home extends React.Component {
    checkHeight() {

            const scroll = window.scrollY;
            console.log( "Scrolled: " + scroll + "px")
    }
    componentDidUpdate() {
        this.checkHeight()
    }
    constructor(props) {
        super(props)

    }
    render() {
        const time = new Date().getHours()

        return (
            <div className='content'>
                <div className='side-panel'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='main-panel'>
                    {
                        time >= 0 && time <= 12 ? <div className='greeting'>good morning,</div> : time > 12 && time <= 18 ? <div className='greeting'>good afternoon,</div> : <div className='greeting'>good evening,</div>
                    }
                    <Dashboard />
                </div>
            </div>
        )
    }
}



export default Home