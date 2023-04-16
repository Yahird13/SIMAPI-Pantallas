import React, { useState, useEffect } from "react";
import CamillaButton from "../buttons/CamillaButton";
import Swal from "sweetalert2";
import SimapiSelect from "../select/SimapiSelect";
import { pathContext } from "../../utils/PathContext";
import SalaContainer from "./SalaContainer";
import Loader from "../loader/Loader";

export default function CamillaContainer({ isla }) {
  const [salas, setSalas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchSalas = () => {
    if (localStorage.getItem("contadorLoaderInicio") === "0") {
      setIsLoading(true);
      localStorage.setItem("contadorLoaderInicio", "1");
    }
    fetch(
      `${pathContext}/api/auth/camillas/institucion/${localStorage.getItem(
        "idInstitucion"
      )}/isla/${isla}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        const salas = [];

        data.data.forEach((element) => {
          if (!salas.includes(element.idSala)) {
            salas.push(element.idSala);
          }
        });
        setSalas(salas);
      })
      .catch((error) => console.log(error.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    //const interval = setInterval(() => {
    fetchSalas();
    //}, 500);
    //return () => clearInterval(interval);
  }, [salas]);

  /* const fetchCamillas = () => {
    fetch(`${pathContext}/api/auth/camillas/institucion/${localStorage.getItem("idInstitucion")}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => setCamillas(data.data))
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fetchCamillas();
    }, 500);

    return () => clearInterval(interval);
  }, [camillas]); */

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${
          salas.length <= 6 ? salas.length : 6
        }, auto)`,
        gridTemplateRows: "repeat(2, auto)",
        gap: "auto",
        alignItems: "center",
        gridAutoColumns: "minmax(min-content, max-content)",
        marginBottom: "20px",
      }}
    >
          {isLoading ? <Loader/> : salas
            ? salas.map((item, index) => {
                return (
                  <div key={index}>
                    <SalaContainer idSala={item} />
                  </div>
                );
              })
            : null}
    </div>
  );
}
