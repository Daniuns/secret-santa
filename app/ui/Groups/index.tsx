"use client";
import React from "react";
import CardGroup from "./card";

interface Props {}

const Groups = () => {
  return (
    <div className="flex gap-6">
      <CardGroup />
      <CardGroup />
    </div>
  );
};

export default Groups;
