import { FC, ReactNode } from 'react';

type DragableProps = {
  children: ReactNode;
};

const DragableBox: FC<DragableProps> = ({ children }) => {
  return <div className='box'>{children}</div>;
};

export default DragableBox;
