import '../App.css'
function Login(props){
    return(
        <div className='action'>
                <div className='action-title'><span>Login Details</span></div>
            <form className='form'>
                <div>
                    <label>Username</label>
                    <input type="text" id="login_name"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" id="login_pwd" />
                </div>
                <div onClick={props.validation} className="btn-submit">
                    <p>Login</p>
                </div>
            </form>
        </div>
    )
}
export default Login