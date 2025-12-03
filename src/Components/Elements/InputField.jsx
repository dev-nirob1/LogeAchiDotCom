const InputField = ({ placeholder, name = "text", value, onChange }) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
