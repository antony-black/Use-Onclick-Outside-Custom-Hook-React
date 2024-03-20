import { useRef, useState } from "react";
import useOnclickOutside from "./customHooks/useOnclickOutside";
import Button from "./components/Button";
import Info from "./components/Info";
import "./index.scss";

export default function UseOnclickOutsideTest() {
  const [isVisible, setVisibility] = useState(false);
  const refModal = useRef();
  useOnclickOutside(refModal, () => setVisibility(false));

  return (
    <div className="main-container">
      {isVisible ? (
        <Info refModal={refModal} />
      ) : (
        <Button setVisibility={setVisibility}> Click to See</Button>
      )}
    </div>
  );
}
