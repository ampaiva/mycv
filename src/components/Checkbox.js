import React from 'react';
import { FaCheck } from "react-icons/fa";
import { RiCheckboxMultipleFill } from "react-icons/ri";
import { GrMultiple } from "react-icons/gr";
import { useGlobalContext } from '../state/GlobalContext';


import './Checkbox.css'

function Checkbox() {
  const { globalContext, setGlobalContext } = useGlobalContext();
  // const [isChecked, setIsChecked] = useState(undefined);

  const setIsChecked = (checked) => {
    const newGlobalContext = { ...globalContext };
    newGlobalContext["isGlobalSelected"] = checked;
    setGlobalContext(newGlobalContext);
  }

  const toggleCheckbox = () => {
    const isChecked = globalContext["isGlobalSelected"];
    if (isChecked === undefined) {
      setIsChecked(true);
    } else if (isChecked === true) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };

  const renderCheckboxState = () => {
    const isChecked = globalContext["isGlobalSelected"];
    if (isChecked === true) {
      return <FaCheck />;
    } else if (isChecked === false) {
      return <GrMultiple />;
    } else {
      return <RiCheckboxMultipleFill/>;
    }
  };

  const getCheckboxState = () => {
    const isChecked = globalContext["isGlobalSelected"];
    if (isChecked === true) {
      return "checked";
    } else if (isChecked === false) {
      return "unchecked";
    } else {
      return "indeterminate";
    }
  };  


  return (
    <div className="checkbox-container" onClick={toggleCheckbox}>
      <div className={`custom-checkbox ${getCheckboxState()}`}>{renderCheckboxState()}</div>
    </div>
  );
};

export default Checkbox;
