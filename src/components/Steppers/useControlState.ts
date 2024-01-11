import { useCallback, useLayoutEffect, useRef, useState } from "react";

export interface UseControllableStateProps<T> {
  /**
   * The value to used in controlled mode
   */
  value?: T;
  /**
   * The initial value to be used, in uncontrolled mode
   */
  defaultValue?: T | (() => T);
  /**
   * The callback fired when the value changes
   */
  onChange?: (value: T) => void;
}

/**
 * React hook for using controlling component state.
 * @param props
 */
export function useControlState<T>(props: UseControllableStateProps<T>) {
  const { value: valueProp, defaultValue, onChange } = props;

  const [valueState, setValue] = useState(defaultValue as T);

  const isControlled = valueProp !== undefined;
  const value = isControlled ? (valueProp as T) : valueState;

  const updateValue = useEffectEvent((next: React.SetStateAction<T>) => {
    const nextValue = runIfFn(next, value);

    if (!isControlled) {
      setValue(nextValue);
    }

    onChange?.(nextValue);
  });

  return [value, updateValue] as [T, React.Dispatch<React.SetStateAction<T>>];
}

function runIfFn<T, U>(
  valueOrFn: T | ((...fnArgs: U[]) => T),
  ...args: U[]
): T {
  return isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;
}

const isFunction = <T extends Function = Function>(value: any): value is T =>
  typeof value === "function";

export type Callback = (...args: never) => unknown;

export function useEffectEvent<T extends Callback>(fn: T): T {
  const ref = useRef<T | null>(null);
  useLayoutEffect(() => {
    ref.current = fn;
  }, [fn]);
  return useCallback<T>(
    ((...args) => {
      const f = ref.current;
      return f?.(...args);
    }) as T,
    []
  );
}
