import React from 'react';
import { Navigation } from 'react-router';
import util from './../../util/util.js';
import { connect } from 'react-redux';
import { savePhoto, initPhoto } from '../../actions/photo';
import { Button} from 'react-bootstrap';

//Render input form to allow searching for recent photos from a location
//Author: Eric Le

var LocationSearch = React.createClass({
  getInitialState: function() {
    return {value: 'Please enter location'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },

  render: function() {
    var value = this.state.value;
    return (
      <div id = 'locationsearch'>
        <div>Search location</div>
        <input type="text"  placeholder={value} onChange={this.handleChange} />
        <Button onClick={this.props.searchLocation.bind(this, value)}>
          Search
        </Button>
      </div>
    )
  }
});

var mapStateToProps = function(state) {
  return {
    photo : state.photo,
    user: state.user
  }
};
export default connect(mapStateToProps)(LocationSearch);
