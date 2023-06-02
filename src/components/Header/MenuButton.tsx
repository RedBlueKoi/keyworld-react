import { FC } from "react"

interface Props {
  onClick: () => void
}
const MenuButton: FC<Props> = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className="text-primary w-8 h-8">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          id="Vector"
          d="M5 17H19M5 12H19M5 7H19"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}

export default MenuButton
