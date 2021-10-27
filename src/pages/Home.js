import Vacancy from '../components/Vacancy';
import { vacancies as jobs } from './data';
import { useState } from 'react';
import { useEffect } from 'react';
import CreateJobs from '../components/CreateJobs';

const Home = () => {
  // Initial state for vacancies is set to empty array:
  const [vacancies, setVacancies] = useState([]);

  // Fetch Vacancies (with server):

  // With initial component lodading, data (jobs) from "db.json" is fetched and the state is set to data (jobs) using setVacancies and useEffect hook:

  useEffect(() => {
    const fetchVacancies = async () => {
      const res = await fetch('http://localhost:5000/vacancies');
      const vacancies = await res.json();
      setVacancies(vacancies);
    };

    fetchVacancies();
  }, []); // empty dependency array denoting effect on initial component loading.

  /* // Before Server:
  // With initial page loading, data (jobs) from 'data' is set as state for vacancies using 'setVacancies':
  useEffect(() => {
    setVacancies(jobs);
  }, []); // empty array dependecy */

  // Add Vacancy (with server):

  // To create a vacancy not only in UI, but on server too:
  const addVacancy = async (vacancy) => {
    const res = await fetch('http://localhost:5000/vacancies', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(vacancy),
    });

    const newVacancy = await res.json(); // new task added

    setVacancies([newVacancy, ...vacancies]); // new data is added to the existing tasks.

    // Note that, with server as 'id' is automatically generated, the id value will be incremented for a new data and the new vacancy will be added to the bottom (not top).
  };

  /* // Before Server:
  const addVacancy = (vacancy) => {
    const id = new Date().getTime().toString(); // to create a random unique id
    const newVacancy = { id, ...vacancy };
    setVacancies([newVacancy, ...vacancies]);
  }; */

  // Delete Vacancy (with server)

  // To delete a vacancy not only in UI, but on server too:
  const deleteVacancy = async (id) => {
    await fetch(`http://localhost:5000/vacancies/${id}`, {
      method: 'DELETE',
    });
    setVacancies(vacancies.filter((vacancy) => vacancy.id !== id));
  };

  /* // Without Server:
  const deleteVacancy = (id) => {
    setVacancies(vacancies.filter((vacancy) => vacancy.id !== id));
  }; */

  // Apply for Vacancy
  const applyVacancy = (vacancy) => {
    window.alert(`Successfully applied for the position ${vacancy.title}`);
  };

  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <p className="title">Find your dream job today</p>
          <p className="subtitle">Apply for any vacancies below</p>
        </div>
      </section>

      <section>
        <CreateJobs addVacancy={addVacancy} />
      </section>

      {/* Display vacancies: */}
      <section>
        {vacancies.map((vacancy) => {
          return (
            <Vacancy
              key={vacancy.id}
              vacancy={vacancy}
              deleteVacancy={deleteVacancy}
              applyVacancy={applyVacancy}
            />
          );
        })}
      </section>
    </>
  );
};

export default Home;
