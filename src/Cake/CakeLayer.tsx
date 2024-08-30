import "../styles/CakeLayer.css"
import { Layer } from '../interfaces/interfaces'
import { FC } from 'react'
interface Props {
    layers: Layer
}
const CakeLayer: FC<Props> = ({ layers }) => {
    const { height, width, color } = layers;
    const topperHeight = 0.175 * width
    const style = {
      height: `${height}rem`,
      width: `${width}rem`,
      backgroundColor: color,
      borderRadius: `50% / ${topperHeight / 2}rem`,
      margin: `${-topperHeight / 2}rem 0`,
      padding: `${topperHeight / 2}rem 0`,
    }
    return (
        <>
            <div className="cake-layer" style={style}>
                <div className="topper" style={{height: topperHeight + "rem"}}></div>
            </div>
        </>
    )
}
export default CakeLayer