import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { search } from "superagent";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
/* const Search =()=>{
  return(
    <input
    type="text"
    className="form-control"
    style={{width:"240px"}}
    placeholder:Search
    />
  );
};
export default search;
 */
