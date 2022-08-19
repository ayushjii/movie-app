import Image from "next/image";

const Show = (props) => {
  let handleShowClick = (e) => {
    props.showClicked(e.target.dataset.id);
  };

  return (
    <div
      className="animation shadow-md mt-5 card bg-white rounded-xl relative cursor-pointer flex flex-col overflow-hidden hover:z-10"
      id={props.id}
      data-id={props.id}
      onClick={handleShowClick}
    >
      <Image
        className="duration-300 ease-linear transition-all hover:scale-125"
        src={props.imgLink}
        data-id={props.id}
        alt=""
        width={200}
        height={400}
      />
      <h1>{props.name}</h1>
    </div>
  );
};

export default Show;
