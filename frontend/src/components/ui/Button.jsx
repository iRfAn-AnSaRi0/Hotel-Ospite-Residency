import react from 'react';

const Button = ({
    children,
    variant = "primary",
    size = "md",
    className = "",
    disabled = false,
    ...props
}) => {
    const base = "inline-flex items-center font-sans justify-center rounded-md font-medium transaiton duration-200"

    const variants = {
        primary: "bg-primary text-white hover:opacity-90",
        secondary: "bg-secondary text-black hover:opacity-90",
        outline: "border border-border text-secondary hover:bg-secondary hover:text-black transaition",
    }

    const sizes = {
        sm: "px-3 h-9 text-sm",
        md: "px-4 h-10 text-sm",
        lg: "px-6 h-12 text-base",
    }

    return (
        <button
            className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button