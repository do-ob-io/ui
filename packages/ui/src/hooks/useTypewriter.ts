'use client';

import React from 'react';

type State = {
  speed: number;
  text: string;
  count: number;
};

type Action =
  | { type: 'DELAY'; payload: number }
  | { type: 'TYPE'; payload: string; speed: number }
  | { type: 'DELETE'; payload: string; speed: number }
  | { type: 'COUNT' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'TYPE':
      return {
        ...state,
        speed: action.speed,
        text: action.payload?.substring(0, state.text.length + 1)
      };
    case 'DELAY':
      return {
        ...state,
        speed: action.payload
      };
    case 'DELETE':
      return {
        ...state,
        speed: action.speed,
        text: action.payload?.substring(0, state.text.length - 1)
      };
    case 'COUNT':
      return {
        ...state,
        count: state.count + 1
      };
    default:
      return state;
  }
}

export type TypewriterProps = {
  /** Callback Function that is triggered when loops are completed. available if loop is > `0` */
  onLoopDone?: () => void;
  /** Callback Function that is triggered while typing with `typed` words count passed */
  onType?: (count: number) => void;
  /** Callback Function that is triggered while deleting */
  onDelete?: () => void;
  /** Callback Function that is triggered on typing delay */
  onDelay?: () => void;
  /** Array of strings holding the words */
  words: string[];
  /** Control how many times to run. `0` to run infinitely */
  loop?: number;
  /** Character typing speed in Milliseconds */
  typeSpeed?: number;
  /** Character deleting speed in Milliseconds */
  deleteSpeed?: number;
  /** Delay time between the words in Milliseconds */
  wordDelay?: number;
};

export type TypewriterHelper = {
  /** `true` if currently typing */
  isType: boolean;
  /** `true` if on delay */
  isDelay: boolean;
  /** `true` if currently deleting */
  isDelete: boolean;
  /** `true` if all loops are done */
  isDone: boolean;
};

export const useTypewriter = ({
  words = [ 'Hello World!', 'This is', 'a simple Typewriter' ],
  loop = 1,
  typeSpeed = 80,
  deleteSpeed = 50,
  wordDelay = 1500,
  onLoopDone,
  onType,
  onDelete,
  onDelay
}: TypewriterProps): [string, TypewriterHelper] => {
  const [ { speed, text, count }, dispatch ] = React.useReducer(reducer, {
    speed: typeSpeed,
    text: '',
    count: 0
  });

  // Refs
  const loops = React.useRef(0);
  const isDone = React.useRef(false);
  const isDelete = React.useRef(false);
  const isType = React.useRef(false);
  const isDelay = React.useRef(false);

  const handleTyping = React.useCallback(() => {
    const index = count % words.length;
    const fullWord = words[index];

    if (!isDelete.current) {
      dispatch({ type: 'TYPE', payload: fullWord, speed: typeSpeed });
      isType.current = true;

      if (text === fullWord) {
        dispatch({ type: 'DELAY', payload: wordDelay });
        isType.current = false;
        isDelay.current = true;

        setTimeout(() => {
          isDelay.current = false;
          isDelete.current = true;
        }, wordDelay);

        if (loop && loop > 0) {
          loops.current += 1;
          if (loops.current / words.length === loop) {
            isDelay.current = false;
            isDone.current = true;
          }
        }
      }
    } else {
      dispatch({ type: 'DELETE', payload: fullWord, speed: deleteSpeed });
      if (text === '') {
        isDelete.current = false;
        dispatch({ type: 'COUNT' });
      }
    }

    if (isType.current) {
      if (onType) onType(loops.current);
    }

    if (isDelete.current) {
      if (onDelete) onDelete();
    }

    if (isDelay.current) {
      if (onDelay) onDelay();
    }
  }, [
    count,
    wordDelay,
    deleteSpeed,
    loop,
    typeSpeed,
    words,
    text,
    onType,
    onDelete,
    onDelay
  ]);

  React.useEffect(() => {
    const typing = setTimeout(handleTyping, speed);

    if (isDone.current) clearTimeout(typing);

    return () => clearTimeout(typing);
  }, [ handleTyping, speed ]);

  React.useEffect(() => {
    if (!onLoopDone) return;

    if (isDone.current) {
      onLoopDone();
    }
  }, [ onLoopDone ]);

  return [
    text,
    {
      isType: isType.current,
      isDelay: isDelay.current,
      isDelete: isDelete.current,
      isDone: isDone.current
    }
  ];
};
