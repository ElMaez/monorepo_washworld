import Icon from "@/app/global/components/Icon";
import Button from "@/app/global/components/Button";
import type { Location } from "../hooks/useFilterLocations";

interface CardProps {
  location: Location;
  innerCleanCount?: [number, number];
  washBayCount?: [number, number];
  distance?: string;
}

const Card = ({
  location,
  innerCleanCount = [1, 2],
  washBayCount = [3, 5],
  distance = "800M",
}: CardProps) => {
  return (
    <article className="rounded-12 border border-primary-100 overflow-hidden bg-bg">
      <div className="relative grid grid-cols-2 py-12 bg-primary-50">
        <div className="flex items-center justify-center gap-8 text-primary-600">
          <Icon iconName="vacuum" />
          <div className="flex flex-col items-center leading-tight">
            <span className="text-sm font-bold">
              {innerCleanCount[0]}/{innerCleanCount[1]}
            </span>
            <span className="uppercase text-xs font-bold">Indre Bilpleje</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 text-primary-600">
          <Icon iconName="bubble" />
          <div className="flex flex-col items-center leading-tight">
            <span className="text-sm font-bold">
              {washBayCount[0]}/{washBayCount[1]}
            </span>
            <span className="uppercase text-xs font-bold">Vaskehaller</span>
          </div>
        </div>

        <span
          aria-hidden="true"
          className="absolute top-0 left-1/2 h-full w-px bg-grey-100 -translate-x-1/2 rotate-18"
        />
      </div>
      <div className="flex items-center justify-between px-16 py-16 bg-bg">
        <div className="flex items-center gap-12 text-text">
          <Icon iconName="location" />
          <div className="leading-tight">
            <h3 className="text-lg font-bold uppercase">
              {location.location_title}
            </h3>
            <p className="uppercase text-sm">{location.location_address}</p>
          </div>
        </div>
        <p className="text-sm text-text">{distance}</p>
      </div>
      <div className="grid grid-cols-2 gap-12 px-16 pb-16">
        <Button
          elementType="button"
          buttonName="Vælg Vaskehal"
          size="lg"
          type="primary"
          status="normal"
        />
        <Button
          elementType="button"
          buttonName="Find Vej"
          size="lg"
          type="secondary"
          status="normal"
        />
      </div>
    </article>
  );
};

export default Card;
