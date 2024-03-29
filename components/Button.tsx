"use client";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
}) => {
  return (
    <button
      className={`relative disabled:opacity-70 disabled:cursor-not-allowed tracking-widest rounded-lg  transition w-full ${
        outline
          ? "bg-white border-black text-black hover:bg-black hover:text-white "
          : "bg-rose-500  text-white hover:bg-rose-500 hover:scale-[99%] hover:border-rose-600 hover:text-white"
      } ${
        small
          ? "py-1 text-sm font-light border "
          : "py-3 text-md font-semibold border-2"
      } `}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default Button;
