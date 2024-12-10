
const Button = ({ children }: any) => {
    return (
        <button className="bg-red-700 w-fit p-3 rounded-md text-white" >
            <div>
                {children}
            </div>
        </button>
    )
}

export default Button;