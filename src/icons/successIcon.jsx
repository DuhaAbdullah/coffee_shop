function SuccessIcon({ size, color }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "30"}
      height={size || "30"}
      viewBox="0 0 12 12"
      fill={color || "#000"}
    >
      <path
        fillRule="evenodd"
        d="M6 12A6 6 0 106 0a6 6 0 000 12zm2.576-7.02a.75.75 0 00-1.152-.96L5.45 6.389l-.92-.92A.75.75 0 003.47 6.53l1.5 1.5a.75.75 0 001.106-.05l2.5-3z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default SuccessIcon;
