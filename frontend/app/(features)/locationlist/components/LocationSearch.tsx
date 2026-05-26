"use client";

import Card from "./Card";
import type { Location } from "../hooks/useFilterLocations";
import { useFilterLocations } from "../hooks/useFilterLocations";
import Icon from "@/app/global/components/Icon";

interface LocationSearchProps {
  locations: Location[];
}

const LocationSearch = ({ locations }: LocationSearchProps) => {
  const { search, setSearch, filteredLocations } = useFilterLocations(locations);

  return (
    <>
    <div className="flex items-center gap-6 pt-16 pb-8 text-primary-600">
    <Icon iconName="search" size="sm"></Icon>
      <input
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-surface border-primary-100 border-2 rounded-4 text-text"
      />
      </div>
      <div className="flex flex-col gap-16 overflow-y-auto pr-4">
        {filteredLocations.map((location) => (
          <Card key={location.location_pk} location={location} />
        ))}
      </div>
    </>
  );
};

export default LocationSearch;