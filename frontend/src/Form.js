import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Ride from "./Ride";

/** Renders the form to request a wildebeest.
* @class Form
*/
class Form extends Component {
  /**
  * Renders the form with passed in props.
  * @prop {object} [pickupLocation] lat and lng fields specifiing the location of the Oxpecker.
  * @prop {string} [direction] the direction the Oxpecker wants to travel.
  * @prop {func} setLatitude  store the latitude in the model.
  * @prop {func} setLongitude store the longitude in the model.
  * @prop {func} setDirection  store the direction in the model.
  * @prop {func} getNearestBeest updates the model with the nearest beest.
  * @prop {string} [nearestBeestName] the nearest beest name from the model.
  * @return A form element to add to the DOM.
  */
  render() {
    const latitude = this.props.pickupLocation
      ? this.props.pickupLocation.lat
      : "";
    const longitude = this.props.pickupLocation
      ? this.props.pickupLocation.lng
      : "";

    return (
      <form
        className="Form"
        onSubmit={e => {
          e.preventDefault();
          if (this.props.pickupLocation && this.props.direction !== "direction")
            this.props.getNearestBeest();
        }}
      >
        <p>
          Right-click on the map to auto-fill that location or type in the boxes
          below. Click "Request" and enjoy your ride. You can move the mouse
          over each wildebeest to see its name.
        </p>
        <input
          id="latitude"
          type="number"
          step="0.01"
          name="latitude"
          placeholder="Your latitude"
          value={latitude}
          onChange={event => this.props.setLatitude(Number(event.target.value))}
        />
        <input
          id="longitude"
          type="number"
          step="0.01"
          name="longitude"
          placeholder="Your longitude"
          value={longitude}
          onChange={event =>
            this.props.setLongitude(Number(event.target.value))}
        />
        <select
          id="direction"
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
        {this.props.nearestBeestName
          ? <Ride beestName={this.props.nearestBeestName} />
          : ""}
      </form>
    );
  }
}

Form.propTypes = {
  pickupLocation: PropTypes.object,
  direction: PropTypes.string,
  setLatitude: PropTypes.func.isRequired,
  setLongitude: PropTypes.func.isRequired,
  setDirection: PropTypes.func.isRequired,
  getNearestBeest: PropTypes.func.isRequired,
  nearestBeestName: PropTypes.string
};

export default Form;
