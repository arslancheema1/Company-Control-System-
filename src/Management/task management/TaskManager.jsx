import React, { useState } from 'react';
import TaskCreation from './TaskCreation';
import ProgressTracking from './ProgressTracking';

function TaskManager() {
    const [tasks, setTasks] = useState([]);

    const handleAddTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const taskData = tasks.map(task => ({
        name: task.description,
        Completed: task.completed ? 100 : 0,
        Pending: task.completed ? 0 : 100
    }));

    return (
        <div>
            <TaskCreation onAddTask={handleAddTask} />
            <ProgressTracking data={taskData} />
        </div>
    );
}

export default TaskManager;
