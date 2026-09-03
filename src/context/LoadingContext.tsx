import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface LoadingContextValue {
  progress: number;
  isLoading: boolean;
}

const LoadingContext = createContext<LoadingContextValue>({
  progress: 0,
  isLoading: true,
});

export const useLoading = () => useContext(LoadingContext);

/**
 * Drives a short, deterministic loading sequence on first paint so the 3D
 * scene and fonts have a moment to settle before anything is revealed.
 * Swap the interval below for real asset-loading progress (e.g. from
 * useProgress() in @react-three/drei) once you add heavier 3D assets.
 */
export function LoadingProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const start = performance.now();
    const duration = 1400;
    let frame: number;

    const tick = (now: number) => {
      const pct = Math.min(100, ((now - start) / duration) * 100);
      setProgress(pct);
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setIsLoading(false), 250);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <LoadingContext.Provider value={{ progress, isLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
