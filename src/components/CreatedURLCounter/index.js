import React, { useState, useEffect, useMemo } from "react";
import { Container } from "./styles";
import "../../styles/animations.css";
import { useTranslation } from "react-i18next";

export default function CreatedURLCounter({ numberOfURLs }) {
  const { t, i18n } = useTranslation("en");

  // console.log(t);

  return (
    <Container className="incomingURLCounter">
      <strong>{numberOfURLs}</strong> {t("shortened")}
    </Container>
  );
}
