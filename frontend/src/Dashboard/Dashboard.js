import React from 'react';
import '../Dashboard/Dashboard.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import InstallationsMade from '../InstallationsMade/InstallationsMade';
import HigherCostInstallation from '../HigherCostInstallation/HigherCostInstallation';
import ThreeMonthsHigherInstallations from '../ThreeMonthsHigherInstallations/ThreeMonthsHigherInstallations';

class Dashboard extends React.Component {
    render() {
      return (
        <div>
            <Header/>
            <div className="row widgets">
                <div className="col-md-4">
                    <InstallationsMade/>
                </div>
                <div className="col-md-4">
                    <HigherCostInstallation/>
                </div>
                <div className="col-md-4">
                    <ThreeMonthsHigherInstallations/>
                </div>
            </div>
            <Footer/>
        </div>
      )
    }

}

export default Dashboard;