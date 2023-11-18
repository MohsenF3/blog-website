const Input = ({ label, type, id, value, onChange, placeholder }) => {
  return (
    <div className="mb-5">
      <label className="block mb-3 font-medium" htmlFor={id}>
        {label} :
      </label>
      <input
        type={type}
        id={id}
        className="border focus:border-blue-500 border-slate-200 outline-none text-gray-500 md:w-2/3 w-full p-3 rounded-md"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
