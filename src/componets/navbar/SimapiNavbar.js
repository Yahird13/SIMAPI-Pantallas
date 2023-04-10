import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SettingsButton from "../buttons/SettingsButton";
import LogoutButton from "../buttons/LogoutButton";
import IconContainer from "../containers/IconContainer";
import { getContrastColor } from "../utils/ColorInvert";
import { C_PRIMARIO } from "../colors";
import { isUserAuthenticated } from "../../auth/TokenValidate";

export default function SimapiNavbar(props) {

  //useEffect(() => {
    if (!isUserAuthenticated()) {
      window.location.replace("/");
    }
  //}, []);

  const navbarItems = props.navbarItems;
  const textColorBackgroundInvert = getContrastColor(C_PRIMARIO);
  const [hoveredIndex, setHoveredIndex] = React.useState(-1);
  const [logo, setLogo] = useState(localStorage.getItem("logo"));

  useEffect(() => {
    const Interval = setInterval(() => {
    setLogo(localStorage.getItem("logo"));
    }, 500);
    return () => clearInterval(Interval);
  }, [logo]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  return (
    <nav style={styles.navbar}>
      <IconContainer
        style={styles.logoContainer}
        image={logo}
        styleText={{ fontSize: 10 }}
      />
      <SettingsButton style={styles.settingsButton} />
      <div style={styles.divLinks}>
        <ul style={styles.ul}>
          {navbarItems
            ? navbarItems.map((item, index) => {
                const isHovered = hoveredIndex === index;
                return (
                  <li key={index}>
                    <Link
                      to={item.path}
                      replace
                      style={{
                        textDecoration: "none",
                        color: textColorBackgroundInvert,
                        fontWeight: "bold",
                        fontSize: "100%",
                        transform: `scale(${isHovered ? 1.1 : 1})`,
                        transition: "transform 0.3s ease",
                        display: "list-item",
                      }}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.text}
                    </Link>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
      <LogoutButton
        style={styles.logoutButton}
        onClick={() => {
          const estado = localStorage.getItem("estado");
          const idInstitucion = localStorage.getItem("idInstitucion");
          const logo = localStorage.getItem("logo");
          const nombreEmpresa = localStorage.getItem("nombreEmpresa");
          //const cantidadCamillas = localStorage.getItem("cantidadCamillas");
          //const cantidadDeSalas = localStorage.getItem("cantidadDeSalas");
          //const cantidadDeIslas = localStorage.getItem("cantidadDeIslas");
          const idColores = localStorage.getItem("idColores");
          const colorPrimario = localStorage.getItem("colorPrimario");
          const colorSecundario = localStorage.getItem("colorSecundario");
          const colorTerciario = localStorage.getItem("colorTerciario");
          localStorage.clear();
          localStorage.setItem("estado", estado);
          localStorage.setItem("idInstitucion", idInstitucion);
          localStorage.setItem("logo", logo);
          localStorage.setItem("nombreEmpresa", nombreEmpresa);
          //localStorage.setItem("cantidadCamillas",cantidadCamillas);
          //localStorage.setItem("cantidadDeSalas",cantidadDeSalas);
          //localStorage.setItem("cantidadDeIslas",cantidadDeIslas);
          localStorage.setItem("idColores", idColores);
          localStorage.setItem("colorPrimario",colorPrimario);
          localStorage.setItem("colorSecundario", colorSecundario);
          localStorage.setItem("colorTerciario", colorTerciario);
          window.location.replace("/admin");
        }}
      />
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "20%",
    width: "100%",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1,
    backgroundColor: "white",
  },
  ul: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    listStyle: "none",
    overflow: "hidden",
  },
  logoContainer: {
    width: 100,
    height: 100,
    border: "1px solid black",
  },
  divLinks: {
    paddingRight: "50px",
    paddingTop: "10px",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "15px",
    backgroundColor: C_PRIMARIO,
    fontWeight: "bold",
    border: "none",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    fontSize: "24px",
    marginLeft: "50px",
    marginRight: "50px",
  },
  settingsButton: {
    marginLeft: "50px",
  },
};
