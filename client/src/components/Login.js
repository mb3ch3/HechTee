function Login(props){
    return(
        <div>
            <div>login here</div>
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" id="login_name"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" id="login_pwd" />
                </div>
                <div>
                    <ul>
                        <li onClick={props.validation}>
                            Login
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    )
}
export default Login