import "./App.css";
import FetchRecords from "./components/fetch/FetchRecords";
import "bootstrap/dist/css/bootstrap.min.css";
import { FetchContextProvider } from "./contex/FetchContex";
import AddRecord from "./components/addRecord/AddRecord";
import Update from "./components/utility/UpdateRecord";
import { useState } from "react";
import { postRequest, baseUrl } from "./utils/services";
import ErrorComp from "./components/utility/ErrorComp";
import Button from 'react-bootstrap/Button';

function App() {
  const [serverResponse, setServerResponse] = useState(null);
  const [error, setError] = useState(false);
  const [fetch, setFetch] = useState(false);
  const onOkClickHandeler = () => {
    setError(false);
  };

  const clickedFetch = (e) =>{
    e.preventDefault();
    setFetch(true);
  }

  return (
    <div className="app">
      <FetchContextProvider fetchRecords = {fetch}>
        <Button onClick={clickedFetch}>Fetch</Button>
        <FetchRecords></FetchRecords>
          {error && (
            <ErrorComp
              onOK={onOkClickHandeler}
              errorMsg={serverResponse?.message}
            ></ErrorComp>
          )}
      </FetchContextProvider>
    </div>
  );
}

export default App;
