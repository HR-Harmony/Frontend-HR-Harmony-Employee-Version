import React, { useState } from 'react';
import './Competencies.css';

const Competencies = () => {
  const [activeCategory, setActiveCategory] = useState('Technical');

  return (
    <div className="competencies-container">
      <div className="tabs">
        <button 
          className={`tab ${activeCategory === 'Technical' ? 'active' : ''}`}
          onClick={() => setActiveCategory('Technical')}
        >
          Technical
        </button>
        <button 
          className={`tab ${activeCategory === 'Organizational' ? 'active' : ''}`}
          onClick={() => setActiveCategory('Organizational')}
        >
          Organizational
        </button>
      </div>

      <div className="competency-cards-container">
        <div className="competencies-card add-category-card">
          <h2>Add New {activeCategory} Category</h2>
          <form>
            <label>
              Category *
              <input type="text" name="category" placeholder="Category" />
            </label>
            <button type="submit">Save</button>
          </form>
        </div>

        <div className="competencies-card list-categories-card">
          <h2>List All Categories</h2>
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
                <th>CATEGORY</th>
                <th>CREATED AT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dummy Category 1</td>
                <td>01-01-2024</td>
              </tr>
              <tr>
                <td>Dummy Category 2</td>
                <td>02-01-2024</td>
              </tr>
              {/* Add more dummy data rows as needed */}
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
    </div>
  );
};

export default Competencies;
