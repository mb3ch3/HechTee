import React from "react"
import axios from 'axios'
import Modal from './Modal'


class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            emps: [],
            gsts: [],
            showModal: false,
            assigns: 0,
            id: '',
            empname: '',
            phone: '',
            jobdes:'',
            manager:''

        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleId = this.handleId.bind(this);
    }
    handleId(idnumber,empname,phone,jobdes){
        this.setState({id:idnumber})
        this.setState({empname: empname})
        this.setState({empname: empname})
        this.setState({phone: phone})
        this.setState({jobdes: jobdes})
        console.log(empname);
        console.log(phone);
        console.log(jobdes);
    }
    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }
    componentDidMount() {
        try {
            axios({
                url: 'http://127.0.0.1:3000/employees',
                method: 'GET',
            })
                .then((res) => {
                    // console.log("employees found: " + JSON.stringify(res.data))
                    this.setState({ emps: res.data })
                })
                .catch(err => {
                    console.log(err)
                })
        } catch (error) {
            console.log(error)
        }
        try {
            axios({
                url: 'http://127.0.0.1:3000/guests',
                method: 'GET',
            })
                .then((res) => {
                    // console.log("guests found: " + JSON.stringify(res.data))
                    this.setState({ gsts: res.data })
                })
                .catch(err => {
                    console.log(err)
                })
        } catch (error) {
            console.log(error)
        }
        try {
            var w = 0
            for (let index = 0; index < this.state.gsts.length; index++) {
                if (this.state.gsts[index].employee_id !== null) {
                    w++
                }
                this.setState({ assigns: w })
                console.log('This is it ' + w)
            }
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.showModal ? <div className="modal">
                    <Modal name={this.state.empname} id={this.state.id} jobdes={this.state.jobdes} phone={this.state.phone} close={this.handleCloseModal} />
                </div> : <div></div>
                }
                
                <div className="bg" id="bg">
                    <div className='heading' id="heading" >
                        <span>Dashboard</span>
                    </div>
                </div>
                <div className="dash-content">
                    <div className="lead-cards">
                        <div className="lead-card">
                            <div className="count">{this.state.gsts.length}</div>
                            <div className="object-count">Number of guests</div>
                        </div>
                        <div className="lead-card">
                            <div className="count">{this.state.emps.length}</div>
                            <div className="object-count">Number of employees</div>
                        </div>
                        <div className="lead-card">
                            <div className="count">
                                {
                                    this.state.gsts.filter(function (element) {
                                        return element.employee_id !== null;
                                    }).length
                                }
                            </div>
                            <div className="object-count">Number of assignations</div>
                        </div>
                    </div>

                    <div className="main-card">
                        <div className="main-card-title">
                            Employees
                        </div>
                        <div className="table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Job title</th>
                                        <th>Manager</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.emps.map(item =>
                                        <tr key={item.id} onClick={()=>{
                                            this.handleOpenModal()
                                            this.handleId(item.id,item.empname,item.phone,item.jobdes)
                                        }}>
                                            <td>{item.id}</td>
                                            <td>{item.empname}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.jobdes}</td>
                                            <td>{item.admin_id}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="main-card">
                        <div className="main-card-title">
                            Guests
                        </div>
                        <div className="table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Room</th>
                                        <th>Employee assigned</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.gsts.map(item =>
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.gstname}</td>
                                            <td>{item.room}</td>
                                            <td>{item.employee_id}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default Dashboard