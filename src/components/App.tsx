import { useState, ChangeEvent } from 'react';
import Header from './Header/Header';
import DraggableBox from './DraggableBox/DraggableBox';
import Categories from './Categories/Categories';

const options = [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.25, 1.5];

export const App = () => {
  const [index, setIndex] = useState(8);
  const [scale, setScale] = useState(1);

  const handleScaleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const toNumber = Number(e.target.value);

    setScale(toNumber);
  };

  const onZoomDecrementBtnClick = () => {
    if (index > 0) {
      setScale(options[index - 1]);
      setIndex(p => p - 1);
    }
  };

  const onZoomIncrementBtnClick = () => {
    if (index < options.length - 1) {
      setScale(p => options[index + 1]);
      setIndex(p => p + 1);
    }
  };

  return (
    <>
      <Header
        scale={scale}
        decrement={onZoomDecrementBtnClick}
        increment={onZoomIncrementBtnClick}
        onChange={handleScaleChange}
      />
      <main>
        <DraggableBox>
          <Categories scale={scale} />
        </DraggableBox>
      </main>
    </>
  );
};
