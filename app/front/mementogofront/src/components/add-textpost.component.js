import React, { Component } from "react";
import TextpostDataService from "../services/textpost.service";

export default class AddTextpost extends Component {
    
  constructor(props) {
    super(props);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeLattitude = this.onChangeLattitude.bind(this);
    this.onChangeLongitude = this.onChangeLongitude.bind(this);
    this.onChangeDeath = this.onChangeDeath.bind(this);
    this.onChangeScore = this.onChangeScore.bind(this);
    this.saveTextpost = this.saveTextpost.bind(this);
    this.newTextpost = this.newTextpost.bind(this);

    this.state = {
      id: null,
      description: "",
      lattitude: props.lng,
      longitude: props.lat, 
      death: "",
      score: 0,
      submitted: false
    };
  }

  getLocation(){
    if("geolocation" in navigator){
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                lattitude: position.coords.latitude,
                longitude: position.coords.longitude

            })
        })
    } else {
        console.log("no geo avaialble")
    }
  }

  onChangeDescription(e) {
      this.setState({
          description: e.target.value
      });
  }

  onChangeLattitude(e) {
      this.setState({
        lattitude: e.target.value
      });
    }

    onChangeLongitude(e) {
        this.setState({
          longitude: e.target.value
        });
      }

    onChangeDeath(e) {
        this.setState({
            death: e.target.value
        });  
    }

    onChangeScore(e) {
        this.setState({
            score: e.target.value
        });
    }

  saveTextpost() {
    var data = {
      description: this.state.description,
      lattitude: this.state.lattitude,
      longitude: this.state.longitude,
      death: this.state.death,
      score: this.state.score
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTextpost() {
    this.setState({
      id: null,
      description: "",
      lattitude: 0,
      longtitude: 0,
      score: 0,
      death: "",

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTextpost}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>

            <div className="form-group">
              <label htmlFor="death">Timer</label>
              <input
                type="text"
                className="form-control"
                id="death"
                required
                value={this.state.death}
                onChange={this.onChangeDeath}
                name="death"
              />
            </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
