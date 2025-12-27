// Loading.tsx
type LoadingProps = {
  fadeOut?: boolean;
};

export function Loading({ fadeOut }: LoadingProps) {
  return (
    <div className={`loading-overlay ${fadeOut ? "loading-fade-out" : ""}`}>
      <h1>Loading GitHub Profile....</h1>
      <span className="muted">Please remain seated...</span>
    </div>
  );
}
