import React, { Component } from "react";
import CardItem from "./components/CardItem";
import Form from "./components/Form";
import Header from "./components/Header";
import { getInitialData, showFormattedDate } from "./utils/index";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onDeleteEvent = this.onDeleteEvent.bind(this);
    this.onChangeEvent = this.onChangeEvent.bind(this);
    this.onAddedEvent = this.onAddedEvent.bind(this);
  }

  onChangeEvent(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );

    this.setState({ notes });
  }

  onDeleteEvent(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);

    this.setState({ notes });
  }

  onAddedEvent({ title, body }) {
    this.setState((state) => {
      return {
        notes: [
          ...state.notes,
          {
            id: +new Date(),
            createdAt: +new Date(),
            title,
            body,
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    const cardActive = this.state.notes.filter(
      (note) => note.archived === false
    );
    const cardArchive = this.state.notes.filter(
      (note) => note.archived === true
    );

    return (
      <>
        <Header />
        <main>
          <div className="container">
            <h2>Create Notes</h2>
            <Form onAddedEvent={this.onAddedEvent} notes={this.state.notes} />
          </div>
          <div className="container">
            <h2 className="mb-3">Active</h2>
            <div className="row mb-5">
              {cardActive.length > 0 ? (
                cardActive.map((data) => (
                  <CardItem
                    noteId={data.id}
                    noteTitle={data.title}
                    noteCreateAt={showFormattedDate(data.createdAt)}
                    noteDescription={data.body}
                    noteIsArchive={data.archived}
                    onChangeEvent={this.onChangeEvent}
                    onDeleteEvent={this.onDeleteEvent}
                  />
                ))
              ) : (
                <h3 className="text-center">Empty Notes</h3>
              )}
            </div>
          </div>
          <div className="container">
            <h2 className="mb-3">Archive</h2>
            <div className="row mb-5">
              {cardArchive.length > 0 ? (
                cardArchive.map((data) => (
                  <CardItem
                    noteId={data.id}
                    noteTitle={data.title}
                    noteCreateAt={showFormattedDate(data.createdAt)}
                    noteDescription={data.body}
                    noteIsArchive={data.archived}
                    onChangeEvent={this.onChangeEvent}
                    onDeleteEvent={this.onDeleteEvent}
                  />
                ))
              ) : (
                <h3 className="text-center">Empty Notes</h3>
              )}
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default App;
