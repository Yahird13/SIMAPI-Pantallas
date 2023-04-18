import React, { useState, useEffect } from "react";
import Select from "./Select";
import { pathContext } from "../../utils/PathContext";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faAdd } from "@fortawesome/free-solid-svg-icons";
import Button from "../buttons/Button";

export default function MultiSelect({ horario }) {
  const [options, setOptions] = useState([]);
  const [values, setValues] = useState([]);
  const [valuesToSave, setValuesToSave] = useState([]);
  const [loading, setLoading] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);

  const fetchEnfermeras = (idEnfermeras) => {
    setLoading(true);
    const enfermerasPromises = idEnfermeras.map((element) => {
      return fetch(`${pathContext}/api/usuarios/${element}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            return element;
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error,
          })
        });
    });
    return Promise.all(enfermerasPromises);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${pathContext}/api/usuarios/institucion/${localStorage.getItem(
            "idInstitucion"
          )}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.json();
        const options = data.data
          .filter((element) => element.rol === "E")
          .map((element) => ({
            value: element.idUsuario,
            label: element.nombre + " " + element.apellidos,
          }));
        setOptions(options);

        const response2 = await fetch(
          `${pathContext}/api/camillas/${localStorage.getItem(
            "idCamillaEdit"
          )}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data2 = await response2.json();
        if (data2) {
          if (horario === "matutino") {
            const enfermeras = await fetchEnfermeras(
              data2.data.idEnfermera[0].matutino
            );
            setValues(enfermeras);
          } else if (horario === "vespertino") {
            const enfermeras = await fetchEnfermeras(
              data2.data.idEnfermera[0].vespertino
            );
            setValues(enfermeras);
          } else if (horario === "nocturno") {
            const enfermeras = await fetchEnfermeras(
              data2.data.idEnfermera[0].nocturno
            );
            setValues(enfermeras);
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [horario]);

  useEffect(() => {
    const Interval = setInterval(() => {
      setValues([...values]);
      localStorage.setItem(
        "enfermeras" + horario,
        JSON.stringify(values.filter(Boolean))
      );
      if (values[values.length - 1] !== "") {
        setBtnDisabled(false);
      }
      if (values.length===1){
        if(values[0] === ''){
          setBtnDisabled(true);
        }
      }
      if(values.length===options.length){
        setBtnDisabled(true);
      }
    }, 100);
    return () => clearInterval(Interval);
  }, [values]);

  const handleAddSelect = () => {
    setValues([...values, ""]);
    localStorage.setItem("enfermeras" + horario, JSON.stringify(values));
    setBtnDisabled(true);
  };

  const handleRemoveSelect = (index) => {
    const newValues = [...values];
    newValues.splice(index, 1);
    setValues(newValues);
  };

  const handleChange = (event, index) => {
    let contador = 0;
    const newValues = [...values];
    //console.log(event.target.options[event.target.selectedIndex].value, event.target.options[event.target.selectedIndex].textContent);
    newValues.forEach((element) => {
      if (element === event.target.options[event.target.selectedIndex].value) {
        contador++;
      }
    });
    if (contador < 1) {
      newValues[index] = {
        value: event.target.value,
        label: event.target.options[event.target.selectedIndex].textContent,
      };
      setValuesToSave(newValues);
      newValues[index] = event.target.value;
      setValues(newValues);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Ya has seleccionado a este/a enfermero/a",
      });
    }
  };

  return (
    <div>
      {values
        ? values.map((value, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                  height: "55px",
                }}
              >
                {/* <Select options={options ? options:""} defaultValue={value ? value:""} onChange={(event) => handleChange(event, index)} /> */}
                <div
                  style={{
                    border: "2px solid black",
                    width: "80%",
                    height: "100%",
                  }}
                >
                  <select
                    onChange={(event) => handleChange(event, index)}
                    value={value ? value : ""}
                    style={{
                      width: "100%",
                      height: "100%",
                      border: "none",
                      outline: "none",
                    }}
                    required
                  >
                    <option value="" disabled>
                      Selecciona un/a enfermero/a
                    </option>
                    {options.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div
                  style={{
                    width: "15%",
                    height: "100%",
                    padding: "5px",
                  }}
                >
                  <Button
                    style={styles.buttonDelete}
                    type="button"
                    onClick={() => handleRemoveSelect(index)}
                    icon={faTrashCan}
                    disabled={values.length === 1}
                  />
                </div>
              </div>
            );
          })
        : null}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "80%",
          height: "55px",
          padding: "5px",
        }}
      >
        <Button
          style={styles.buttonAdd}
          type="button"
          onClick={handleAddSelect}
          disabled={btnDisabled}
          icon={faAdd}
          text="Agregar enfermero/a"
        />
      </div>
    </div>
  );
}

const styles = {
  buttonDelete: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    height: "100%",
    width: "100%",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  buttonAdd: {
    backgroundColor: "#3fad5e",
    fontWeight: "bold",
    color: "black",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    height: "100%",
    width: "100%",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
};
