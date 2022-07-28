import { FC } from "react"

interface Props {
  title: string
}

const PageTitle: FC<Props> = (props: Props) => {
  return <h1 className="text-primary text-4xl text-left mb-6">{props.title}</h1>
}

export default PageTitle
