import styles from "./Home.module.css";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import slide1 from "../images/imagem1.png";
import slide2 from "../images/imagem2.png";
import slide3 from "../images/imagem3.png";

function Home() {
  return (
    <div>
      <Carousel className={styles.Carousel}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide1}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide2}
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide3}
            alt="Third slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Accordion
        className={styles.Accordion1}
        defaultActiveKey="0"
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Sobre o projeto</Accordion.Header>
          <Accordion.Body className={styles.accordionBody}>
            Este é o projeto Programadores Cariocas, uma iniciativa da
            Prefeitura em parceria com três empresas: Generation, Senac e
            Resilia. Queremos capicitar jovens moradores da cidade do Rio de
            Janeiro para preencher uma lacuna de vagas na área da tecnologia. O
            projeto oferece bolsas mensais de R$500,00 e ao final do curso os
            alunos que se formarem irão ganhar um notebook com especificações
            suficientes para utilizar as ferramentas necessárias que são
            exigidas no mercado de trabalho.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Objetivos</Accordion.Header>
          <Accordion.Body className={styles.accordionBody}>
            O objetivo principal do projeto é suprir o déficit de vagas que
            existem na área da tecnologia e aliado a isso queremos dar
            oportunidades de jovens estudarem e terem um equipamento digno para
            trabalhar. Após 6 meses de estudo intensivo os formandos irão ganhar
            o certificado de Desenvolvedor Web FullStack.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Detalhes</Accordion.Header>
          <Accordion.Body className={styles.accordionBody}>
            Ao todo serão 1.500 vagas, sendo que os 200 primeiros terão bolsas
            de estudo de 100% durante todo o curso. O restante dos alunos terá
            um desconto de 50% e só pagará iniciará o pagamento quando
            empregados na área e recebendo mais de R$2.200 formalmente. Se ao
            final de 5 anos, o formando não conseguir um emprego, os parceiros
            arcarão com o custo do curso. Este projeto é válido para todos os
            jovens moradores de 17 a 29 anos residentes na cidade do Rio de
            Janeiro.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Card
        className={styles.card}
        style={{ width: "18rem" }}
      >
        <Card.Body>
          <Card.Title className={styles.cardTitle}>
            Se interessou pelo projeto?
          </Card.Title>
          <Card.Text className={styles.cardText}>
            Clique no botão abaixo para ir para a página de cadastro!
          </Card.Text>
          <Button
            href="/cadastro/"
            variant="primary"
          >
            Se inscreva aqui
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
