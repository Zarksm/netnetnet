'use client'

interface ButtonProps {
  userId: number;
}

const Button: React.FC<ButtonProps> = ({ userId }) => {
  const handleClick = () => {
    alert(`Button clicked! User ID: ${userId}`);
  };

  return (
    <button onClick={handleClick}>Click here</button>
  );
};

export default Button;
