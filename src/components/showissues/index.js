import React from "react";
import "../showissues/index.css"
const ShowData = (props) => {
  return (
    <div className={props.className}>
      <div className="Issue">
        <div className="header">
          <div className="icon">
            <p>{props.status}</p>
          </div>
          <div className="issue-container">
            <div >
              <div className="title-and-status">
                <h4>{props.title}</h4>
                <h5 id="status">Status:{props.status}</h5>
              </div>
              <p id="number"><strong>#{props.number}</strong></p>
              <p id="number"><strong>#{props.id}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowData;
