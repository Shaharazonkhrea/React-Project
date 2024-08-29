import { FC } from 'react';
import { Layer } from '../interfaces/interfaces';
import { LayerAdd } from './LayerAdd';
import LayerBuilder from './LayerBuilder';

interface Props {
  layers: Layer[],
  deleteLayer: (index: number) => void
  addLayer: (layer: Layer) => void
  setLayers: (layers: Layer[]) => void
}

const CakeBuilder: FC<Props> = ({ deleteLayer, layers, addLayer, setLayers }) => {
  return (
    <div>
      <LayerAdd addLayer={addLayer} cakeLayers={layers} />
      <LayerBuilder layers={layers} removeLayer={(index) => deleteLayer(index)} setLayers={setLayers} />
    </div>
  );
};

export default CakeBuilder;