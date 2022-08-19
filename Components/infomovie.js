import Image from "next/image";
import { GiCrossMark } from "react-icons/gi";
import { FaExternalLinkAlt } from "react-icons/fa";

const Showexpand = (props) => {
  return (
    <div className="z-50 fixed w-full bar h-full max-h-screen overflow-auto p-3 backdrop-blur">
      <div className="relative flex justify-center min-h-ad overflow-hidden my-3 mx-auto w-full max-w-3xl bg-white rounded-3xl shadow-xl sm:flex-col ">
        <i
          className="cursor-pointer py-4 px-5 m-auto top-4 right-4 absolute z-10 hover:text-red-500"
          onClick={props.closePop}
        >
          <GiCrossMark size={28} />
        </i>
        <div className="relative flex">
          <span className="absolute overflow-hidden -top-1/4 -bottom-1/4 -left-1/4 w-full h-150 rotate-6 sm:left-auto sm:w-150 sm:-top-3/4">
            <Image
              src={props.imgLink}
              className="backdrop-blur-sm object-cover w-full h-full scale-150"
              alt={props.name}
              width={200}
              height={400}
            />
          </span>
          <span className="relative left-14 self-center overflow-hidden w-36 bg-white rounded shadow-lg z-10 sm:left-auto sm:mt-20 sm:ml-6  ">
            <Image
              className="sm:w-36 sm:align-middle"
              src={props.imgLink}
              alt={props.name}
              width={200}
              height={400}
            />
          </span>
        </div>

        <div className="flex-1 p-16 sm:p-6 ">
          <h2 className="text-4xl m-0 mb-3 font-bold text-red-400 font-mono">
            {props.name}
          </h2>
          <ul className="m-0 p-0 text-xs text-blue-700 list-none mb-3">
            <li className="inline-block mr-40 text-base">{props.country}</li>
            <li className="inline-block mr-40 text-base">{props.lang}</li>
            <li className="inline-block mr-40 text-base">{props.genres}</li>
          </ul>
          <div
            className="text-base mb-3"
            dangerouslySetInnerHTML={{ __html: props.plot }}
          ></div>

          <div>
            <p className="m-0 text-base mb-1 font-semibold">
              <b className="text-orange-600">Network</b>: {props.network}
            </p>
            <p className="m-0 text-base mb-1 font-semibold">
              <b className="text-orange-600">Runtime</b>:{" "}
              {props.runtime || "N/A "}mins
            </p>
            <p className="m-0 text-base mb-1 font-semibold">
              <b className="text-orange-600">Rating</b>: {props.rating}
            </p>
            <p className="m-0 text-base mb-1 font-semibold">
              <b className="text-orange-600">Status</b>: {props.status}
            </p>
            <a
              href={props.link}
              className="cursor-pointer py-4 px-5 m-auto bottom-4 right-4 absolute z-10 hover:text-red-500"
              target="_blank"
              rel="noreferrer"
            >
              <FaExternalLinkAlt size={20} className="ml-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showexpand;
