import Dropdown from "@/components/Dropdown";

// This page is a server component by default
const CustomizePage = async () => {
  const response = await fetch("http://localhost:3000/api/flask/getPrograms");
  const programs = await response.json();

  return (
    <div>
      <Dropdown programs={programs} />
    </div>
  );
};

export default CustomizePage;
