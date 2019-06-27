import React from "react";
import "./Dashboard.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import InstallationsMade from "../InstallationsMade/InstallationsMade";
import HigherCostInstallation from "../HigherCostInstallation/HigherCostInstallation";
import ThreeMonthsMoreInstallations from "../ThreeMonthsMoreInstallations/ThreeMonthsMoreInstallations";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row widgets">
          <div className="col-md-4">
            <InstallationsMade />
          </div>
          <div className="col-md-4">
            <HigherCostInstallation />
          </div>
          <div className="col-md-4">
            <ThreeMonthsMoreInstallations />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
