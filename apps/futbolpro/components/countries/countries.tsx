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
    <div>
      <h1>Welcome to Countries!</h1>
      {countries.map((country) => {
        return (
          <>
            <div>{country.name}</div>
            <div>{country.code}</div>
            <div>{country.flag}</div>
          </>
        );
      })}
    </div>
  );
}

export default Countries;
