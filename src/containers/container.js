import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class ## extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  


  }
  render() {
    return (
   
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);

}

// null is used because, the function that returns an action creator is always second argument
export default connect(null, mapDispatchToProps)(SearchBar);