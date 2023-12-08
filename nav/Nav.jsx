import styles from "./Nav.module.css";
import logo from "../../assets/logo.svg";
import PetButton from "../petButton/petButton";



const Nav = () => {
  return (
        <div className={styles.bar}>
          <div className={styles.logo}>
            <img src={logo} alt="logo do Little Pet" width={""} />
          </div>
          <input type="text" placeholder="Buscar" />
         <PetButton />
        </div>
      );
    };
  

export default Nav