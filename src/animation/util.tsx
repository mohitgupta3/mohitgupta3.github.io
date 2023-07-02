import { useLayoutEffect, useState } from "react"

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (1 + max - min) + min)
}

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0])
  useLayoutEffect(() => {
    function updateSize() {
      console.log("updateSize", window.innerWidth, window.innerHeight)
      setSize([window.innerWidth, window.innerHeight])
    }
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [])
  return size
}

export default randomNumber;
// module.exports = { randomNumber, useWindowSize }