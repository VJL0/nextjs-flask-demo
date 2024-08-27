import Dropdown from "@/components/Dropdown";

const fetchPrograms = async () => {
  const response = await fetch(`${process.env.BASE_URL}/api/app`);
  const programs = await response.json();
  return programs;
};

const Gettingstarted = async () => {
  
  const programs = await fetchPrograms();

  return (
    <div>
      <Dropdown programs={programs} />
    </div>
  );
};

export default Gettingstarted;
