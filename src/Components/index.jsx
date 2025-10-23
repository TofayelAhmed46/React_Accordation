import React, { useState } from "react";

import { data } from "./data";

import "./style.css";

function index() {
  const [select, setSelected] = useState(null);
  const [enableMultiSection, setEnableMultiSection] = useState(false);
  const [Multiple, setMultiple] = useState([]);

  const handleClick = (id) => {
    setSelected(select === id ? null : id);
  };

  function handleMultipleSection(getCurrentId) {
    let cpyMultiple = [...Multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSection(!enableMultiSection)}>
        Enable Multi Section
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          <div className="">
            {data.map((dataItem) => (
              <div
                key={dataItem.id}
                className="item"
                style={{ cursor: "pointer" }}
              >
                <div
                  onClick={
                    enableMultiSection
                      ? () => handleMultipleSection(dataItem.id)
                      : () => handleClick(dataItem.id)
                  }
                  className="title"
                >
                  <h3> {dataItem.name}</h3>
                  <span>+</span>
                </div>
                <div>
                  {select === dataItem.id ? (
                    <div className="content">{dataItem.bio}</div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default index;
