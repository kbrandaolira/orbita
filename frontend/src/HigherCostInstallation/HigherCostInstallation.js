import React from 'react';
import Card from '../Card/Card';
import {properties} from '../properties';

class HigherCostInstallation extends React.Component {
    
  constructor(){
    super();
    this.state = {
        installation: []
    }
  }

  componentDidMount() {
      fetch(properties.api_url_installations_higher_cost)
      .then(res => res.json())
      .then(
          (result) => {
              this.setState({
                  installation: result.installation
              });
          }
      )
  }

  render() {
    const { installation } = this.state;

    return (
      <div>
          <Card title="Higher Cost Installation" description={"$" + installation.cost}/>
      </div>
    )
  }

}

export default HigherCostInstallation;