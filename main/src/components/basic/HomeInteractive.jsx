import { useEffect } from 'react';
import App from '../../utils/background/App.js';
const stCanvas = {
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: "-1",
}

const HomeInteractive = () => {
  useEffect(() => {
    new App();
  })

  return (
    <div id="isCanvas" style={stCanvas} />
  )
}

export default HomeInteractive