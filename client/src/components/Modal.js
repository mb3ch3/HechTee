import axios from 'axios'
import '../App.css'
import logo from '../assets/logo-white.png'
function Modal(props){
    return(
        <div className="modal-outer" onClick={props.close}>
            <div className="modal-inner">
                <div className='modal-details'>
                    <div className='modal-title'>
                        {props.name}
                    </div>
                    <div className='modal-number'>Employee Number: <span>{props.id}</span> </div>
                    <div className='modal-number'>Phone Number: <span>{props.phone}</span></div>
                    <div className='modal-number'>Job Description: <span>{props.jobdes}</span></div>
                    <button onClick={()=>{
                        try {
                            axios({
                                url: "http://127.0.0.1:3000/delemp",
                                method: "POST",
                                data: {
                                    empname: props.name
                                },
                            }).then((res)=>{
                                console.log("deletion successful")
                                props.update()
                            })
                            .catch(error=>{console.log("error")})
                        } catch (error) {
                            console.log("error")
                        }
                    }}>delete employee</button>
                </div>
                <div className='modal-image'>
                    <img src={logo} alt="logo here"/>
                </div>
            </div>
        </div>
    )
}
export default Modal