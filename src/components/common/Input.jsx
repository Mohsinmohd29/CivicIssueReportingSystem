function Input({
    type = "text",
    placeholder,
    value,
    onChange,
    name,
  }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    );
  }
  
  export default Input;