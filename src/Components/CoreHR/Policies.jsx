import React from 'react';
import './Policies.css';

const Policies = () => {
  return (
    <div className="policies-container">
      <div className="policies-card add-policies-card">
        <h2>Add New Policy</h2>
        <form>
          <label>
            Title *
            <input type="text" name="title" placeholder="Title" />
          </label>
          <label>
            Description *
            <textarea name="description" placeholder="Description"></textarea>
          </label>
          <label>
            Attachment *
            <input type="file" name="attachment" />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
      <div className="policies-card list-policies-card">
        <h2>List All Policies</h2>
        <div className="list-controls">
          <div className="entries-showing">
            Show
            <select>
              <option value="10">10</option>
              {/* Add more options if needed */}
            </select>
            entries
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>TITLE</th>
              <th>CREATED AT</th>
              <th>ADDED BY</th>
            </tr>
          </thead>
          <tbody>
            {/* Dummy data rows */}
            <tr>
              <td>SOP - Quality Assurance</td>
              <td>08-05-2023</td>
              <td>Super Admin</td>
            </tr>
            <tr>
              <td>SOP - Product Development</td>
              <td>07-05-2023</td>
              <td>Super Admin</td>
            </tr>
          </tbody>
        </table>
        <div className="table-navigation">
          <span>Showing 1 to 2 of 2 records</span>
          <div className="navigation-buttons">
            <button>Previous</button>
            <button>1</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
