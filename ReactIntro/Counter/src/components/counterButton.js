export default function CounterButton({handleClick, btnValue, disabled }) {
  return (
    <button
      disabled={disabled}
      onClick={handleClick}
    >
      {btnValue}
    </button>
  );
}
