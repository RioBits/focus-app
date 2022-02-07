import styles from './App.module.css'
import Header from './components/Header'
import Timer from './components/Timer'
import Tasks from './components/Tasks'
import { TasksProvider } from './tasksContext'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.container}>
        <Timer />
        <TasksProvider>
          <Tasks />
        </TasksProvider>
      </main>
    </div>
  )
}

export default App
