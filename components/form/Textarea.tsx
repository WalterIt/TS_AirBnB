"use client";
import { BiDollar } from "react-icons/bi";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface TextareaProps {
  id: string;
  label: string;
  type?: HTMLTextAreaElement["type"];
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Textarea: React.FC<TextareaProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute top-5 left-2"
        />
      )}

      <textarea
        id={id}
        cols={30}
        rows={10}
        {...register(id, { required })}
        placeholder=" "
        className={`peer w-full p-2 pt-6 font-[500] bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ${
          formatPrice ? "pl-9" : "pl-4"
        } 
        ${
          errors[id]
            ? "border-rose-500 focus:border-rose-500"
            : "border-neutral-300 focus-within:border-black"
        } `}
      ></textarea>
      <label
        className={`absolute text-md duration-150 transform -translate-y-3 top-4 z-10 origin-[0] ${
          formatPrice ? "left-9" : "left-4"
        } peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  
        peer-focus:scale-75 peer-focus:-translate-y-4 ${
          errors[id] ? "text-rose-500" : "text-zinc-400"
        } `}
      >
        {label}
      </label>
    </div>
  );
};

export default Textarea;
