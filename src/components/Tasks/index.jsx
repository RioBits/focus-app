import styles from './Tasks.module.css'
import { useContext } from 'react'
import { tasksContext } from '../../tasksContext'
import AddTask from './AddTask'
import Task from './Task'

const Tasks = () => {
  const { tasks } = useContext(tasksContext)

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Tasks</h2>
      <div className={styles.tasks}>
        <AddTask />
        {tasks.map((task) => (
          <Task
            key={task.id}
            content={task.content}
            checked={task.checked}
            id={task.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Tasks
