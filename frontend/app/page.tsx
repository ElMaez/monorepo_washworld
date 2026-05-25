import Form from "./features/authentication/components/Form";
import Header from "./global/components/Header";

export default function Home() {
  return (
    <>
    <Header title="LOGIN"/>
   <main>
    <h1>Hi! I am main!</h1>
    <Form />
    <p>Css global works! yaie!</p>
   </main>
   </>
  );
}
