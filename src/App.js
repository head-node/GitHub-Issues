import React, { useState, useEffect } from "react";
import ShowData from "./components/showissues/";
import Pagination from "./components/pagination/";
import "./App.css";

const App = () => {
  const [allData, setAllData] = useState([]);
  const [showPerPage, setShowPerPage] = useState(4);
  const [page, setPage] = useState({
    start: 0,
    end: showPerPage,
  });

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/facebook/create-react-app/issues?page=1&per_page=100"
    )
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);

  const handlePage = (start, end) => {
    setPage({ start: start, end: end });
    console.log(`start:${start} end:${end}`);
  };

  return (
    <div>
      <div className="App">
        <h1 className="mb-4">Github Issues Page</h1>
        <div className="data-container">
          {allData.slice(page.start, page.end).map((issue, i) => {
            return (
              <ShowData
                className="Issues"
                key={i}
                id={issue.id}
                title={issue.title}
                status={issue.state}
                number={issue.number}
              />
            );
          })}
        </div>
      </div>
      <div className="container">
        <Pagination showPerPage={showPerPage} handlePage={handlePage} />
      </div>
    </div>
  );
};

export default App;
