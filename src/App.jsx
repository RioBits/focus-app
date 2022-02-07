import styles from './App.module.css'
import Header from './components/Header'
import Timer from './components/Timer'
import Tasks from './components/Tasks'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.container}>
        <Timer />
        <Tasks />
      </main>
    </div>
  )
}

export default App
