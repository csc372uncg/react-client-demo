import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './style.css';

function CollegeList() {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    const fetchColleges = async () => {
      const url = `${import.meta.env.VITE_API_URL}/colleges`;
      const response = await fetch(url);
      if (!response.ok) {
        console.error('Failed to fetch colleges');
        return;
      }
      const data = await response.json();
      setColleges(data);
    };

    fetchColleges();
  }, []);

  return (
    <div>
      <h2>College List</h2>
      {colleges.map((college) => (
        <article key={college._id} className="college-card">
          <h3>{college.name}</h3>
          <p>Country: {college.country}</p>
          <p>Established: {college.established}</p>
        </article>
      ))}

      {(!colleges || colleges.length === 0) &&
        <p>No colleges available.</p>}
      <Link to="/add">Add a college</Link>
    </div>
  );
}

export default CollegeList;