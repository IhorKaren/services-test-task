import { useState, FC } from 'react';

import icon from '../../icons/sprite.svg';

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
                className="button warning"
                type="button"
                onClick={() => onRemove(el.id)}
              >
                <svg className="icon" style={{ width: '20px', height: '20px' }}>
                  <use href={icon + '#delete'} />
                </svg>
              </button>
              <button
                className="button success"
                type="button"
                onClick={addCategoryTitle}
              >
                <svg className="icon">
                  <use href={icon + '#done'} />
                </svg>
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
                <svg className="icon">
                  <use href={icon + '#plus'} />
                </svg>
              </button>
              <button
                className="button"
                type="button"
                onClick={() => changeCategoryTitle(el.title)}
              >
                <svg className="icon" style={{ width: '12px', height: '12px' }}>
                  <use href={icon + '#pencil'} />
                </svg>
              </button>
              <button
                className="button danger"
                type="button"
                onClick={() => onRemove(el.id)}
              >
                <svg className="icon" style={{ width: '20px', height: '20px' }}>
                  <use href={icon + '#delete'} />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
    </li>
  );
};

export default CategoriesItem;
