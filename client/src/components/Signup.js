import '../App.css'
function Signup(props) {
    return (
        <div className='action'>
            <div className='action-title'><span>Signup Details</span></div>
            <form className='form'>
                <div>
                    <label>Username</label>
                    <input type="text" id="name"/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" id="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" id="pwd" />
                </div>
                <div>
                <div onClick={props.success} className="btn-submit">
              <p>Signup</p>
                </div>
                
                </div>
            </form>
        </div>

    )
}
export default Signup