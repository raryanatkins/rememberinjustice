import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import JSONbuildtime from "../pages/json-at-buildtime"
import Controls from "../components/controls"

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      normalized: "",
      sortOrder: "date"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = event => {
    event.preventDefault();
    var input = event.target.value;
    var proc = input
        .toLowerCase()
        .replace(/[^a-z., ]/gi, "")
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    console.log(proc);
    this.setState({
      search: input,
      normalized: proc
    })
  }

  handleClick = event => {
    event.preventDefault();
    console.log(event.currentTarget.value);
    this.setState({
      sortOrder: event.currentTarget.value
    })
  }
  render() {
    return (
      <Layout>
        <SEO title="Remember" />
        <Controls
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          search={this.state.search}
        />
        <JSONbuildtime 
          normalized={this.state.normalized}
          sortOrder={this.state.sortOrder}
        />
      </Layout>
    )
  }
}
