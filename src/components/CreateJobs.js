import { useState } from 'react';

const CreateJobs = ({ addVacancy }) => {
  // Initial state for inputs of form:
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // vacancy object is created with user input for title, company, city, and description using addVacancy:
    addVacancy({ title, company, city, description });
  };

  return (
    <div className="box">
      <h1 className="title is-5">Create a Vacancy</h1>
      <form onSubmit={handleSubmit}>
        {/* On form submission, handleSubmit function is triggered that creates 'blog' object */}

        <input
          className="input"
          type="text"
          placeholder="Job Title"
          value={title} // takes the user input for 'Job Title'
          onChange={(e) => setTitle(e.target.value)} // sets the value of 'title' state to the value of user input for 'Job Title'. Note that it is a 2-way binding.
          required
        />
        {/* For each input and textarea, margin bottom of 20px is added in index.css where global styles are written*/}

        <input
          className="input"
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          required
        />

        <input
          className="input"
          type="text"
          placeholder="City Name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <textarea
          className="input"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <button className="button is-primary">Create</button>
      </form>
    </div>
  );
};

export default CreateJobs;
