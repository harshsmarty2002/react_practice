import React from "react";

class Result extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={emp:""};
    }
    render()
    {
        return(
            <div className="container">                
                {this.state.emp.eid} <br/>
                {this.state.emp.name} <br/>
                {this.state.emp.designation} <br/>
                {this.state.emp.salary} <br/>
                {this.state.emp.doa} <br/>
                {this.state.emp.mobile} <br/>
                {this.state.emp.photo} <br/>
            </div>
        );
    }
    f1=()=>
    {
        fetch("https://jsonplaceholder.typicode.com/users").then(reply=>reply.json()).then(result=>
        {    
            this.setState({emp:result});
        }
        );
    }
    componentDidMount()
    {
        this.f1();
    }
}
export default Result;