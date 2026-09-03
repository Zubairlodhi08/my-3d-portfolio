import { useLoading } from "../context/LoadingContext";
import "./styles/LoadingScreen.css";

export default function LoadingScreen() {
  const { progress, isLoading } = useLoading();

  return (
    <div
      className={`loading-screen ${isLoading ? "" : "is-hidden"}`}
      aria-hidden={!isLoading}
    >
      <span className="loading-count">{Math.round(progress)}%</span>
      <div className="loading-bar">
        <div className="loading-bar-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
