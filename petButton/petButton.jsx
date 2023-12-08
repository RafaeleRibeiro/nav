import styles from "./petButton.module.css";
import cart from "../../assets/cart.svg"

const Petbutton = () => {
  return (
    <div className={styles.petButton}>
      <img src={cart} alt="icone de carrinho de compra" width={"40"} />
    </div>
  );
};

export default Petbutton;
