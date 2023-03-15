import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import "../App.css"
import Body from '../components/Body';
import logo from "../assets/logo-no-background.png"

const Layout = () => {
    useEffect(() => {
        setTimeout(() => {
            document.getElementById("body").style.opacity = 1
            document.getElementById("overlay").style.display = "none"
        }, 8500)
    })
    return (
        <div>
            <div className="App">
                <div className="overlay" id="overlay">
                    <img src={logo} alt="logo" id="image"/>
                </div>
                <div className="body" id="body">
                    <Body />
                </div>
            </div>
            <Outlet />
        </div>

    )
}
export default Layout