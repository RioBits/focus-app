import styles from './AddTask.module.css'
import { useState, useContext } from 'react'
import { tasksContext } from '../../../tasksContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const AddTask = () => {
  const [content, setContent] = useState('')
  const { setTasks } = useContext(tasksContext)

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTask = content.trim()

    if (!newTask) {
      return alert('Please enter some text!')
    }

    setTasks((prev) => [
      ...prev,
      { content: newTask, checked: false, id: Date.now() },
    ])
    
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        className={styles.addtask}
        value={content}
        placeholder='Add new Task'
        onChange={(e) => setContent(e.target.value)}
      />
      <button type='submit' className={styles.btn}>
        <FontAwesomeIcon icon={faPlusSquare} size='lg' />
      </button>
    </form>
  )
}

export default AddTask
