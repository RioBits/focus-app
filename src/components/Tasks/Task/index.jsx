import styles from './Task.module.css'
import { useContext, useState, useEffect } from 'react'
import { tasksContext } from '../../../tasksContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircle,
  faCheckCircle,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'

const Task = ({ content, checked, id }) => {
  const [check, setCheck] = useState(checked)
  const { setTasks } = useContext(tasksContext)

  useEffect(() => {
    // change the check in the task from the tasks
    setTasks((oldTasks) =>
      oldTasks.map((task) => {
        if (task.id === id) {
          return { ...task, checked: check }
        }

        return task
      })
    )
  }, [setTasks, check, id])

  const handleRemove = () => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const handleCheck = () => {
    setCheck((prev) => !prev)
  }

  return (
    <div className={styles.container}>
      <p className={styles.task} onClick={handleCheck}>
        {check ? (
          <FontAwesomeIcon icon={faCheckCircle} size='1x' />
        ) : (
          <FontAwesomeIcon icon={faCircle} size='1x' />
        )}
        <span
          className={`${styles.content} ${check ? styles.checkedtext : ''}`}
        >
          {content}
        </span>
      </p>
      <div className={styles.trashicon} onClick={handleRemove}>
        <FontAwesomeIcon icon={faTrash} size='1x' />
      </div>
    </div>
  )
}

export default Task
