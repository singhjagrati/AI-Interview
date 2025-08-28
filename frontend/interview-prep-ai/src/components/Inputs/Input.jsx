import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ value, onChange, label, placeholder, type = "text", name }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="mb-4">
      {/* Label */}
      {label && (
        <label className="block text-sm font-medium text-slate-700 mb-1">
          {label}
        </label>
      )}

      {/* Input wrapper */}
      <div className="flex items-center border border-slate-300 rounded-lg px-3 py-2 bg-white focus-within:border-primary transition">
        <input
          type={type === "password" ? (showPassword ? "text" : "password") : type}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-slate-700 placeholder-slate-400"
        />

        {/* Password toggle */}
        {type === "password" && (
          <span className="ml-2 cursor-pointer">
            {showPassword ? (
              <FaRegEye
                size={20}
                className="text-primary"
                onClick={toggleShowPassword}
              />
            ) : (
              <FaRegEyeSlash
                size={20}
                className="text-slate-400"
                onClick={toggleShowPassword}
              />
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;
