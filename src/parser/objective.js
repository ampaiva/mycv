import { TbTargetArrow } from "react-icons/tb";
import Session from './session'

function Objective({ objective }) {
    return (
        <Session icon={TbTargetArrow}  text="Objective" contents={objective}/>
    );
}

export default Objective;
