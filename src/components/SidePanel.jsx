import { BsCalendar2Date } from "react-icons/bs";
import { MdLightbulb } from "react-icons/md";
import { SiGoogletasks } from "react-icons/si";
import { RiContactsFill } from "react-icons/ri";
import { FaPlus, FaChevronRight } from "react-icons/fa6";
import { Panel, IconContainer } from "./SidePanelStyled.jsx";
import CalenderIcon from "../assets/icon/Calender.jsx";
import Keep from "../assets/icon/Keep.jsx";
import ContactIcon from "../assets/icon/Contacts.jsx";

function SidePanel() {
  return (
    <Panel>
      <IconContainer>
        <CalenderIcon />
        <Keep />
        <SiGoogletasks style={{ color: "#2683fc" }} size={20} />
        <ContactIcon />
      </IconContainer>
      <FaPlus />
    </Panel>
  );
}

export default SidePanel;
