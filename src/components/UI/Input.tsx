type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ value, onChange }: InputProps) {
  // const [inputVal, setInputVal] = useState('');

  return (
    <input
      value={value}
      onChange={onChange}
      className='form-control'
      type='text'
      placeholder='enter value'
    />
  );
}
