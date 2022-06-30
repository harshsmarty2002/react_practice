
import React from "react";
class Login extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={emps:new Array()};
    }
    render()
    {
        return(
            <div className="container">       
            <h1>MOHIT KASHYAP</h1>             
                <table className="table" border="1">
                    {this.state.emps.map(e=>
                        <tr>
                            <td>{e.eid}</td>
                            <td>{e.designation}</td>
                            <td>{e.salary}</td>
                            <td>{e.mobile}</td>
                            <td>{e.doa}</td>
                            <td>{e.photo}</td>
                        </tr>
                    )}
                </table>
            </div>
        );
    }
    f1=()=>
    {
        fetch("https://api.webroot.net.in/employees.php").then(reply=>reply.json()).then(result=>

        {    
            this.setState({emps:result});
        }
        );
    }
    componentDidMount()
    {
        this.f1();
    }
}
export default Login;