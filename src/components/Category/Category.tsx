import { useState, FC } from 'react';

import DialogWindow from 'components/DialogWindow/DialogWindow';
import addCategory from 'services/addCategory';
import SubCategories from 'components/SubCategories/SubCategories';
import CategoriesItem from 'components/CategoriesItem/CategoriesItem';

import { CategoryItem } from 'components/App.types';

type CategoryProps = {
  el: CategoryItem;
  onRemove: (id: number) => void;
};

const Category: FC<CategoryProps> = ({ el, onRemove }) => {
  const [isDialogShow, setIsDialogShow] = useState<boolean>(false);
  const [subCategories, setSubCategories] = useState<CategoryItem[]>([]);

  const addEmptySubCategory = () => {
    if (subCategories.length === 0) {
      setIsDialogShow(true);
      return;
    }

    addCategory(subCategories, setSubCategories);
  };

  const removeSubCategory = (id: number) => {
    setSubCategories(p => subCategories.filter(el => el.id !== id));
  };

  return (
    <li className="categories-thumb">
      <CategoriesItem el={el} onAdd={addEmptySubCategory} onRemove={onRemove} />
      {subCategories.length > 0 ? (
        <ul className="subcategories-list__primary">
          {subCategories.length !== 0 &&
            subCategories.map(item => {
              return (
                <SubCategories
                  key={item.id}
                  el={item}
                  onRemove={removeSubCategory}
                />
              );
            })}
        </ul>
      ) : (
        isDialogShow && (
          <DialogWindow
            addSubCategoty={() => addCategory(subCategories, setSubCategories)}
            closeModal={() => setIsDialogShow(false)}
          />
        )
      )}
    </li>
  );
};

export default Category;
