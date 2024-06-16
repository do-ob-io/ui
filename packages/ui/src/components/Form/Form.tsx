'use client';

import { nop } from '@do-ob/core';
import { useCallback, useRef, PropsWithChildren } from 'react';

/**
 * Form properties
 */
export interface FormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, 'action'> {
  /**
   * The form action.
   */
  action?: (formData: FormData) => void;

  /**
   * If the form should submit on change
   */
  changeSubmit?: boolean;

  /**
   * Change defer time
   */
  changeDefer?: number;
}

/**
 * A form that mimics React 19 form behavior.
 */
export function Form({
  action = nop,
  changeSubmit = false,
  changeDefer = 250,
  onChange = nop,
  onSubmit = nop,
  children,
}: PropsWithChildren<FormProps>) {

  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLFormElement>) => {
    onChange(e);

    if (!changeSubmit) {
      return;
    }
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    const currentTarget = e.currentTarget;
    debounceTimeout.current = setTimeout(() => {
      currentTarget.requestSubmit();
    }, changeDefer);
  }, [ changeDefer, onChange ]);

  return (
    <form
      className="flex w-full flex-col gap-2"
      onChange={changeSubmit ? handleChange : onChange}
      onSubmit={(e) => {
        e.preventDefault();
        if (debounceTimeout.current) {
          clearTimeout(debounceTimeout.current);
        }
        const formData = new FormData(e.currentTarget);
        action(formData);
        onSubmit(e);
      }}
    >
      {children}
    </form>);
}
