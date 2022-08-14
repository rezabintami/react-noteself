import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleEvent = this.onTitleEvent.bind(this);
    this.onDescEvent = this.onDescEvent.bind(this);
    this.onSubmitEvent = this.onSubmitEvent.bind(this);
  }

  onTitleEvent(event) {
    const limit = 50;
    this.setState(() => {
      return { title: event.target.value.slice(0, limit) };
    });
  }

  onDescEvent(event) {
    this.setState(() => {
      return { body: event.target.value };
    });
  }

  onSubmitEvent(event) {
    event.preventDefault();
    this.props.onAddedEvent(this.state);
  }

  render() {
    return (
      <div className=" mb-3 shadow-sm p-3 mb-5 mt-3 bg-body rounded">
        <div className="card-body">
          <form onSubmit={this.onSubmitEvent}>
            <small>Remaining Character: {50 - this.state.title.length} </small>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Input your Title"
                aria-label="Title"
                aria-describedby="basic-addon1"
                onChange={this.onTitleEvent}
                value={this.state.title}
                required
              />
            </div>
            <div className="input-group">
              <textarea
                className="form-control"
                placeholder="Input your Description"
                aria-label="With textarea"
                style={{ minHeight: 150 }}
                onChange={this.onDescEvent}
                value={this.state.body}
                required
              ></textarea>
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-info mt-5 text-white" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
