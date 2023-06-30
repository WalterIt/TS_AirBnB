"use client";
import { useCallback } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface CounterProps {
  title: string;
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
}

const Counter: React.FC<CounterProps> = ({
  title,
  subtitle,
  value,
  onChange,
}) => {
  const onAdd = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  const onReduce = useCallback(() => {
    if (value === 0) return;
    onChange(value - 1);
  }, [onChange, value]);

  return (
    <div className="flex flex-row items-center justify-between ">
      <div className="flex flex-col">
        <div className="font-medium">{title}</div>
        <div className="font-light text-gray-700">{subtitle}</div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div
          onClick={onReduce}
          className="w-8 h-8 rounded-full border border-neutral-400 flex items-center justify-center text-neutral-700 cursor-pointer hover:opacity-80 hover:bg-black hover:text-white transition "
        >
          <AiOutlineMinus />
        </div>
        <div className="font-light text-xl text-neutral-700">{value}</div>
        <div
          onClick={onAdd}
          className="w-8 h-8 rounded-full border border-neutral-400 flex items-center justify-center text-neutral-700 cursor-pointer hover:opacity-80 hover:bg-black hover:text-white transition "
        >
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  );
};

export default Counter;
