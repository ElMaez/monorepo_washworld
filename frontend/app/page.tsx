import Form from "./features/authentication/components/Form";
import Header from "./global/components/Header";

export default function Home() {
  return (
   <main>
    <Header title="LOGIN"/>
    <h1>Hi! I am main!</h1>
    <Form />
    <p>Css global works! yaie!</p>
   </main>
  );
}
