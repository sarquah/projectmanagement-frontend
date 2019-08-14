import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects: React.FC = () => {
  const [projectNames, setProjectNames] = useState([]);
  useEffect(() => {
    const getProjectData = async () => {
      const result = await axios.get(
        'http://localhost:65100/api/v1/project/projects'
      );
      setProjectNames(result.data.map((project: any) => project.name));
    };
    getProjectData();
  }, []);
  return (
    <div>
      <h2>Projects</h2>
      {projectNames ? projectNames.map((name: any) => <p>{name}</p>) : null}
    </div>
  );
};

export default Projects;
