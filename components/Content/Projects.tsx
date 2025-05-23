const Projects = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="font-semibold">SuperDocx – PDF Generation Service</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>
            Created a backend tool enabling Tailwind CSS-based styling in the
            frontend.
          </li>
          <li>
            Built and published an NPM package for integration with React.
          </li>
          <li>
            Designed a tiered subscription system with token-based PDF
            generation, secure API access, and rate limiting.
          </li>
        </ul>
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold">Normalizer – JSON Data Processor</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>
            Built a utility tool to flatten complex JSON structures, simplifying
            data handling and transformations.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
