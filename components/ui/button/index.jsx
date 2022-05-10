const Button = ({ onClick, children }) => {
  return (
    <button
      className="flex gap-x-4 justify-center items-center font-primary border border-white mt-4 md:mt-8 py-2 px-4 w-full md:w-64 group hover:bg-white transition ease-in-out duration-200 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
