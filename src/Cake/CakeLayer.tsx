import "./src/styles/CakeLayer.css"
import { Layer } from '../interfaces/interfaces'
import { FC } from 'react'

interface Props {
    layers: Layer
}

const CakeLayer: FC<Props> = ({ layers }) => {
    const { height, width, color } = layers;
    const style = {
      height: `${height}rem`,
      width: `${width}rem`,
      backgroundColor: color,
    }
  
    return (
        <>
            <div className="cake-layer" style={style} />
        </>
    )
}
export default CakeLayer