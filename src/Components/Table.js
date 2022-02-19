import React from 'react';

export default function Table({ storylist }) {
  return (
    <div className="w-50 p-3 mx-auto">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">User</th>
          </tr>
        </thead>
        <tbody>
          {storylist &&
            storylist.map((story, index) => (
              <tr key={index}>
                <td>{story.title}</td>
                <td>
                  {story.description.length > 50
                    ? story.description.substring(0, 50).concat('.....')
                    : story.description}
                </td>
                <td>{story.user}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
