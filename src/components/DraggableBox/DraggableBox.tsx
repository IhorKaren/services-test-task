import { FC, ReactNode, useEffect, useRef } from 'react';

type DragableProps = {
  isCentered: boolean;
  centeredDisable: () => void;
  children: ReactNode;
};

const DraggableBox: FC<DragableProps> = ({
  isCentered,
  centeredDisable,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  const isClicked = useRef<boolean>(false);

  const coords = useRef<{
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
  }>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 10,
  });

  useEffect(() => {
    if (!boxRef.current || !containerRef.current) {
      return;
    }

    const box = boxRef.current;
    const container = containerRef.current;

    coords.current.lastX =
      box.getBoundingClientRect().left + box.clientWidth / 2;

    if (isCentered) {
      coords.current.lastY = container.clientHeight / 3.5;
      coords.current.lastX = container.clientWidth / 2;
    }

    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
      centeredDisable();
    };

    const onMouseUp = (e: MouseEvent) => {
      isClicked.current = false;
      coords.current.lastX = box.offsetLeft;
      coords.current.lastY = box.offsetTop;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) {
        return;
      }

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      box.style.top = `${nextY}px`;
      box.style.left = `${nextX}px`;
    };

    box.addEventListener('mousedown', onMouseDown);
    box.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseUp);

    return () => {
      box.removeEventListener('mousedown', onMouseDown);
      box.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseUp);
    };
  });

  return (
    <div ref={containerRef} className="container">
      <div
        ref={boxRef}
        className="box"
        style={{
          top: isCentered ? `30%` : '',
          left: isCentered ? '50%' : '',
          transform: isCentered ? 'translateX(-50%)' : '',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default DraggableBox;
