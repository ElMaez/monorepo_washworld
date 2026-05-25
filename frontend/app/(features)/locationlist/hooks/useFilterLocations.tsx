"use client";

import { useState } from "react";

export interface Location {
  location_pk: string;
  location_title: string;
  location_city: string;
  location_address: string;
}

export function useFilterLocations(locations: Location[]) {
  const [search, setSearch] = useState("");

  const searchValue = search.toLowerCase();

  const filteredLocations = locations.filter((loc) =>
    loc.location_title.toLowerCase().includes(searchValue) ||
    loc.location_city.toLowerCase().includes(searchValue) ||
    loc.location_address.toLowerCase().includes(searchValue)
  );

  return {
    filteredLocations,
    search,
    setSearch,
  };
}