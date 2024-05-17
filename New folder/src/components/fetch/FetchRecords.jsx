import { useContext, useState } from "react";
import Records from "./Record";
import { fetchContext } from "../../contex/FetchContex";
import "./fetchRecords.css";
import { ring } from "ldrs";

ring.register();

function Fetch() {
  const { records, isLoading, error } = useContext(fetchContext);
  return (
    <>
      <div className="outer">
      
        {error ? (
          <p>An error encountered while fetching</p>
        ) : isLoading ? (
          <div className="loading">
            <l-ring
            size="40"
            stroke="5"
            bg-opacity="0"
            speed="2"
            color="black"
          ></l-ring>
          </div>
        ) : (
          records &&
          records.map((record) => (
            <Records
              key={record?.id}
              details={record}
            ></Records>
          ))
        )}
      </div>
    </>
  );
}

export default Fetch;
