import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from 'components/layout/Header/Header';
import DashboardPage from 'pages/Dashboard/DashboardPage';
import AddTaskPage from 'pages/AddTaskPage/AddTaskPage';
import EditTaskPage from 'pages/EditTaskPage/EditTaskPage';
import { useTasks } from 'hooks/useTasks';

const App: React.FC = () => {
  // central task logic
  const {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleComplete,
    changeTaskStatus,
  } = useTasks();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <DashboardPage
              tasks={tasks}
              onDeleteTask={deleteTask}
              onToggleComplete={toggleComplete}
              onChangeStatus={changeTaskStatus}
            />
          }
        />
        <Route path="/add" element={<AddTaskPage onAddTask={addTask} />} />
        <Route
          path="/edit/:id"
          element={<EditTaskPage tasks={tasks} onUpdateTask={updateTask} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
