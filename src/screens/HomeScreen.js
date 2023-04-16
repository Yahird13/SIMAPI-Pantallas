import React, { useEffect, useState } from "react";
import SimapiNavbar from "../componets/navbar/SimapiNavbar";
import CamillaContainer from "../componets/containers/CamillaContainer";
import { isUserAuthenticated } from "../auth/TokenValidate";
import { pathContext } from "../utils/PathContext";
import { isInstitutionAuthenticated } from "../auth/InstitutionValidate";
import SimapiSelect from "../componets/select/SimapiSelect";
import Loader from '../componets/loader/Loader'
import Swal from "sweetalert2";

let lastColorPrimario = "";
let lastColorSecundario = "";
let lastColorTerciario = "";

export default function HomeScreen() {
  const [islas, setIslas] = useState([]);
  const [islaSelected, setIslaSelected] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  if (!isUserAuthenticated()) {
    if (!isInstitutionAuthenticated()) {
      window.location.replace("/");
    }
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `${pathContext}/api/auth/camillas/institucion/${localStorage.getItem(
        "idInstitucion"
      )}`,
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
        const results = [];
        data.data.forEach((element) => {
          if (!results.includes(element.idIsla)) {
            results.push(element.idIsla);
          }
        });
        const islas = results.map((isla) => {
          return {
            value: isla,
            label: `Isla ${isla}`,
          };
        });
        setIslas(islas);
      })
      .catch((error) => Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      }))
      .finally(() => setIsLoading(false));
  }, []);

  const handleChange = (e) => {
    setIslaSelected(e);
    localStorage.setItem('contadorLoaderInicio', 0);
  };

  return (
    <div>
      <SimapiNavbar />
      {isLoading ? (<Loader/>): (
      <div
        style={{
          margin: "5%",
          marginTop: "10%",
          borderRadius: "15px",
          border: "5px solid black",
          minHeight: 300,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
            marginRight: "1%",
            marginTop: "2%",
          }}
        >
          <SimapiSelect
            style={{}}
            options={islas ? islas : null}
            onChange={(e) => handleChange(e)}
            selectValue={islaSelected}
          />
        </div>
        <div>
          <CamillaContainer isla={islaSelected}/>
        </div>
      </div>)}
    </div>
  );
}
