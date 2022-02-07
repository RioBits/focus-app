import styles from './Task.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Task = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div className={styles.container}>
      <p className={styles.task} onClick={() => setChecked((prev) => !prev)}>
        {checked ? (
          <FontAwesomeIcon icon={faCheckCircle} size='1x' />
        ) : (
          <FontAwesomeIcon icon={faCircle} size='1x' />
        )}
        <span
          className={`${styles.content} ${checked ? styles.checkedtext : ''}`}
        >
          Some task content
        </span>
      </p>
    </div>
  )
}

export default Task
