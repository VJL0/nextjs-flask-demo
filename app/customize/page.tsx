import Dropdown from "@/components/Dropdown";

const CustomizePage = async () => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/flask/getPrograms`);

    if (!response.ok) {
      // Log the response status and text
      const text = await response.text();
      console.error('API response error:', text);
      throw new Error(`Failed to fetch programs: ${response.statusText}`);
    }

    const programs = await response.json();

    return (
      <div>
        <Dropdown programs={programs} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching programs:', error);

    // Optionally, you can return a fallback UI or empty data
    return (
      <div>
        <p>Error loading programs. Please try again later.</p>
      </div>
    );
  }
};

export default CustomizePage;
