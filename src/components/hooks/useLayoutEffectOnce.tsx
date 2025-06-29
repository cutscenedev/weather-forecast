import {
  useLayoutEffect,
  useRef,
} from "react";

type EffectOnce = () => void | Promise<void>;

export default function useLayoutEffectOnce(effectOnce: EffectOnce) {
  const ranRef = useRef(false);

  useLayoutEffect(() => {
    if (!ranRef.current) {
      ranRef.current = true;

      void effectOnce();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
