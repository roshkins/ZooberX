import React, { Component } from "react";
import { PropTypes } from "prop-types";

class Form extends Component {
  render() {
    const latitude = this.props.pickupLocation
      ? this.props.pickupLocation.lat
      : "";
    const longitude = this.props.pickupLocation
      ? this.props.pickupLocation.lng
      : "";

    return (
      <form className="Form">
        <p>
          Right-click on the map to the right to auto-fill that location or type
          in the boxes below. Click "Request" and enjoy your ride.
        </p>
        <input
          type="number"
          name="latitude"
          placeholder="Your latitude"
          value={latitude}
          onChange={event => this.props.setLatitude(Number(event.target.value))}
        />
        <input
          type="number"
          name="longitude"
          placeholder="Your longitude"
          value={longitude}
          onChange={event =>
            this.props.setLongitude(Number(event.target.value))}
        />
        <select
          name="direction"
          value={this.props.direction}
          onChange={event => this.props.setDirection(event.target.value)}
        >
          <option disabled value="direction">
            Where to?
          </option>
          <option value="Kenya">Kenya</option>
          <option value="Tanzania">Tanzania</option>
        </select>
        <input type="submit" value="Request" className="Submit" />
      </form>
    );
  }
}

Form.propTypes = {
  pickupLocation: PropTypes.object,
  direction: PropTypes.string,
  setLatitude: PropTypes.func.isRequired,
  setLongitude: PropTypes.func.isRequired,
  setDirection: PropTypes.func.isRequired
};

export default Form;
