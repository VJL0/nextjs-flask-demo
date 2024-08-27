import Dropdown from "@/components/Dropdown";
import React from "react";

const CustomizePage = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/app`);
  const programs = await response.json();

  return (
    <div>
      <Dropdown programs={programs} />
    </div>
  );
};

export default CustomizePage;
