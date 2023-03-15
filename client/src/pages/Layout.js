import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import "../App.css"
import Body from '../components/Body';

const Layout = () => {
    useEffect(() => {
        setTimeout(() => {
            document.getElementById("body").style.opacity = 1
            document.getElementById("overlay").style.display = "none"
        }, 3000)
    })
    return (
        <div>
            <div className="App">
                <div className="overlay" id="overlay">
                    hotel tracking management system
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