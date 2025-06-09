import React from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Input = ({
  value,
  onChange,
  placeHolder,
  label,
  type,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeHolder: string;
  label: string;
  type: string;
}) => {
  return (
    <div>
      <label className="text-[13px] text-slate-800">{label}</label>

      <div className="input-box">
        <input
          type={
            type == "password" ? (showPassword ? "text" : "password") : type
          }
          className="w-full bg-transparent outline-none"
          placeholder={placeHolder}
          value={value}
          onChange={(e) => onChange(e)}
        />
        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={22}
                className="text-primary cursor-pointer"
                onClick={() => toggleShowPassword()}
              />
            ) : (
              <FaRegEyeSlash
                size={22}
                className="text-slate-400 cursor-pointer"
                onClick={() => toggleShowPassword()}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
