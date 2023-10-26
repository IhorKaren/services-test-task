import { useState, FC } from 'react';

import { CategoryItem } from 'components/App.types';
import addCategory from 'services/addCategory';
import CategoriesItem from 'components/CategoriesItem/CategoriesItem';

type CategoryProps = {
  el: CategoryItem;
  onRemove: (id: number) => void;
};

const SubCategories: FC<CategoryProps> = ({ el, onRemove }) => {
  const [subCategories, setSubCategories] = useState<CategoryItem[]>([]);

  const addEmptySubCategory = () => {
    addCategory(subCategories, setSubCategories);
  };

  const removeSubCategory = (id: number) => {
    setSubCategories(p => subCategories.filter(el => el.id !== id));
  };

  return (
    <div className='categories-thumb'>
      <CategoriesItem el={el} onAdd={addEmptySubCategory} onRemove={onRemove} />
      <ul className="subcategories-list__secondary">
        {subCategories.length !== 0 &&
          subCategories.map(item => {
            return (
              <CategoriesItem
                key={item.id}
                el={item}
                onAdd={addEmptySubCategory}
                onRemove={removeSubCategory}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default SubCategories;
