import SparkleIcon from "../assets/icons/sparkle";
import StarIcon from "../assets/icons/star";
import Orbit from "./Orbit";

function HeroOrbit() {
  return (
    <div className="hidden md:block">
      <Orbit
        size={430}
        rotation={-14}
        toggleOrbit
        orbitDuration="30s"
        toggleSpin
        spinDuration="3s"
      >
        <SparkleIcon size="size-8" color="text-emerald-300/20" />
      </Orbit>
      <Orbit
        size={440}
        rotation={79}
        toggleOrbit
        orbitDuration="32s"
        toggleSpin
        spinDuration="3s"
      >
        <SparkleIcon size="size-5" color="text-emerald-300/20" />
      </Orbit>
      <Orbit
        size={530}
        rotation={178}
        toggleOrbit
        orbitDuration="34s"
        toggleSpin
        spinDuration="3s"
      >
        <SparkleIcon size="size-10" color="text-emerald-300/20" />
      </Orbit>
      <Orbit size={530} rotation={-42} toggleOrbit orbitDuration="36s">
        <div className="size-2.5 rounded-full bg-emerald-300/20"></div>
      </Orbit>
      <Orbit
        size={550}
        rotation={12}
        toggleOrbit
        orbitDuration="38s"
        toggleSpin
        spinDuration="6s"
      >
        <StarIcon size="size-12" color="text-emerald-300" />
      </Orbit>
      <Orbit
        size={590}
        rotation={98}
        toggleOrbit
        orbitDuration="40s"
        toggleSpin
        spinDuration="6s"
      >
        <StarIcon size="size-8" color="text-emerald-300" />
      </Orbit>
      <Orbit
        size={720}
        rotation={-30}
        toggleOrbit
        orbitDuration="42s"
        toggleSpin
        spinDuration="3s"
      >
        <SparkleIcon size="size-14" color="text-emerald-300/20" />
      </Orbit>
      <Orbit size={720} rotation={110} toggleOrbit orbitDuration="44s">
        <div className="size-3 rounded-full bg-emerald-300/20"></div>
      </Orbit>
      <Orbit
        size={780}
        rotation={135}
        toggleOrbit
        orbitDuration="46s"
        toggleSpin
        spinDuration="6s"
      >
        <StarIcon size="size-18" color="text-emerald-300" />
      </Orbit>
      <Orbit
        size={920}
        rotation={-72}
        toggleOrbit
        orbitDuration="48s"
        toggleSpin
        spinDuration="6s"
      >
        <StarIcon size="size-28" color="text-emerald-300" />
      </Orbit>
      <Orbit size={980} rotation={-30} toggleOrbit orbitDuration="50s">
        <div className="size-4 rounded-full bg-emerald-300/20"></div>
      </Orbit>
    </div>
  );
}
export default HeroOrbit;
