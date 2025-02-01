import { useEffect, useState } from "react"
import axios from 'axios'
import './app.scss'

export default function App() {
  const [advice, setAdvice] = useState([])

  const getAdvice = async () => {
    const item = await axios.get('https://api.adviceslip.com/advice')
    setAdvice(item.data.slip.advice)
  }

  useEffect(() => {
    getAdvice()
  }, [])

  return (
    <body>
      <main>
        <h1>Advice of the day!</h1>
        <h2>{advice}</h2>
        <a target='_blank' href="https://api.adviceslip.com/#endpoint-">Click here to see the API</a>
      </main>
    </body>
  )
}