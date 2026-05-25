import Header from "./global/components/Header";
import Input from "./global/components/Input";
import Form from "./features/authentication/components/Form";

export default function Home() {
  return (
    <>
    <Header title="login"></Header>
   <main>
    <h1>Hi! I am main!</h1>
    <Form />
    <p>Css global works! yaie!</p>
   </main>
   </>
  );
}
