import './countries.module.scss';
import { CountriesProps } from '@envfutbolpro/types';
import { getContries } from '../useContries';
import { useState, useEffect } from 'react';

export function Countries(props: CountriesProps) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await getContries();
      setCountries(result.data.response);
    })();
  }, []);

  return (
    <div className="section">
      <h1>Countries</h1>
      <div className="flex-wrap">
        {countries.map((country) => {
          return (
            <>
              <div className="card">
                <img src={country.flag} alt="" />
                <p>{country.name}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Countries;
