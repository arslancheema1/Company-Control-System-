import React from 'react';

const ModuleList = ({ modules, onModuleUpdate }) => {
  const handleCheckboxChange = (index) => {
    const updatedModule = {
      ...modules[index],
      completed: !modules[index].completed,
      percentage: !modules[index].completed ? 100 : modules[index].percentage,
    };
    onModuleUpdate(index, updatedModule);
  };

  const handlePercentageChange = (index, percentage) => {
    const updatedModule = { ...modules[index], percentage: parseInt(percentage, 10) };
    onModuleUpdate(index, updatedModule);
  };

  return (
    <div >
  <br />
  <br />
  
  <h3 className='text-center'>Modules</h3>
      <ul className="list-group">
        {modules.map((module, index) => (
          <li key={index} className="list-group-item">
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                checked={module.completed}
                onChange={() => handleCheckboxChange(index)}
                className="me-2"
              />
              <span>{module.name}</span>
              <input
                type="number"
                value={module.percentage}
                onChange={(e) => handlePercentageChange(index, e.target.value)}
                className="form-control ms-auto"
                style={{ width: '70px' }}
                disabled={module.completed}
              />
              <span className="ms-2">%</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModuleList;
