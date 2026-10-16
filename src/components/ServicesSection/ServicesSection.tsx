
import ServiceCard from "./ServiceCard";
import styles from "./ServicesSection.module.css";

const services = [
  {
    number: "01",
    icon: "✳",
    title: "Design & Branding",
    description:
      "Criamos identidades visuais marcantes que expressam a essência da sua marca.",
  },
  {
    number: "02",
    icon: "◎",
    title: "Marketing Digital",
    description:
      "Planejamos estratégias para conectar sua marca ao público certo e gerar resultados.",
  },
  {
    number: "03",
    icon: "⌘",
    title: "Desenvolvimento Web",
    description:
      "Desenvolvemos experiências digitais modernas, rápidas e adaptadas a qualquer tela.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicos" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>O QUE FAZEMOS</span>

          <h2>
            Soluções criativas para
            <span> levar sua marca além.</span>
          </h2>

          <p>
            Combinamos criatividade, estratégia e tecnologia para transformar
            desafios em oportunidades.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
