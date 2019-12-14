import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Container } from "./styles";
import "../../styles/animations.css";

export default function PageNotFound() {
  const [newUrl, setNewUrl] = useState();
  const [incomingURLS, setIncomingURLS] = useState([]);

  return (
    <Container>
      {/* <img src="" alt="Crush.it logo" /> */}
      <header>{/* crush.it icon */}</header>
      <h1>
        404 <strong>Page not found</strong>
      </h1>
      <h4>This page may not have been created or is no longer available.</h4>
    </Container>
  );
}
