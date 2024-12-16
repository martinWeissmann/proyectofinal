import { CSSProperties } from "react"


const LogoButton = ({ positions }: { positions: CSSProperties }) => {
  return (
    <img style={{width: "64px", height: "64px", position: "absolute", ...positions}} src="/OS.png" />
  )
}

export default LogoButton