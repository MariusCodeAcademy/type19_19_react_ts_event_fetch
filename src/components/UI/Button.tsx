type ButtonProps = {
  children: string;
  onClick?: () => void;
  submit?: boolean;
};
//

export default function Button({ children, onClick, submit }: ButtonProps) {
  return (
    <button type={submit ? 'submit' : 'button'} onClick={onClick} className='btn btn-primary'>
      {children}
    </button>
  );
}
