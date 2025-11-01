import grainImage from "../assets/images/graintexture.jpeg";

function GrainOverlay() {
  return (
    <figure className="size-full absolute inset-0 top-0 left-0 -z-30 opacity-5">
      <img
        className="size-full object-fill"
        src={grainImage}
        alt="graining-effect-image"
      />
    </figure>
  );
}
export default GrainOverlay;
