import SparkleIcon from "../assets/icons/sparkle";
import StarIcon from "../assets/icons/star";
import Orbit from "./Orbit";

function HeroOrbit() {
  return (
    <div className="hidden md:block">
      <Orbit size={920} rotation={-72}>
        <StarIcon size="size-28" color="text-emerald-300" />
      </Orbit>
      <Orbit size={780} rotation={135}>
        <StarIcon size="size-18" color="text-emerald-300" />
      </Orbit>
      <Orbit size={550} rotation={12}>
        <StarIcon size="size-12" color="text-emerald-300" />
      </Orbit>
      <Orbit size={590} rotation={98}>
        <StarIcon size="size-8" color="text-emerald-300" />
      </Orbit>
      <Orbit size={430} rotation={-14}>
        <SparkleIcon size="size-8" color="text-emerald-300/20" />
      </Orbit>
      <Orbit size={440} rotation={79}>
        <SparkleIcon size="size-5" color="text-emerald-300/20" />
      </Orbit>
      <Orbit size={530} rotation={178}>
        <SparkleIcon size="size-10" color="text-emerald-300/20" />
      </Orbit>
      <Orbit size={720} rotation={-30}>
        <SparkleIcon size="size-14" color="text-emerald-300/20" />
      </Orbit>
      <Orbit size={720} rotation={110}>
        <div className="size-3 rounded-full bg-emerald-300/20"></div>
      </Orbit>
      <Orbit size={530} rotation={-42}>
        <div className="size-2.5 rounded-full bg-emerald-300/20"></div>
      </Orbit>
      <Orbit size={980} rotation={-30}>
        <div className="size-4 rounded-full bg-emerald-300/20"></div>
      </Orbit>
    </div>
  );
}
export default HeroOrbit;
