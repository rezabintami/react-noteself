import React from "react";

export default function CardItem({
  noteId,
  noteTitle,
  noteDescription,
  noteIsArchive,
  noteCreateAt,
  onChangeEvent,
  onDeleteEvent,
}) {
  const buttonName = noteIsArchive ? "Archive" : "Active";
  const className = noteIsArchive
    ? "card text-bg-primary mb-3"
    : "card text-bg-success mb-3";
  return (
    <div className="col-12 col-md-3">
      <div className={className}>
        <div className="card-header">{noteTitle}</div>
        <div className="card-body">
          <h5 className="card-title">{noteCreateAt}</h5>
          <p className="card-text">{noteDescription}</p>
          <div
            className="row"
            style={{ marginBottom: -16, marginLeft: -16, marginRight: -16 }}
          >
            <button
              onClick={() => onDeleteEvent(noteId)}
              className="btn-card-positive col-6"
            >
              Delete
            </button>
            <button
              onClick={() => onChangeEvent(noteId)}
              className="btn-card-negative col-6"
            >
              {buttonName}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
