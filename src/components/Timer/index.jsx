import { useEffect, useRef, useState } from 'react'
import Button from '../Button'
import styles from './Timer.module.css'

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [timeText, setTimeText] = useState('25:00')
  const time = useRef(25 * 60)
  const round = useRef(0)

  useEffect(() => {
    let timer

    if (isRunning) {
      console.log(round.current)
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

    if (minutes === 0 && seconds === 0) {
      const notificationSound = new Audio('./sounds/notification.mp3')
      notificationSound.play()
      new Notification("it's time to take break!", {
        icon: './favicon.ico',
        body: "Nice work! now le'ts take a break",
      })

      setIsRunning(false)

      round.current = round.current + 1
      if (round.current % 2 === 0) {
        setTimeText('25:00')
        time.current = 25 * 60
      } else if (round.current % 7 === 0) {
        setTimeText('15:00')
        time.current = 15 * 60
        round.current = -1
      } else {
        setTimeText('05:00')
        time.current = 5 * 60
      }
    }
    console.log('tick')
  }

  return (
    <div className={styles.container}>
      <h1>Pomodoro</h1>
      <p className={styles.time}>{timeText}</p>
      <Button
        onClick={() => {
          Notification.requestPermission()

          setIsRunning((prev) => !prev)
        }}
      >
        {isRunning ? 'Pause' : 'Start'}
      </Button>
      <Button
        onClick={() => {
          setIsRunning(false)
          round.current = round.current + 1
          if (round.current % 2 === 0) {
            setTimeText('25:00')
            time.current = 25 * 60
          } else if (round.current % 7 === 0) {
            setTimeText('15:00')
            time.current = 15 * 60
            round.current = -1
          } else {
            setTimeText('05:00')
            time.current = 5 * 60
          }
        }}
      >
        Skip
      </Button>
    </div>
  )
}

export default Timer
