import React, { useState, useEffect } from "react";

const Pagination = (props) => {
  const [counter, setCounter] = useState(1);
  const [nbuttons, setNbuttons] = useState(25);

  useEffect(() => {
    const value = props.showPerPage * counter;
    props.handlePage(value - props.showPerPage, value);
  }, [counter]);

  const handleInc = () => {
    if (counter < 25) {
      setCounter(counter + 1);
      console.log("Increased");
    }
  };

  const handleDec = () => {
    if (counter > 1) {
      setCounter(counter - 1);
      console.log("Decreased");
    }
  };

  const handleCounter = (idx) => {
    setCounter(idx);
  };

  return (
    <div className="d-flex justify-content-center mt-5 mb-5">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" onClick={handleDec}>
              Prev
            </a>
          </li>

          {new Array(25).fill("").map((elem, idx) => (
            <li className={`page-item `}>
              <a className="page-link" onClick={() => handleCounter(idx)}>
                {idx + 1}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" onClick={handleInc}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
