import {
  useEffect,
  useRef,
} from "react";

type EffectOnce = () => void | Promise<void>;

export default function useEffectOnce(effectOnce: EffectOnce) {
  const ranRef = useRef(false);

  useEffect(() => {
    if (!ranRef.current) {
      ranRef.current = true;

      void effectOnce();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}
