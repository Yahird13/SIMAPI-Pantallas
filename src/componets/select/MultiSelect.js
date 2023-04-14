import React, { useState, useEffect } from "react";
import SimapiSelect from "./SimapiSelect";
import Button from "../buttons/Button";

export default function MultiSelect(props) {
  const [selectCount, setSelectCount] = useState(1);
  const [selectValues, setSelectValues] = useState([{ id: 1, value: "" }]);

  const handleAddSelect = () => {
    setSelectValues([...selectValues, { id: selectCount + 1, value: "" }]);
    setSelectCount(selectCount + 1);
  };

  const handleSelectChange = (event, id) => {
    const updatedValues = selectValues.map((select) => {
      if (select.id === id) {
        return {
          ...select,
          value: event.target.value,
        };
      }
      return select;
    });
    setSelectValues(updatedValues);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "end", 
        width: "100%",
      }}
    >
      <div>
        {selectValues.map((select) => (
          <div key={select.id} style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}>
            <SimapiSelect
              selectValue={select.selectValue}
              placeholder={props.placeholder}
              style={{...props.style, height: 50, marginTop: 10, marginBottom: 10 }}
              options={props.options}
              onChange={(e) => {
                props.onChange()
                handleSelectChange(e, select.id)
            }}
            />
          </div>
        ))}
      </div>
      <div style={{
        display: "flex",
        justifyContent: "right",
      }}>
        <Button
          onClick={handleAddSelect}
          type={"button"}
          text={"+"}
          style={{
            width: 50,
            height: 50,
            fontSize: "20px",
            fontWeight: "bold",
            borderRadius: 10,
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
          }}
        />
      </div>
    </div>
  );
}
