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

  // Add Vacancy
  const addVacancy = (vacancy) => {
    const id = new Date().getTime().toString(); // to create a random unique id
    const newVacancy = { id, ...vacancy };
    setVacancies([newVacancy, ...vacancies]);
  };

  // Delete Vacancy
  const deleteVacancy = (id) => {
    setVacancies(vacancies.filter((vacancy) => vacancy.id !== id));
  };

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
