import AsideItem from "../components/AsideItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPlus, faFolderClosed, faVideo } from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";

export default function Aside() {
  // const [active, setActive] = useState();

  return (
    <aside className="absolute w-dvw py-1 bottom-0 bg-white">
      <div className="flex justify-evenly items-start container mx-auto">
        <AsideItem icon={faHouse} title="Home" />
        <AsideItem icon={faVideo} title="Shorts" />

        <a href="#" className="flex flex-col items-center gap-2">
          <div className="flex justify-center items-center size-12 rounded-full bg-gray-300">
            <FontAwesomeIcon className="text-2xl" icon={faPlus} />
          </div>
        </a>

        <AsideItem icon={faFolderClosed} title="Inscrições" />
        
        <a href="#" className="flex flex-col items-center gap-1">
          <div className="flex justify-center items-center size-8 rounded-full bg-gray-300"></div>
          <h2 className="text-black">Você</h2>
        </a>
      </div>
    </aside>
  );
}
