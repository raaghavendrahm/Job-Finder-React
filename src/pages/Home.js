import Vacancy from '../components/Vacancy';
import { vacancies as jobs } from './data';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
  // Initial state for vacancies is set to empty array:
  const [vacancies, setVacancies] = useState([]);

  // With initial page loading, data (jobs) from 'data' is set as state for vacancies using 'setVacancies':
  useEffect(() => {
    setVacancies(jobs);
  }, []); // empty array dependecy
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
          return <Vacancy key={vacancy.id} vacancy={vacancy} />;
        })}
      </section>
    </>
  );
};

export default Home;
