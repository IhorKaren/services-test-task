import { CategoryItem } from 'components/App.types';

type CategoryItemCallback = (categoryItems: CategoryItem[]) => void;

const addCategory = (
  array: CategoryItem[],
  callback: CategoryItemCallback
) => {
  const checkEmptyTitle = array.some(el => el.title === '');

  if (checkEmptyTitle) {
    return;
  }

  const newCategory: CategoryItem = {
    id: Math.random() * 1000000,
    title: '',
  };

  callback([...array, newCategory]);
};

export default addCategory;
