import React from 'react';
import axios from 'axios';



class AddCar extends React.Component {

    state = {
        car: {
            make: '',
            model: '',
            year: '',
            personId: ''
        },
        person: {
            firstName: '',
            lastName: ''


        }
    }

    componentDidMount = async () => {

        console.log(this.props.match.params);
        const { id } = this.props.match.params;
        console.log(id)

        const { data } = await axios.get(`/api/peoplecar/getbyid?id=${id}`);


        this.setState({ person: data });

    }

    onTextChange = e => {
        const copy = { ...this.state.car };
        copy[e.target.name] = e.target.value;
        this.setState({ car: copy });
    }


    onSubmitClick = async () => {
        const { id } = this.props.match.params;
        const { make, model, year } = this.state.car;

        await axios.post('/api/peoplecar/addcar', { make, model, year, personId: id })
        this.props.history.push('/');
    }



    render() {

        return (


            <div className="row">
                <div className="col-md-6 offset-md-3 card card-body bg-light">
                    <h1>Add a Car For</h1>
                    <input type="text" name='make' onChange={this.onTextChange} className="form-control" placeholder="Make" />
                    <br />
                    <input type="text" name='model' onChange={this.onTextChange} className="form-control" placeholder="Model" />
                    <br />
                    <input type="text" name='year' onChange={this.onTextChange} className="form-control" placeholder="Year" />
                    <br />
                    <button onClick={this.onSubmitClick} className="btn btn-primary btn-block">Submit</button>
                </div>
            </div>
        )
    }
}


















export default AddCar;