import React from "react";
import Card from "../Card/Card";
import { properties } from "../../properties";
import "../../auth";
import { getToken, getUserId } from "../../auth";

class HigherCostInstallation extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      installation: []
    };
  }

  componentDidMount() {
    fetch(
      properties.api_url_installations_higher_cost +
        "/" +
        getUserId(getToken()),
      {
        headers: {
          Authorization: getToken()
        }
      }
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            installation: result.installation
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, installation } = this.state;
    let title = "Higher Cost Installation";

    if (error) {
      return <Card title={title} description={error.message} />;
    } else if (!isLoaded) {
      return (
        <Card title={title} description={[<img src="/img/loading.gif" />]} />
      );
    } else {
      return (
        <div>
          <Card
            title={title}
            description={
              installation != null
                ? "Zip Code " +
                  installation.zipCode +
                  ": $ " +
                  installation.cost
                : "$ 0.00"
            }
          />
        </div>
      );
    }
  }
}

export default HigherCostInstallation;
