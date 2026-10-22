import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
function CollegeForm() {
  const [collegeName, setCollegeName] = useState('');
  const [collegeCountry, setCollegeCountry] = useState('');
  const [collegeEstablished, setCollegeEstablished] = useState('');

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: collegeName,
      country: collegeCountry,
      established: collegeEstablished
    };

    const url = `${import.meta.env.VITE_API_URL}/colleges`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      console.error('Failed to submit form');
      return;
    }
    const data = await response.json();
    console.log(data);
    navigate('/colleges'); // Redirect to colleges list after successful submission
  };

  return (
    <>
      <h1>Add a College</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={collegeCountry}
            onChange={(e) => setCollegeCountry(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="established">Established:</label>
          <input
            type="text"
            id="established"
            name="established"
            value={collegeEstablished}
            onChange={(e) => setCollegeEstablished(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );

}
export default CollegeForm;