import styles from './Tasks.module.css'
import Task from './Task'

const Tasks = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Tasks</h2>
      <div className={styles.tasks}>
        <Task />
      </div>
    </div>
  )
}

export default Tasks
