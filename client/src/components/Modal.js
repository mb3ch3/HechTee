import '../App.css'
import logo from '../assets/logo-white.png'
function Modal(props){
    return(
        <div className="modal-outer" onClick={()=>{console.log("clicked outer")}}>
            <div className="modal-inner">
                <div className='modal-details'>
                    <div className='modal-title'>
                        modal title
                    </div>
                    <div>modal detail 1</div>
                    <div>modal detail 1</div>
                    <div>modal detail 1</div>
                </div>
                <div className='modal-image'>
                    <img src={logo} alt="logo here"/>
                </div>
            </div>
        </div>
    )
}
export default Modal