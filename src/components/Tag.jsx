import React from 'react';

const Tag = ({
  children,
  onClick,
  type = 'span',
  className = '',
  disabled = false,
  variant = 'primary',
  size = 'md',
  ...props
}) => {
  // Defina as classes base para diferentes variantes e tamanhos
  const baseClasses = 'rounded-full focus:outline-none transition duration-150 ease-in-out';
  const variantClasses = {
    primary: 'text-neutral-900 font-medium border border-neutral-300 bg-neutral-100',
    inactive: 'text-neutral-700 border border-neutral-100',
  };
  const sizeClasses = {
    md: 'px-[12px] py-[3px] text-[12px]',
    lg: 'px-[16px] py-[5px] text-[14px]',
  };

  // Combine as classes
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <span
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
      {...props}
    >
      {children}
    </span>
  );
};

export default Tag;