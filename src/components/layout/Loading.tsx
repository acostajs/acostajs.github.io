// Loading.tsx
type LoadingProps = {
  loading_message: string;
  fadeOut?: boolean;
};

export function Loading({ loading_message, fadeOut }: LoadingProps) {
  return (
    <div className={`loading-overlay ${fadeOut ? "loading-fade-out" : ""}`}>
      <h1>{loading_message}</h1>
      <span className="muted">Please remain seated...</span>
    </div>
  );
}
