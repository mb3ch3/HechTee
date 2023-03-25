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
                    <div>{props.id}</div>
                    <div>{props.phone}</div>
                    <div>{props.jobdes}</div>
                </div>
                <div className='modal-image'>
                    <img src={logo} alt="logo here"/>
                </div>
            </div>
        </div>
    )
}
export default Modal