//import Dropdown from "@/components/Dropdown";

const CustomizePage = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/app`);
  const programs = await response.json();

  return (
    <div>
      {programs}
    </div>
  );
};

export default CustomizePage;