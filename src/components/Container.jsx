function Container ({children, className}) {
    return (
        <div className={`max-w-[80rem] mx-auto md:px-10 lg:px-15 ${className || ""}`}>{children}</div>
    );
};

export default Container;