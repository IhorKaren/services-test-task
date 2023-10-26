import { useState, FC } from 'react';

import { CategoryItem } from 'components/App.types';

type CategoryProps = {
  el: CategoryItem;
  onAdd: () => void;
  onRemove: (id: number) => void;
};

const CategoriesItem: FC<CategoryProps> = ({ el, onAdd, onRemove }) => {
  const [categoryName, setCategoryName] = useState('');
  const [isInputShown, setIsInputShown] = useState(true);

  const addCategoryTitle = () => {
    if (categoryName.trim() === '') {
      return;
    }

    el.title = categoryName;
    setCategoryName('');
    setIsInputShown(false);
  };

  const changeCategoryTitle = (title: string) => {
    setCategoryName(title);
    setIsInputShown(true);
  };

  return (
    <li className="categories-item">
      {isInputShown && (
        <>
          <div className="categories-input-wrap">
            <input
              className="categories-input"
              type="text"
              value={categoryName}
              onChange={e => setCategoryName(e.target.value)}
              placeholder="Category name"
            />
            <div className="buttons-wrap">
              <button
                className="button"
                type="button"
                onClick={() => onRemove(el.id)}
              >
                ❌
              </button>
              <button
                className="button"
                type="button"
                onClick={addCategoryTitle}
              >
                🆗
              </button>
            </div>
          </div>
        </>
      )}
      {!isInputShown && (
        <>
          <div className="categories-item-wrap">
            <h3 className="subcategory-title">{el.title}</h3>
            <div className="buttons-wrap">
              <button className="button" type="button" onClick={onAdd}>
                ➕
              </button>
              <button
                className="button"
                type="button"
                onClick={() => changeCategoryTitle(el.title)}
              >
                ✏
              </button>
              <button
                className="button"
                type="button"
                onClick={() => onRemove(el.id)}
              >
                ❌
              </button>
            </div>
          </div>
        </>
      )}
    </li>
  );
};

export default CategoriesItem;
