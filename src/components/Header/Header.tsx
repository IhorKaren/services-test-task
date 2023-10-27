import { FC, ChangeEvent } from 'react';
import { options } from 'components/App';

import icon from '../../icons/sprite.svg';

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
        Services <span className='title-accent'>0</span>
      </h1>
      <div className="options-thumb">
        <button className="option-btn" title="Go to center" type="button" onClick={centred}>
          <svg className="header-icon">
            <use href={icon + '#paperplane'} />
          </svg>
        </button>

        <div className="options-zoom-wrap">
          <button className="option-btn" type="button" onClick={decrement}>
            <svg className="header-icon">
              <use href={icon + '#minus'} />
            </svg>
          </button>
          <select
            className="zoom-select"
            name=""
            id=""
            value={scale}
            onChange={e => onChange(e)}
          >
            {options.map(el => {
              return (
                <option key={el} value={el}>
                  {(el * 100).toFixed(0) + '%'}
                </option>
              );
            })}
          </select>
          <button className="option-btn" type="button" onClick={increment}>
            <svg className="header-icon">
              <use href={icon + '#plus'} />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
