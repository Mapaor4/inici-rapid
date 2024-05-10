import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Clica{" "}
        <a href="CV_english.pdf" target="_blank">
          FITXER PDF
        </a>{" "}
        to per obrir el fitxer.
      </p>
      <p>Bueno què tal? tot bé? Jo em dic Martí</p>
    </main>
  );
}
