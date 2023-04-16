import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SettingsButton from "../buttons/SettingsButton";
import LogoutButton from "../buttons/LogoutButton";
import IconContainer from "../containers/IconContainer";
import { getContrastColor } from "../utils/ColorInvert";
import { C_PRIMARIO } from "../colors";
import { isUserAuthenticated } from "../../auth/TokenValidate";
import { isInstitutionAuthenticated } from "../../auth/InstitutionValidate";
export default function SimapiNavbar(props) {
  //useEffect(() => {
  if (!isUserAuthenticated()) {
    if (!isInstitutionAuthenticated()) {
      window.location.replace("/");
    }
  }
  //}, []);

  const navbarItems = JSON.parse(localStorage.getItem("navbarItems"));
  const textColorBackgroundInvert = getContrastColor(C_PRIMARIO);
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [logo, setLogo] = useState(localStorage.getItem("logo"));
  const [lastClickedLink, setLastClickedLink] = useState(null);

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

  useEffect(() => {
    if (localStorage.getItem("rol") === "A") {
      if (window.location.pathname === "/inicio") {
        setLastClickedLink(0);
      } else if (
        window.location.pathname === "/camillas" ||
        window.location.pathname === "/editarCamilla"
      ) {
        setLastClickedLink(1);
      } else if (
        window.location.pathname === "/usuarios" ||
        window.location.pathname === "/editarUsuario" ||
        window.location.pathname === "/detallesUsuario"
      ) {
        setLastClickedLink(2);
      } else if (
        window.location.pathname === "/historial" ||
        window.location.pathname === "/detallesHistorial"
      ) {
        setLastClickedLink(3);
      }
    } else if (localStorage.getItem("rol") === "SA"){
      if (window.location.pathname === "/administradores" || window.location.pathname === "/editarUsuario" || window.location.pathname === "/detallesUsuario") {
        setLastClickedLink(0);
      } else if (window.location.pathname === "/instituciones" || window.location.pathname === '/crearInstitucion' || window.location.pathname === "/editarInstitucion" || window.location.pathname === "/detallesInstitucion") {
        setLastClickedLink(1);
      }
    } else {
      if (window.location.pathname === "/inicio") {
        setLastClickedLink(0);
      }
    }
  }, [window.location.pathname]);

  return (
    <nav style={styles.navbar}>
      {localStorage.getItem("rol") !== "SA" ? (
        <IconContainer
          style={styles.logoContainer}
          image={logo}
          styleText={{ fontSize: 10 }}
        />
      ) : null}
      <div
        style={{
          paddingRight: "50px",
          paddingTop: "10px",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {localStorage.getItem("rol") ? (
          localStorage.getItem("rol") !== "SA" ? (
            <SettingsButton style={styles.settingsButton} />
          ) : null
        ) : null}
        <div style={styles.divLinks}>
          <ul style={styles.ul}>
            {navbarItems
              ? navbarItems.map((item, index) => {
                  const isHovered = hoveredIndex === index;
                  const isClicked = lastClickedLink === index;
                  return (
                    <div
                      key={index}
                      className={lastClickedLink === index ? "activeLink" : ""}
                    >
                      <li>
                        <Link
                          to={item.path}
                          replace
                          style={{
                            textDecoration: "none",
                            color: textColorBackgroundInvert,
                            textDecorationLine: isClicked
                              ? "underline"
                              : "none",
                            fontWeight: "bold",
                            transform: `scale(${isHovered ? 1.1 : 1})`,
                            transition: "transform 0.3s ease",
                            display: "list-item",
                            fontSize: "25px",
                          }}
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {item.text}
                        </Link>
                      </li>
                    </div>
                  );
                })
              : null}
          </ul>
        </div>
        <LogoutButton
          style={styles.logoutButton}
          onClick={() => {
            window.location.replace("/");
            localStorage.clear();
          }}
        />
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "14%",
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
    fontSize: "20px",
    marginLeft: "50px",
    marginRight: "50px",
  },
  settingsButton: {
    marginLeft: "50px",
  },
};
