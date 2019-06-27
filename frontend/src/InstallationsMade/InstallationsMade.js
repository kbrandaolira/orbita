import React from 'react';
import Card from '../Card/Card';
import {properties} from '../properties';

class InstallationsMade extends React.Component {
    constructor(){
        super();
        this.state = {
            error: null,
            isLoaded: false,
            installations: []
        }
    }

    componentDidMount() {

        fetch(properties.api_url_installations)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    installations: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error: error
                });
            }
        )
    }

    render() {
        const { error, isLoaded, installations } = this.state;
        let title = "Installation(s) Made";
        if(error){
            return <Card title={title} description={error.message}/>
        } else if(!isLoaded){
            return <Card title={title} description={[<img src="/img/loading.gif"/>]}/>
        } else {
            return (
                <div>
                    <Card title={title} description={installations.count}/>
                </div>
            )
        }
    }

  }

  export default InstallationsMade;