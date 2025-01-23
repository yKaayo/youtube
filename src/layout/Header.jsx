import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="bg-white">
      <div className="flex justify-between items-center container mx-auto py-3 border-b-[.4px] border-gray-300">
        <div className="flex items-center gap-1">
          <FontAwesomeIcon className="text-3xl text-red-700" icon={faYoutube} />
          <h1 className="text-2xl font-bold">Youtube</h1>
        </div>

        <div className="flex items-center gap-5">
          <FontAwesomeIcon className="text-black text-2xl" icon={faBell} />
          <FontAwesomeIcon
            className="text-black text-2xl"
            icon={faMagnifyingGlass}
          />
          <div className="h-8 w-8 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </header>
  );
}
