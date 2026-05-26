import Header from "@/app/global/components/Header";
import { getEventLocations } from "@/app/lib/api";
import Greeting from "./components/Greeting";
import PromoCard from "./components/PromoCard";
import LocationCard from "./components/LocationCard";
import Co2Card from "./components/Co2Card";

export default async function DashboardPage() {
  let locations: Awaited<ReturnType<typeof getEventLocations>> = [];
  try {
    locations = await getEventLocations();
  } catch {
    locations = [];
  }

  const fallback = [
    {
      location_pk: "fallback-1",
      location_title: "Herlev",
      location_city: "Herlev",
      location_address: "",
    },
    {
      location_pk: "fallback-2",
      location_title: "Herlev",
      location_city: "Herlev",
      location_address: "",
    },
  ];

  const list = locations.length >= 2 ? locations.slice(0, 2) : fallback;

  return (
    <>
      <Header title="Hjem" />
      <main className="flex flex-col gap-24 py-24 bg-bg">
        <Greeting />
        <PromoCard />
        <LocationCard location={list[0]} showImage available />
        <LocationCard location={list[1]} available />
        <Co2Card kg={23.5} />
      </main>
    </>
  );
}
