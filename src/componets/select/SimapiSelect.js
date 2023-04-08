import React from "react";

export default function SimapiSelect(props) {
  const { width, height } = props.style;

  return (
    <div
      style={{
        ...props.style,
        ...styles.div,
        width: width ? width : 150,
        height: height ? height : 40,
      }}
    >
      <select
        style={{
          outline: "none",
          border: "none",
          width: "100%",
          height: "100%",
        }}
        defaultValue={props.selectValue ? props.selectValue : ""}
        onChange={props.onChange}
        required
      >
        {props.placeholder ? <option value="" disabled>
          {props.placeholder}
        </option>: null}
        {props.options
          ? props.options.map((item, index) => {
              return (
                <option
                  key={index}
                  value={item.value}
                  disabled={item.disabled ? item.disabled : null}
                >
                  {item.label}
                </option>
              );
            })
          : null}
      </select>
    </div>
  );
}

const styles = {
  div: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    border: "2px solid black",
    outline: "none",
  },
};
