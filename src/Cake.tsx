import { FC } from 'react';
import { Layer } from './Layer';

interface CakeProps {
  layers: Layer[];
}

const Cake: FC<CakeProps> = ({ layers }) => {
  return (
    <div>
      {layers.map((layer, index) => (
        <div key={index}>
          Layer {index + 1} - Height: {layer.height}, Width: {layer.width}, Color: {layer.color}
        </div>
      ))}
    </div>
  );
};

export default Cake;
