import DraggableBox from './DraggableBox/DraggableBox';
import Categories from './Categories/Categories';

export const App = () => {
  return (
    <main>
      <DraggableBox>
        <Categories />
      </DraggableBox>
    </main>
  );
};
