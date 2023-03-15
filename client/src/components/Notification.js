function Notification(props) {
    if (props.login !== undefined) {
        return (
            <div className='notification message' style={{ background: "yellow" }} >

                <div>{props.message} <span style={{ color: "red" }} onClick={props.login}>Login</span></div>
            </div>
        )
    } else {
        return (
            <div className='notification message' style={{ background: "yellow" }} >

                <div>{props.message} </div>
            </div>
        )
    }
}

export default Notification