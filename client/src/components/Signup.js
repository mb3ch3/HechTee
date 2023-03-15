function Signup(props) {
    const success = props.success
    return (
        <div>
            <div>signup here</div>
            <form>
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
                <div>
                    <ul>
                        <li onClick={success}>
                            signup
                        </li>
                    </ul>
                </div>
                
                </div>
            </form>
        </div>

    )
}
export default Signup