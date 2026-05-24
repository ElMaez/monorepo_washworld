import Form from "./(features)/signup/components/Form";
import Header from "./global/components/Header";
import Input from "./global/components/Input";

export default function Home() {
  return (
    <>
    <Header
    title="Hjem"
/>
    <main>
      <Form />
      <h1>Hi! I am main!</h1>
      <p>Css global works! yaie!</p>
    </main>
   </>
  );
}
