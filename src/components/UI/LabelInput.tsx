type LabelInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password' | 'email' | 'number';
  id: string;
  label: string;
  error?: string;
};

export default function LabelInput({
  value,
  onChange,
  type = 'text',
  id,
  label,
  error,
}: LabelInputProps) {
  return (
    <>
      <label htmlFor={id} className='form-label w-100'>
        {label}
        <input
          placeholder={label}
          value={value}
          onChange={onChange}
          type={type}
          className='form-control'
          id={id}
        />
      </label>
      {error && <p className='text-danger'>{error}</p>}
    </>
  );
}
