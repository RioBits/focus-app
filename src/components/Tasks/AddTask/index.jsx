import styles from './AddTask.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

const AddTask = () => {
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTask = content.trim()

    if (!newTask) {
      return alert('Please enter some text!')
    }

    const tasks = JSON.parse(window.localStorage.getItem('tasks')) || []

    tasks.push({ content: newTask, checked: false })

    window.localStorage.setItem('tasks', JSON.stringify(tasks))
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
