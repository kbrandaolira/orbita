import React from 'react';
import '../Dashboard/Dashboard.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Card from '../Card/Card';

class Dashboard extends React.Component {
    render() {
      return (
        <div>
            <Header/>
            <div className="row widgets">
                <div className="col-md-4">
                    <Card title="Installations Made" description="Here we will present the installations made!"/>
                </div>
                <div className="col-md-4">
                    <Card title="Higher Cost Installation" description="Here we will present the installation with higher cost!"/>
                </div>
                <div className="col-md-4">
                    <Card title="Three Months Higher Installations" description="Here we will present the three months with higher installations!"/>
                </div>
            </div>
            <Footer/>
        </div>
      )
    }

}

export default Dashboard;