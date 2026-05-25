
import type { Location } from "../hooks/useFilterLocations";

interface CardProps {
  location: Location;
}

const Card = ({ location }: CardProps) => {
  return (
    <article>
        <h1>I AM ┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻ CAAAAAARD</h1>
        <h2>{location.location_title}</h2>
        <p>{location.location_city}</p>
        <p>{location.location_address}</p>
    </article>
  );
};
export default Card;