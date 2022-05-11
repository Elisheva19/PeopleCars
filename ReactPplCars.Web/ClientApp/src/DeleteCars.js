import React from 'react';
import axios from 'axios';


class DeleteCars extends React.Component{

state={
    cars:[]
}

componentDidMount = async()=>{

    const { id } = this.props.match.params;
   const { data } = await axios.get(`/api/peoplecar/carsforperson?id=${id}`);
    this.setState({ cars: data });
   
}

onNoClick=()=>{
this.props.history.push('/');
}
onYesClick=async ()=>{
    const { id } = this.props.match.params;
    await axios.post('/api/peoplecar/deletecars', {id});
    this.props.history.push('/');
}




render(){

    return(

        <div>
        <table className="table table-hover table-striped table-bordered">
        <thead>
            <tr>
                <th>Make:</th>
                <th>Model:</th>
                <th>Year:</th>
                </tr>
                </thead>
                <tbody>
                

              {this.state.cars.map(c=>{
                  return <tr key={c.id}>
                
                      <td>{c.make}</td>
                      <td>{c.model}</td>
                      <td>{c.year}</td>
                  </tr>
                  
              })}

                    
                </tbody>
                </table>
                <br/>

                <h1> Do you want to Delete all these cars? </h1>
                <br />
                <div className='row '>
                <button  onClick={this.onNoClick} className="btn btn-primary col-md-5">NO</button>
                <button style={{ marginLeft: 10 }} onClick={this.onYesClick} className="btn btn-danger col-md-5">YES</button>
                </div>

                </div>
    )
}

}








export default DeleteCars;