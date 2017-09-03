import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Ride extends Component {
  render() {
    return (
      <div className="Ride">
        <div className="RideImg" />Your wildebeest, {this.props.beestName}, is
        arriving! Look for a brown animal with a long, furry mane. Food is
        complimentary on this ride.
      </div>
    );
  }
}

Ride.propTypes = {
  beestName: PropTypes.string
};

export default Ride;