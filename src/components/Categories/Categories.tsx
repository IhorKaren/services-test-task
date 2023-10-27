import { useState, FC } from 'react';
import Category from 'components/Category/Category';

import { CategoryItem } from 'components/App.types';
import addCategory from 'services/addCategory';

import icon from '../../icons/sprite.svg';

type CategoriesProps = {
  scale: number;
};

const Categories: FC<CategoriesProps> = ({ scale }) => {
  const [categories, setCategories] = useState<CategoryItem[]>([]);

  const addEmptyCategory = () => {
    addCategory(categories, setCategories);
  };

  const removeCategory = (id: number) => {
    setCategories(p => categories.filter(el => el.id !== id));
  };

  return (
    <>
      <div className="categories-wrap" style={{ transform: `scale(${scale})` }}>
        <div className="categories">
          <h2>Categories</h2>
        </div>
        <button className="button" type="button" onClick={addEmptyCategory}>
          <svg className="icon">
            <use href={icon + '#plus'} />
          </svg>
        </button>
      </div>
      <ul className="categories-list" style={{ transform: `scale(${scale})` }}>
        {categories.length !== 0 &&
          categories.map(el => {
            return <Category key={el.id} el={el} onRemove={removeCategory} />;
          })}
      </ul>
    </>
  );
};

export default Categories;
