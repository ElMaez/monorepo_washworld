import Header from "@/app/global/components/Header";
import LocationSearch from "./components/LocationSearch";
import type { Location } from "./hooks/useFilterLocations";

export async function getEventLocations(): Promise<Location[]> {
  const response = await fetch(
    "http://host.docker.internal/api-get-all-locations",
    {
      method: "GET",
      cache: "no-store",
    }
  );
  if (!response.ok){console.error(`${response.status}`)}
  const data = await response.json();
  return data.locations;
}

export default async function Home() {
  const locations = await getEventLocations();

  return (
    <>
      <Header title="Bil vask"
      backButton={{ elementType: "link", goBack: true, size: "sm", type: "none", iconName: "back", }}/>
      <main>
        <h1>Hi! I am main!</h1>

        <LocationSearch locations={locations} />
      </main>
    </>
  );
}