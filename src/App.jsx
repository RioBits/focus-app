import Timer from './components/Timer'
import styles from './App.module.css'
import Header from './components/Header'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.container}>
        <Timer />
      </main>
    </div>
  )
}

export default App
