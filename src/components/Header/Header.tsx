import { FC, ChangeEvent } from 'react';
import { options } from 'components/App';

type HeaderProps = {
  scale: number;
  centred: () => void;
  decrement: () => void;
  increment: () => void;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const Header: FC<HeaderProps> = ({
  scale,
  centred,
  decrement,
  increment,
  onChange,
}) => {
  return (
    <header className="header">
      <h1 className="main-title">
        Services <span>0</span>
      </h1>
      <div>
        <button type="button" onClick={centred}>
          Centered
        </button>

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
