const CreateJobs = () => {
  return (
    <div className="box">
      <h1 className="title is-5">Create a Vacancy</h1>
      <form>
        <input className="input" type="text" placeholder="Job Title" required />
        {/* For each input and textarea, margin bottom of 20px is added in index.css where global styles are written*/}

        <input
          className="input"
          type="text"
          placeholder="Company Name"
          required
        />

        <input className="input" type="text" placeholder="City Name" required />

        <textarea
          className="input"
          type="text"
          placeholder="Description"
          required
        ></textarea>

        <button className="button is-primary">Create</button>
      </form>
    </div>
  );
};

export default CreateJobs;
