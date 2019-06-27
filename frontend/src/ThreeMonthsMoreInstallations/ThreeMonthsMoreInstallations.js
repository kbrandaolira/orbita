import React from 'react';
import Card from '../Card/Card';
import {properties} from '../properties';

class ThreeMonthsMoreInstallations extends React.Component {
    constructor(){
        super();
        this.state = {
            description: ""
        }
    }

    componentDidMount() {
        fetch(properties.api_url_installations_by_month)
        .then(res => res.json())
        .then(
            (result) => {
                result.months.sort((a,b) => (a.count > b.count) ? 1 : ((b.count > a.count) ? -1 : 0));
                result.months = result.months.slice(Math.max(result.months.length-3,1));

                let text = "";
                let i = 0;
                for( i; i<result.months.length; i++ ){
                    text += result.months[i].month + " with " + result.months[i].count;

                    if( i == result.months.length-2 ){
                        text += " and ";
                    }else if( i != result.months.length-1 ){
                        text += ", ";
                    }
                }

                this.setState({
                    description: text
                });
            }
        )
    }

    render() {
        const { description } = this.state;
        return (
            <div>
                <Card title="Three Months with More Installations" description={description}/>
            </div>
        )
    }

  }

  export default ThreeMonthsMoreInstallations;