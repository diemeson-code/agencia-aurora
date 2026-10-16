
import styles from "./Header.module.css";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="#inicio" className={styles.logo}>
          aurora<span>.</span>
        </a>

        <nav className={styles.nav} aria-label="Navegação principal">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className={styles.contactButton}>
          Fale conosco <span>↗</span>
        </a>
      </div>
    </header>
  );
}

