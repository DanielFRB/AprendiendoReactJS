import React from "react";
import { FaStar } from "react-icons/fa";

export const Star = ({ selected = false, onSelect = f => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);