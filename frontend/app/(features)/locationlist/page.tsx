import Header from "@/app/global/components/Header";
import LocationSearch from "./components/LocationSearch";
import { getEventLocations } from "@/app/lib/api";


export default async function Home() {
  const locations = await getEventLocations();

  return (
    <>
      <Header title="Hjem" />

      <main>
        <h1>Hi! I am main!</h1>

        <LocationSearch locations={locations} />
      </main>
    </>
  );
}