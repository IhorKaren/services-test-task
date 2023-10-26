import { FC, ChangeEvent } from 'react';

const options = [0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.25, 1.5];

type HeaderProps = {
  scale: number;
  decrement: () => void;
  increment: () => void;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const Header: FC<HeaderProps> = ({ scale, decrement, increment, onChange }) => {
  return (
    <header className="header">
      <h1 className="main-title">
        Services <span>0</span>
      </h1>
      <div>
        <button type="button">Centered</button>

        <div>
          <button type="button" onClick={decrement}>
            Dec
          </button>
          <select name="" id="" value={scale} onChange={e => onChange(e)}>
            {options.map(el => {
              return (
                <option key={el} value={el}>
                  {(el * 100).toFixed(0) + '%'}
                </option>
              );
            })}
          </select>
          <button type="button" onClick={increment}>
            Inc
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
