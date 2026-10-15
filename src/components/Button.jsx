function Button({ text, type = 'button', className = '' }) {
  return (
    <button
      type={type}
      className={`w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
    >
      {text}
    </button>
  )
}

export default Button