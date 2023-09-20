function Button({ counter, incrementCounter }) {
  return (
    <button
      onClick={incrementCounter}
      className="border-2 border-slate-500 rounded-md bg-slate-300 hover:bg-slate-100 transition-all p-3 uppercase font-bold"
    >
      count is {counter}
    </button>
  )
}

export default Button
