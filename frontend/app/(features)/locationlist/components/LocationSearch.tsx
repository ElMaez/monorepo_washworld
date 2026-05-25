"use client";

import Card from "./Card";
import type { Location } from "../hooks/useFilterLocations";
import { useFilterLocations } from "../hooks/useFilterLocations";

interface LocationSearchProps {
  locations: Location[];
}

const LocationSearch = ({ locations }: LocationSearchProps) => {
  const { search, setSearch, filteredLocations } = useFilterLocations(locations);

  return (
    <>
      <input
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredLocations.map((location) => (
        <Card key={location.location_pk} location={location} />
      ))}
    </>
  );
};

export default LocationSearch;