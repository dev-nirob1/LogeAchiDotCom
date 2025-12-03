const InputField = ({ placeholder, name = "text", value, onChange }) => {
  return (
    <input
    className="bg-white"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
