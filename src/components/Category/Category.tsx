import { useState, FC } from 'react';

import { CategoryItem } from 'components/Categories/Categories';

type CategoryProps = {
  el: CategoryItem;
  onRemove: (id: number) => void;
};

const Category: FC<CategoryProps> = ({ el, onRemove }) => {
  const [categoryName, setCategoryName] = useState('');
  const [isInputShown, setIsInputShown] = useState(true);

  const addCategoryTitle = () => {
    if (categoryName.trim() === '') {
      return;
    }

    el.title = categoryName;
    setIsInputShown(false);
  };

  const changeCategoryTitle = () => {
    setIsInputShown(true);
  };

  return (
    <>
      <li>
        {isInputShown && (
          <div>
            <input
              type="text"
              value={categoryName}
              onChange={e => setCategoryName(e.target.value)}
              placeholder="Category name"
            />
            <button type="button" onClick={() => onRemove(el.id)}>
              Delete
            </button>
            <button type="button" onClick={addCategoryTitle}>
              OK
            </button>
          </div>
        )}
        {!isInputShown && (
          <div>
            <h3>{el.title}</h3>
            <button type="button" onClick={changeCategoryTitle}>
              Change
            </button>
            <button type="button" onClick={() => onRemove(el.id)}>
              Delete
            </button>
          </div>
        )}
      </li>
    </>
  );
};

export default Category;
