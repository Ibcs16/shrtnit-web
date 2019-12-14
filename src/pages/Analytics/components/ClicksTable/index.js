import React, { useState, useEffect } from "react";
import { ClickRow, Container } from "./styles";
import { FaUnlockAlt, FaWpforms } from "react-icons/fa";

export default function ClickList({ clicks }) {
  return (
    <Container>
      <thead>
        <tr>
          <th>IP</th>
          <th>Country</th>
          <th>Browser</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {clicks.map(item => (
          <ClickRow key={clicks.indexOf(item)}>
            <td>item.IP</td>
            <td>item.country</td>
            <td>item.browser</td>
            <td>item.date</td>
          </ClickRow>
        ))}
      </tbody>
    </Container>
  );
}
