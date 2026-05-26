"use client";

import Header from "@/app/global/components/Header";
import CarCard from "./components/CarCard";

export default function Mycar() {

  return (
    <>
    <Header title="Mine Biler" backButton={{ elementType: "link", goBack: true, size: "sm", type: "none", status: "normal", iconName: "back", }}/>
    <main className="flex flex-col gap-16 p-16">
      <CarCard variant="empty" />
      <CarCard
        variant="filled"
        licensePlate="DK BT 47 392"
        imageUrl="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80"
      />
    </main>
    </>
  );
}