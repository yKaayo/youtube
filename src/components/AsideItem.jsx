/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AsideItem(props) {
  return (
    <a href="#" className="flex flex-col items-center gap-2">
      <FontAwesomeIcon className="text-2xl" icon={props.icon} />
      <h2 className="text-black">{props.title}</h2>
    </a>
  );
}
