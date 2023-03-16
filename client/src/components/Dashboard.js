function Dashboard(props) {
    return (
        <div>
            <div className="bg" id="bg">
                <div className='heading' id="heading" >
                    <span>Dashboard</span>
                </div>
            </div>
            <div className="dash-content">
                <div className="lead-cards">
                    <div className="lead-card">
                        <div className="count">17</div>
                        <div className="object-count">Number of guests</div>
                    </div>
                    <div className="lead-card">
                        <div className="count">45</div>
                        <div className="object-count">Number of employees</div>
                    </div>
                    <div className="lead-card">
                        <div className="count">10</div>
                        <div className="object-count">Number of assignations</div>
                    </div>
                </div>

                <div className="main-card">
                    <div className="main-card-title">
                        Employees
                    </div>
                    <div className="table">
                        <table>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Guest assigned</th>
                                <th>Date assigned</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Maria Anders</td>
                                <td>Germany</td>
                                <td>Germany</td>
                                <td>20/3/2023</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Francisco Chang</td>
                                <td>Mexico</td>
                                <td>Mexico</td>
                                <td>20/3/2023</td>

                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Roland Mendel</td>
                                <td>Austria</td>
                                <td>Austria</td>
                                <td>20/3/2023</td>

                            </tr>

                        </table>
                    </div>
                </div>

                <div className="main-card">
                    <div className="main-card-title">
                        Guests
                    </div>
                    <table>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Room</th>
                                <th>Employee assigned</th>
                                <th>Date assigned</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Germany</td>
                                <td>ht1</td>
                                <td>Maria Anders</td>
                                <td>20/3/2023</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Mexico</td>
                                <td>ht2</td>
                                <td>Francisco Chang</td>
                                <td>20/3/2023</td>

                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Austria</td>
                                <td>ht3</td>
                                <td>Roland Mendel</td>
                                <td>20/3/2023</td>

                            </tr>

                        </table>
                </div>
            </div>
        </div>
    )
}


export default Dashboard