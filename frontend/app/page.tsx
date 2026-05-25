import Header from "./global/components/Header";
import Form from "./features/authentication/components/Form";

export default function Home() {
  return (
    <>
    <Header
    title="Login"/>
    <main>
      <Form />
      <h1>Hi! I am main!</h1>
      <p>Css global works! yaie!</p>
    </main>
   </>
  );
}
