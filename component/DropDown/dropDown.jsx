import { useState, useEffect, useRef } from "react";

export default function DynamicDropdown({
  value,
  setValue,
  placeholder = "",
  options = [],
  isDropdown = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(filter.toLowerCase())
  );

  const handleSelect = (selectedValue) => {
    setValue(selectedValue);
    setIsOpen(false);
    setFilter("");
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className="flex justify-center items-center relative">
        <input
          type={isDropdown ? "text" : "email"}
          value={isOpen ? filter : value}
          onChange={(e) => {
            if (isDropdown) {
              setFilter(e.target.value);
              setIsOpen(true);
            } else {
              setValue(e.target.value);
            }
          }}
          onClick={() => isDropdown && setIsOpen(!isOpen)}
          placeholder={placeholder}
          className="w-full px-4 py-2 bg-white rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 placeholder-gray-400 text-gray-700 pr-10" // Added pr-10 for icon spacing
        />

        {isDropdown && (
          <div className="absolute right-3 pointer-events-none">
            <svg
              className={`w-5 h-5 text-[#000000] transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        )}
      </div>

      {isDropdown && isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white rounded-2xl shadow-lg border border-gray-200 max-h-50 overflow-auto">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No options found</div>
          )}
        </div>
      )}
    </div>
  );
}
