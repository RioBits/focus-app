import { useEffect, useRef, useState } from 'react'
import Button from '../Button'
import styles from './Timer.module.css'

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [timeText, setTimeText] = useState('25:00')
  const time = useRef(25 * 60)

  useEffect(() => {
    let timer

    if (isRunning) {
      tick(time)
      timer = setInterval(() => {
        tick(time)
      }, 1000)
    }

    return () => {
      clearInterval(timer)
      console.log(`clear timer:`, timer)
    }
  }, [isRunning])

  function tick(time) {
    const minutes = Math.floor(time.current / 60)
    const seconds = time.current % 60

    // Put a zero on the left side of the number
    // Example: '04:02', '09:20', '12:07'.
    setTimeText(
      (minutes < 10 ? '0' + minutes : minutes) +
        ':' +
        (seconds < 10 ? '0' + seconds : seconds)
    )

    time.current = time.current - 1

    // console.log('tick')
  }

  return (
    <div className={styles.container}>
      <h1>Pomodoro</h1>
      <p className={styles.time}>{timeText}</p>
      <Button onClick={() => setIsRunning((prev) => !prev)}>
        {isRunning ? 'Pause' : 'Start'}
      </Button>
    </div>
  )
}

export default Timer
