export default function Button({ children, setVisibility }) {
  return (
    <button className="enable-visibility" onClick={() => setVisibility(true)}>
      {children}
    </button>
  );
}
