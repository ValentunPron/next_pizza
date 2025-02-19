import { Categories, Container, Title } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Всі піци" size="lg" className="font-extrabold"/>

        <Categories className="mt-2"/>
      </Container>
    </>
  );
}
