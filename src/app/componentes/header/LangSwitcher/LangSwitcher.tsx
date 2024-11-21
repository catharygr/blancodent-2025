// import styles from "./LangSwitcher.module.scss";
import LangSwitcherSelect from "@/app/componentes/header/LangSwitcherSelect";

export default function LangSwitcher() {
  return (
    <div>
      <LangSwitcherSelect>
        <option value="es">Español</option>
        <option value="en">English</option>
      </LangSwitcherSelect>
    </div>
  );
}
