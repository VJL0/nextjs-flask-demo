import Dropdown from "@/components/Dropdown";

interface Program {
  program: string;
}

const ProgramDropdown = async () => {
  // Fetch the programs data from the API
  const response = await fetch(`${process.env.BASE_URL}/api/app`);
  const data: Program[] = await response.json();

  const programs = data.map((item) => item.program);

  return (
    <div>
      <Dropdown name={"Program"} data={programs} />
    </div>
  );
};

export default ProgramDropdown;
