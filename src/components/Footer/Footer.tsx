
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#inicio" className={styles.logo}>
              aurora<span>.</span>
            </a>

            <p>
              Criatividade, estratégia e tecnologia para
              marcas que querem evoluir.
            </p>
          </div>

          <div className={styles.contact}>
            <span>VAMOS CRIAR ALGO JUNTOS?</span>

            <a href="mailto:contato@agenciaaurora.com.br">
              Entre em contato <span>↗</span>
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © 2026 Agência Aurora. Todos os direitos reservados.
          </p>

          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </div>
    </footer>
  );
}
