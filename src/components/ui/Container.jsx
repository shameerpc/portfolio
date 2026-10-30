export function Container({
  children,
  className = '',
  size = 'lg',
  as: Component = 'div',
  ...props
}) {
  const sizeClasses = {
    sm: 'max-w-4xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <Component
      className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${sizeClasses[size] || sizeClasses.lg} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Container;
