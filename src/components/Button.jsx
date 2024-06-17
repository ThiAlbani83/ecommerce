import React from 'react';

const Button = ({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  // Defina as classes base para diferentes variantes e tamanhos
  const baseClasses = 'rounded-md focus:outline-none transition duration-150 ease-in-out';
  const variantClasses = {
    primary: 'bg-neutral-900 text-neutral-100 hover:bg-neutral-700',
    outline: 'bg-transparent border border-neutral-900 text-neutral-[800] hover:border-neutral-200',
    white: 'bg-transparent text-neutral-800'
  };
  const sizeClasses = {
    md: 'px-5 py-[7.5px] text-[14px]',
    lg: 'px-6 py-[9.5px] text-[14px]',
  };

  // Combine as classes
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;