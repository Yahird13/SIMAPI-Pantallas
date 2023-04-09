import React from "react";

export default function SimapiSelect(props) {
  const { width, height } = props.style;

  const onChangeHandler = (e) => {
    props.onChange(e.target.value);
    console.log({fromSimapiSelect: e.target.value})
  };

  return (
    <div
      style={{
        ...props.style,
        ...styles.div,
        width: width ? width : 150,
        height: height ? height : 40,
        border: props.disabled? '2px solid gray' : "2px solid black",
      }}
    >
      <select
        style={{
          outline: "none",
          border: "none",
          width: "100%",
          height: "100%",
        }}
        value={props.selectValue ? props.selectValue : ""}
        onChange={onChangeHandler}
        required
        disabled={props.disabled}
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
    outline: "none",
  },
};
