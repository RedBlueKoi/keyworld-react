import { FC } from "react"
import Contributors from "./Contributors"

const Footer: FC = () => {
  return (
    <footer className="bg-primary text-white" id="bottom">
      <div className="flex items-center justify-center py-4 lg:text-2xl text-xl font-semibold">
        <div className="text-accent">Contributors:</div>
      </div>
      <Contributors />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center pt-2 pb-4 text-gray-400 text-sm">
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
