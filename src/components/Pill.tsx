import './Pill.css';

import React from "react";

interface Props {
  bgColor: string;
  ftColor: string;
  hoverColor: string;
  label: string;
}

export default function Pill({
  bgColor,
  ftColor,
  hoverColor,
  label
}: Props) {
  const style: React.CSSProperties = {
    "--hover-color": hoverColor,
    "--bg-color": bgColor,
    "--ft-color": ftColor,
  } as React.CSSProperties;

  return (
    <div className="pill" style={style}>
      {label}
    </div>
  );
}