import { FC } from "react"

interface Contributor {
  name: string
  link: string
}
const Contributors: FC = () => {
  const contributors: Contributor[] = [
    {
      link: "https://github.com/amarborz",
      name: "Umar Kantaev"
    },
    {
      link: "https://github.com/cartpusher",
      name: "David Omar"
    },
    {
      link: "https://github.com/Kayvin59",
      name: "Kayvin"
    },
    {
      link: "https://github.com/maxi-nebula",
      name: "Shyni Madhumathi Ravichandran"
    },
    {
      link: "https://github.com/rodaw92",
      name: "RAED (ROY) AWILL"
    },
    {
      link: "https://github.com/spartanny",
      name: "Tanishq"
    },
    {
      link: "https://github.com/yuzdzhan",
      name: "Yuzdzhan"
    },
    {
      link: "https://github.com/grandslammer",
      name: "Ivan White"
    }
  ]

  const rendered = contributors.map((contributor) => (
    <li key={contributor.link}>
      <a
        target="_blank"
        className="link-primary"
        rel="noreferrer"
        href={contributor.link}>
        {contributor.name}
      </a>
    </li>
  ))
  return (
    <ul className="flex justify-center items-center flex-wrap gap-4 px-2">
      {rendered}
    </ul>
  )
}

export default Contributors
