import React from 'react';
import axios from 'axios';
//import { render } from 'react-dom';
import PersonRow from './PersonRow';
import {Link} from  'react-router-dom';
//import {Route} from 'react-router-dom';

class PeopleCarTable extends React.Component{

state ={
    people:[],
    person:{
        firstName: '',
        lastName: '',
        age: '',
        cars:[]
    }
}

componentDidMount= async () => {
    await this.loadPeople();
}
 loadPeople= async () => {
    const {data}= await axios.get('/api/peoplecar/getall');
    this.setState({people: data});
 }

 

   
render() {

    return(

        <div>
            
            <Link to={`/AddPerson`}>
                    <button className="btn btn-success col-md-12">Add</button>
                </Link>
            <br />
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                    <th>First Name:</th>
                    <th>Last Name:</th>
                    <th>Age:</th>
                    <th>Car Count:</th>
                    <th>Edit:</th>
                    <th>Delete Cars:</th>
                    </tr>

                </thead>
                <tbody>
                    {this.state.people.map(p=>{
                  return  <PersonRow
                    person={p}
                    key = {p.id}
                    
                  />  })}

                </tbody>
                </table>
        </div>
    )
}
}

export default PeopleCarTable;