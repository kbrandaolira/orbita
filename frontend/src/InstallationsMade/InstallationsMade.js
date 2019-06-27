import React from 'react';
import Card from '../Card/Card';
import {properties} from '../properties';

class InstallationsMade extends React.Component {
    constructor(){
        super();
        this.state = {
            installations: []
        }
    }

    componentDidMount() {

        fetch(properties.api_url_installations)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    installations: result
                });
            }
        )
    }

    render() {
        const { installations } = this.state;
        return (
            <div>
                <Card title="Installation(s) Made" description={installations.count}/>
            </div>
        )
    }

  }

  export default InstallationsMade;