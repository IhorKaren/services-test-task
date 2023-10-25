import { useState } from 'react';
import Category from 'components/Category/Category';

export type CategoryItem = {
  id: number;
  title: string;
};

const Categories = () => {
  const [categories, setCategories] = useState<CategoryItem[]>([]);

  const addEmptyCategory = () => {
    const newCategory = {
      id: categories.length + 1,
      title: '',
    };

    setCategories(p => [...p, newCategory]);
  };

  const removeCategory = (id: number) => {
    setCategories(p => categories.filter(el => el.id !== id));
  };

  return (
    <>
      <div className="categories">
        <h2>Categories</h2>
        <button type="button" onClick={addEmptyCategory}>
          Plus
        </button>
      </div>
      <ul>
        {categories.length !== 0 &&
          categories.map(el => {
            return (
              <Category
                key={el.id}
                el={el}
                onRemove={removeCategory}
              />
            );
          })}
      </ul>
    </>
  );
};

export default Categories;
