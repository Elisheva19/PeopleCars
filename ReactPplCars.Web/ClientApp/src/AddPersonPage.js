import React from 'react';
import axios from 'axios';


class AddPerson extends React.Component{
state={
    person:{
        firstName: '',
        lastName: '',
        age: ''
    }
}

onTextChange = e => {
    const copy={...this.state.person};
    copy[e.target.name]= e.target.value;
    this.setState({person:copy});
}


onSubmitClick= async()=>{
    await axios.post('/api/peoplecar/addperson', this.state.person)
    this.props.history.push('/');
}

render(){

    return(


        <div className="row">
        <div className="col-md-6 offset-md-3 card card-body bg-light">
            <h1>Add a New Person:</h1>
            <br />
            <input type="text" value={this.state.firstName} name='firstName' onChange={this.onTextChange} className="form-control" placeholder="First Name" />
            <br />
            <input type="text" value={this.state.lastName} name='lastName' onChange={this.onTextChange} className="form-control" placeholder="Last Name" />
            <br />
            <input type="text" value={this.state.age} name='age' onChange={this.onTextChange} className="form-control" placeholder="Age" />
            <br />
            <button onClick={this.onSubmitClick} className="btn btn-primary btn-block">Submit</button>
        </div>
    </div>
    )
}

}
export default AddPerson;