import { useEffect, useRef, useState } from "react";

function useDebounce(text: string, delay: number, callback?: Function) {
  const [debouncedValue, setDebouncedValue] = useState(text);
  const timerRef = useRef<any>(null);

  useEffect(() => {
    // if the text is empty and there is no timer then don't initialize
    if (timerRef.current == null && text == "") {
      return;
    }

    timerRef.current = setTimeout(() => {
      setDebouncedValue(text);

      // if there is a callback then call it
      if (callback) {
        callback(text);
      }
    }, delay);

    // clean up
    return () => {
      clearTimeout(timerRef.current);
    };
  }, [text, delay]);

  return debouncedValue;
}

export default useDebounce;
