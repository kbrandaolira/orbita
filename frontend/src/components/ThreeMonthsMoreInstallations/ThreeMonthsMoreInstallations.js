import React from "react";
import Card from "../Card/Card";
import { properties } from "../../properties";
import { getToken, getUserId } from "../../auth";

class ThreeMonthsMoreInstallations extends React.Component {
  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      description: ""
    };
  }

  componentDidMount() {
    fetch(
      properties.api_url_installations_by_month + "/" + getUserId(getToken()),
      {
        headers: {
          Authorization: getToken()
        }
      }
    )
      .then(res => res.json())
      .then(
        result => {
          if (result.length > 0) {
            result.months.sort((a, b) =>
              a.count > b.count ? 1 : b.count > a.count ? -1 : 0
            );
            result.months = result.months.slice(
              Math.max(result.months.length - 3, 1)
            );

            let text = "";
            let i = 0;
            for (i; i < result.months.length; i++) {
              text +=
                result.months[i].month + " with " + result.months[i].count;

              if (i == result.months.length - 2) {
                text += " and ";
              } else if (i != result.months.length - 1) {
                text += ", ";
              }
            }

            this.setState({
              isLoaded: true,
              description: text
            });
          } else {
            this.setState({
              isLoaded: true,
              description: properties.msg_not_found
            });
          }
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
    const { error, isLoaded, description } = this.state;
    let title = "Three Months with More Installations";

    if (error) {
      return <Card title={title} description={error.message} />;
    } else if (!isLoaded) {
      return (
        <Card title={title} description={[<img src="/img/loading.gif" />]} />
      );
    } else {
      return (
        <div>
          <Card title={title} description={description} />
        </div>
      );
    }
  }
}

export default ThreeMonthsMoreInstallations;
