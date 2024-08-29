import '../styles/Cake.css'
import { FC } from 'react'
import CakeLayer from './CakeLayer'
import { Layer } from '../interfaces/interfaces'

interface Props {
    layers: Layer[]
}

const Cake: FC<Props> = ({ layers }) => {
    return (
        <>
            <div className="cake">
                {layers.map(layer => (
                    <CakeLayer key={layer.id} layers={layer} />
                ))}
            </div>
        </>
    )
}

export default Cake