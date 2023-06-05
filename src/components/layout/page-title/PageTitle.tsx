import "./page-title.css"
type Props = {
  title: string
}
const PageTitle = ({ title }: Props) => {
  return <h1 className="text-4xl py-10 text-sky-900">{title}</h1>
}

export default PageTitle
