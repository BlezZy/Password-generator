export function Button({name, className, onClick}) {
    return (
        <button onClick={onClick} type="submit" className={`text-white p-2 rounded-md mt-4 hover:cursor-pointer transition-colors duration-300  ${className}`}>{name}</button>
    )
}