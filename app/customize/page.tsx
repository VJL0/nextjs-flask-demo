//import Dropdown from "@/components/Dropdown";

const CustomizePage = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/app`);
  const htmlContent = await response.text();

  //const response = await fetch(`${process.env.BASE_URL}/api/flask/getPrograms`);
  //const programs = await response.json();

  return (
    <div>
      {htmlContent}
    </div>
  );
};

export default CustomizePage;
