import { FC } from "react"

const Footer: FC = () => {
  return (
    <footer className="bg-primary text-white" id="bottom">
      <div className="flex items-center justify-center py-7 lg:text-4xl text-3xl font-semibold">
        <div>
          <span className="text-teal-400">Welcome</span> to our website
        </div>
      </div>
      <ul className="flex justify-center items-center flex-wrap gap-4 p-4">
        <li>
          <a
            target="_blank"
            className="link-primary"
            rel="noreferrer"
            href="https://github.com/amarborz">
            Umar Kantaev
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="link-primary"
            rel="noreferrer"
            href="https://github.com/cartpusher">
            David Omar
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="link-primary"
            rel="noreferrer"
            href="https://github.com/Kayvin59">
            Kayvin
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="link-primary"
            rel="noreferrer"
            href="https://github.com/maxi-nebula">
            Shyni Madhumathi Ravichandran
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="link-primary"
            rel="noreferrer"
            href="https://github.com/rodaw92">
            RAED (ROY) AWILL
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="link-primary"
            rel="noreferrer"
            href="https://github.com/spartanny">
            Tanishq
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="link-primary"
            rel="noreferrer"
            href="https://github.com/yuzdzhan">
            Yuzdzhan
          </a>
        </li>
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center pt-2 pb-8 text-gray-400 text-sm">
        <span>©2022 Project. All rights reserved.</span>
        <span>
          <a href="#" className="link-primary">
            Terms
          </a>
          ·
          <a href="#" className="link-primary">
            Privacy Policy
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
