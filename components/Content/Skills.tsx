const Skills = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <h3 className="font-semibold">Frontend</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>React</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Next.js</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold">Backend</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Node.js</li>
          <li>Express</li>
          <li>Prisma</li>
          <li>Python FastAPI</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold">Tools & Libraries</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>Playwright</li>
          <li>Zod</li>
          <li>GSAP</li>
          <li>THREE.js</li>
          <li>Redux</li>
          <li>React-Hook-Form</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold">Other</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          <li>API Design</li>
          <li>Performance Optimization</li>
          <li>Git</li>
          <li>Beginner-level C++ & Java</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
