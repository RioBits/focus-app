import { useState, useEffect, createContext } from 'react'

export const tasksContext = createContext(null)

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const currentTasks = JSON.parse(localStorage.getItem('tasks')) || []
    setTasks(currentTasks)
  }, [])

  useEffect(() => {
    const newTasks = JSON.stringify(tasks)
    localStorage.setItem('tasks', newTasks)
  }, [tasks])

  return (
    <tasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </tasksContext.Provider>
  )
}
