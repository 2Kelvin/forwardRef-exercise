const SearchInput = React.forwardRef((props, ref) => {
  return (
    <input
      className="border border-slate-400 rounded-xl p-3 mt-4"
      placeholder="Looking for something?"
      {...props}
      ref={ref}
    />
  );
});

function SearchButton({ onclick }) {
  return (
    <button
      className="rounded-xl bg-blue-400 font-semibold p-2 w-4/5 active:bg-blue-600"
      onClick={onclick}
    >
      Search
    </button>
  );
}

function App() {
  const mySearchRef = React.useRef(null);

  function handleBtnFocusClick() {
    mySearchRef.current.focus();
  }

  return (
    <section className="h-screen grid place-content-center">
      <nav className="flex justify-center">
        <SearchButton onclick={handleBtnFocusClick} />
      </nav>
      <SearchInput ref={mySearchRef} />
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
