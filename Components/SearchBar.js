import { FcSearch } from "react-icons/fc";

const Search = (props) => {
  let sendValue = (e) => {
    props.getInputValue(e.target.value);
  };

  const handleSubmit = () => {
    props.getSubmit();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      props.sendEnter();
      console.log("Enter");
    }
  };
  return (
    <div className="h-24 grid place-content-center">
      <div className="flex transition bg">
        <input
          className="rounded-l-md appearance-none outline-0  h-14 bg-white py-0 px-3 min-w-ad focus:shadow-lg"
          type="text"
          onChange={sendValue}
          onKeyDown={handleKeyDown}
          placeholder="Enter Show Here"
        />
        <button
          className="rounded-r-md appearance-none outline-0  h-14 bg-white py-0 px-3 cursor-pointer"
          onClick={handleSubmit}
        >
          <FcSearch size={30} />
        </button>
      </div>
    </div>
  );
};

export default Search;
