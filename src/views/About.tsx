import { FC } from "react"

const About: FC = () => {
  return (
    <p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer">
        Learn React
      </a>
      {" | "}
      <a
        className="App-link"
        href="https://vitejs.dev/guide/features.html"
        target="_blank"
        rel="noopener noreferrer">
        Vite Docs
      </a>
    </p>
  )
}

export default About
