import Dropdown from "@/components/Dropdown";

// This page is a server component by default
const CustomizePage = async () => {
  const response = await fetch(process.env.BASE_URL+"/api/flask/getPrograms");
  const programs = await response.json();

  return (
    <div>
      <Dropdown programs={programs} />
    </div>
  );
};

export default CustomizePage;
