import { FC } from "react"

const NotFound: FC = () => {
  return (
    <div className="text-primary max-w-xl flex flex-col gap-4">
      <h1 className="text-4xl">Error 404</h1>
      <div className="text-lg">
        Oh no! It seems that the page you were trying to look for doesn’t exist!
        Please try again later or start over from the{" "}
        <a href="/" className="underline">
          Homepage
        </a>
      </div>
    </div>
  )
}

export default NotFound
