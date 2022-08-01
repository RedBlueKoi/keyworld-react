import { FC, useMemo } from "react"

interface Props {
  children: JSX.Element | string
  type?: "button" | "submit" | "reset"
  color?: "accent" | "primary"
  isFloating?: boolean
  onClick: () => void
  disabled?: boolean
  className?: string
}

const PrimaryButton: FC<Props> = (props: Props) => {
  const { children, type, disabled, onClick, isFloating, color, className } =
    props
  const styles = useMemo<string>(() => {
    const styleArray = [
      "px-6",
      "h-10",
      "inline-flex",
      "justify-between",
      "items-center",
      "text-white",
      "rounded-md"
    ]
    if (isFloating) styleArray.push("shadow-md shadow-primary")
    if (disabled) styleArray.push("bg-slate-500 opacity-30")
    if (!disabled) styleArray.push(color ? "bg-accent" : "bg-primary")
    return [...styleArray, className].join(" ")
  }, [isFloating, color, className])
  return (
    <button
      type={type || "button"}
      disabled={disabled}
      onClick={onClick}
      className={styles}>
      {children}
    </button>
  )
}

export default PrimaryButton
