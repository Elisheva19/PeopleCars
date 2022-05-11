import React from 'react';
import { Route } from 'react-router-dom';
import PeopleCarTable from './PeopleCarTable';
import AddPersonPage from './AddPersonPage';
import AddCar from './AddCar';
import Layout from './Layout';
import DeleteCars from './DeleteCars';


const App = () => {
    return (
        <Layout>
            <Route exact path='/' component={PeopleCarTable} />
            <Route exact path='/AddPerson' component={AddPersonPage} />
            <Route exact path='/addcar/:id' component={AddCar} />
            <Route exact path= '/deletecars/:id' component={DeleteCars}/>
          
        </Layout>
    )
}

export default App;