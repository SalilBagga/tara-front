import React, { useState } from 'react';

export default function Form({ story, setStory }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [user, setUser] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title !== '') {
      setStory({ title: title, description: description, user: user });
      setTitle('');
      setDescription('');
      setUser('');
    }
  };

  return (
    <div className="w-50 p-3 mx-auto">
      <form onSubmit={(event) => handleSubmit(event)}>
        <div className="mb-3 d-flex  justify-content-around">
          <div>
            <label className="form-label">TITLE</label>
            <input
              type="text"
              className="form-control"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div>
            <label className="form-label">USER</label>
            <input
              type="text"
              className="form-control"
              id="user"
              onChange={(e) => setUser(e.target.value)}
              value={user}
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">DESCRIPTION</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
