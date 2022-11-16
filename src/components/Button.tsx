import classNames from "classnames";

function Button({
  children,
  disabled,
  handleClick,
  status,
  shouldShowStatus,
}: {
  children: string;
  disabled: boolean;
  handleClick: () => void;
  status: "correct" | "wrong";
  shouldShowStatus: boolean;
}) {
  const classesByStatus = {
    correct: "bg-green-400 text-white border-green-500",
    wrong: "bg-red-400 text-white border-red-500",
  };

  return (
    <button
      className={classNames(
        "shadow-md rounded border-slate-400  border-2 grow text-2xl text-slate-500 px-6 py-3",
        !shouldShowStatus && "hover:border-slate-600 hover:text-slate-700",
        shouldShowStatus && classesByStatus[status]
      )}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
