import { Link } from "react-router-dom";
import "./Header/Header.css";
const NavigationSpanComp = ({ className, name, page }) => {
  return (
    <span className={className}>
      <Link to={page} style={{ textDecoration: "none", color: "white" }}>
        {name}
      </Link>
    </span>
  );
};
export default NavigationSpanComp;
