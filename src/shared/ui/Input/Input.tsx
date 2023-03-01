import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cn from './Input.module.scss';
import { InputProps } from './Input.types';

export const Input: FC<InputProps> = (props) => {
  const {
    className, //
    value,
    onChange,
    type = 'text',
    placeholder,
    customPlaceholder,
    isFormOpen,
    autofocus,
    ...otherProps
  } = props;
  const mods: Record<string, boolean> = {};

  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [caretPos, setCaretPos] = useState(0);

  useEffect(() => {
    if (isFormOpen && autofocus) {
      setIsFocused(true);
      inputRef.current?.focus();
    }
  }, [autofocus, isFormOpen]);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onSelect = (evt: any) => {
    setCaretPos(evt.target.selectionStart || 0);
  };

  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    onChange(evt.target.value);
    setCaretPos(evt.target.value.length);
  };

  return (
    <div className={classNames(cn.input__wrapper, mods, [className])}>
      {customPlaceholder && <div className={cn.placeholder}>{`${customPlaceholder}:`}</div>}
      <div className={cn.caret__wrapper}>
        <input
          ref={inputRef}
          className={cn.input}
          type={type}
          value={value}
          onChange={onInputChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          placeholder={placeholder}
          {...otherProps}
        />
        {isFocused && <span className={cn.caret} style={{ left: `${caretPos * 8}px` }} />}
      </div>
    </div>
  );
};
