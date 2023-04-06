import React, { useEffect } from "react";
import SimapiNavbar from "../componets/navbar/SimapiNavbar";
import CamillaContainer from "../componets/containers/CamillaContainer";
import { isUserAuthenticated } from "../auth/TokenValidate";

let lastColorPrimario = '';
let lastColorSecundario = '';
let lastColorTerciario = '';

export default function HomeScreen() {
  useEffect(() => {
    const Interval = setInterval(() => {
      fetch(
        `http://localhost:8080/api/auth/colores/${localStorage.getItem(
          "idInstitucion"
        )}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          const datos = data.data;
          lastColorPrimario = localStorage.getItem("colorPrimario");
          lastColorSecundario = localStorage.getItem("colorSecundario");
          lastColorTerciario = localStorage.getItem("colorTerciario");
          localStorage.setItem("colorPrimario", datos.colorPrimario);
          localStorage.setItem("colorSecundario", datos.colorSecundario);
          localStorage.setItem("colorTerciario", datos.colorTerciario);
          if (lastColorPrimario !== localStorage.getItem('colorPrimario')) {
            window.location.reload()
          }
          if (lastColorSecundario !== localStorage.getItem('colorSecundario')) {
            window.location.reload()
          }
          if (lastColorTerciario !== localStorage.getItem('colorTerciario')) {
            window.location.reload()
          }
          
        })
        .catch((error) => console.log(error));
    }, 500);
    return () => clearInterval(Interval);
  }, []);
  
  useEffect(() => {
    if (!isUserAuthenticated()) {
        window.location.href = "/";
    }
  })

  return (
    <div>
      <SimapiNavbar
        navbarItems={[
          { path: "/inicio", text: "Inicio" },
          { path: "/camillas", text: "Camillas" },
          { path: "/usuarios", text: "Usuarios" },
          { path: "/historial", text: "Historial" },
        ]}
      />

      <div
        style={{
          position: "fixed",
          bottom: "45px",
          right: "45px",
          left: "45px",
          top: "175px",
          borderRadius: "15px",
          border: "5px solid black",
        }}
      >
        {/* <SimapiSelect/> */}
        <CamillaContainer idIsla={""} idSala={""} />
      </div>
    </div>
  );
}
