import { FC, useEffect } from 'react';

type DialogWindowProps = {
  addSubCategoty: () => void;
  closeModal: () => void;
};

const DialogWindow: FC<DialogWindowProps> = ({
  addSubCategoty,
  closeModal,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const addCategory = () => {
    addSubCategoty();
    closeModal();
  };

  return (
    <div className="modal">
      <b>What do you want to create?</b>
      <div className="modal-thumb">
        <button className="modal-button" type="button" onClick={addCategory}>
          Category
        </button>
        <button className="modal-button" disabled>
          Service
        </button>
      </div>
    </div>
  );
};

export default DialogWindow;
