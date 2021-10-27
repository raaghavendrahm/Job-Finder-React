import { useState, useEffect } from 'react';
import Vacancy from '../components/Vacancy';

const Jobs = () => {
  // Initial state for vacancies is set to empty array:
  const [vacancies, setVacancies] = useState([]);

  // Fetch Jobs (with server)

  // With initial component lodading, data (jobs) from "db.json" is fetched and the state is set to data (jobs) using setVacancies and useEffect hook:
  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch('http://localhost:5000/vacancies');
      const data = await res.json();
      setVacancies(data);
    };

    fetchJobs();
  }, []);

  // Delete Vacancy (with server)

  // To delete a vacancy not only in UI, but on server too:
  const deleteVacancy = async (id) => {
    await fetch(`http://localhost:5000/vacancies/${id}`, {
      method: 'DELETE',
    });
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

export default Jobs;
