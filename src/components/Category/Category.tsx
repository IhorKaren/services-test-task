import { useState, FC } from 'react';

import { CategoryItem } from 'components/Categories/Categories';
import CategoriesItem from 'components/CategoriesItem/CategoriesItem';

type CategoryProps = {
  el: CategoryItem;
  onRemove: (id: number) => void;
};

const Category: FC<CategoryProps> = ({ el, onRemove }) => {
  const [subCategories, setSubCategories] = useState<CategoryItem[]>([]);

  const addEmptySubCategory = () => {
    const newCategory = {
      id: Math.random() * 1000000,
      title: '',
    };

    setSubCategories(p => [...p, newCategory]);
  };

  const removeSubCategory = (id: number) => {
    setSubCategories(p => subCategories.filter(el => el.id !== id));
  };

  return (
    <li className="categories-item">
      <CategoriesItem el={el} onAdd={addEmptySubCategory} onRemove={onRemove}>
        <ul className="subcategories-list">
          {subCategories.length !== 0 &&
            subCategories.map(item => {
              return (
                <CategoriesItem
                  key={item.id}
                  el={item}
                  onAdd={addEmptySubCategory}
                  onRemove={removeSubCategory}
                >
                  {null}
                </CategoriesItem>
              );
            })}
        </ul>
      </CategoriesItem>
    </li>
  );
};

export default Category;
