import { useEffect, useState } from "react";
import "./styles.css";
import Table from "react-bootstrap/Table";

import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  /* const [searchParam] = useState[("capital", "name")]; */
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => setCountries(response.data))
      .catch((error) => console.log({ error }));
  }, []);

  return (
    <div className="App">
      <h1>Countries Table</h1>
      <Table>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search.."
        ></input>
      </Table>
      {/*  return countries.filter((country)=>{
      return searchParam.some((newItem)=>{
        return(
          country[newItem]
          .toString()
          .toLowerCase()
          .indexOf(search.toLowerCase())>-""
        );
      })
    }); */}

      <div className="App">
        <ReactBootStrap.Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Country Name</th>
              <th>Capital</th>
              <th>Region</th>
              <th>Flag</th>
            </tr>
          </thead>

          <tbody>
            {countries.map((country) => {
              return (
                <tr key={country.name}>
                  <td>{country.name}</td>
                  <td>{country.capital}</td>
                  <td>{country.region}</td>
                  <td>
                    <img
                      src={country.flag}
                      alt={country.name}
                      style={{ width: "100px" }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </ReactBootStrap.Table>
      </div>
    </div>
  );
}
