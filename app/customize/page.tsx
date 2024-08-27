import Dropdown from "@/components/Dropdown";
import React from "react";

interface Program {
  name: string;
}

const CustomizePage = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/app`);
  const programs: Program[] = await response.json();

  return (
    <div>
      <Dropdown programs={programs} />
    </div>
  );
};

export default CustomizePage;
