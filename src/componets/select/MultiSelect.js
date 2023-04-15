import React, { useState, useEffect } from "react";
import Select from "./Select";
import { pathContext } from "../../utils/PathContext";
import Swal from "sweetalert2";

export default function MultiSelect({ horario }) {
  const [options, setOptions] = useState([]);
  const [values, setValues] = useState([]);
  const [valuesToSave, setValuesToSave] = useState([]);
  const [loading, setLoading] = useState(false);

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
          console.log(error);
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
      setValues([...values])
      localStorage.setItem("enfermeras" + horario, JSON.stringify(values));
    }, 100);
    return () => clearInterval(Interval);
  }, [values]);

  const handleAddSelect = () => {
    setValues([...values, ""]);
    console.log(values);
    localStorage.setItem("enfermeras" + horario, JSON.stringify(values));
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
      })
    }
  };

  return (
    <div>
      {values
        ? values.map((value, index) => {
            return (
              <div key={index}>
                {/* <Select options={options ? options:""} defaultValue={value ? value:""} onChange={(event) => handleChange(event, index)} /> */}
                <select
                  onChange={(event) => handleChange(event, index)}
                  value={value ? value : ""}
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
                <button type="button" onClick={() => handleRemoveSelect(index)}>
                  Eliminar
                </button>
              </div>
            );
          })
        : null}
      <button type="button" onClick={handleAddSelect}>
        Agregar
      </button>
    </div>
  );
}
