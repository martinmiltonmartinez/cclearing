interface FormInputProps {
 id: string;
 label: string;
 type?: string;
 required?: boolean;
 placeholder?: string;
 value: string;
 onChange: (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
 ) => void;
 multiline?: boolean;
 rows?: number;
}

const FormInput: React.FC<FormInputProps> = ({
 id,
 label,
 type = "text",
 required = false,
 value,
 onChange,
 multiline = false,
 rows = 4,
}) => {
 const inputClasses = `
    w-full px-4 py-3 rounded-lg
    bg-[#1A1C26] border border-gray-700
    focus:outline-none focus:border-gray-600
    text-white text-base
    placeholder-gray-500
  `;

 return (
  <div className="mb-4">
   <label
    htmlFor={id}
    className="block mb-2 text-[15px] font-medium text-gray-300"
   >
    {label}
   </label>
   {multiline ? (
    <textarea
     id={id}
     className={inputClasses}
     required={required}
     value={value}
     onChange={onChange}
     rows={rows}
    />
   ) : (
    <input
     id={id}
     type={type}
     className={inputClasses}
     required={required}
     value={value}
     onChange={onChange}
    />
   )}
  </div>
 );
};

export default FormInput;
