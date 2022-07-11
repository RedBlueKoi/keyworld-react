import { FC } from "react"
import { increment } from "@/store/features/counter"
import { useAppDispatch, useAppSelector } from "@/store/hooks"

import logo from "@/logo.svg"

const Home: FC = () => {
  const dispatch = useAppDispatch()
  const { value } = useAppSelector((state) => state.counter)
  const onIncrement = () => {
    dispatch(increment())
  }

  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p>Hello Vite + React!</p>
      <p>
        <button type="button" onClick={onIncrement}>
          count is: {value}
        </button>
      </p>
      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>
    </div>
  )
}

export default Home
