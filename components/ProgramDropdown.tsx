import Dropdown from "@/components/Dropdown";

interface Program {
  program: string;
}

const ProgramDropdown = async () => {
  try {
    // Fetch the programs data from the API
    const url = new URL("/api/app", process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000");
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Program[] = await response.json();

    const programs = data.map((item) => item.program);

    return (
      <div>
        <Dropdown name={"Program"} data={programs} />
      </div>
    );
  } catch (error) {
    console.error('Failed to fetch programs:', error);
    return <div>Error loading programs</div>;
  }
};

export default ProgramDropdown;
