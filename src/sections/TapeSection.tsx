import { Fragment } from "react/jsx-runtime";
import StarIcon from "../assets/icons/star";

const words = [
  "Accessible",
  "Secure",
  "Peformant",
  "Interactive",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Reliable",
  "Usable",
  "Responsive",
  "Material Designs",
];

function TapeSection() {
  return (
    <div className="pb-16 pt-24 md:pt-32 lg:pt-40 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1">
        <div className="flex justify-center [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 animate-tape-left [animation-duration:40s] pr-4">
            {Array.from([words, words, words]).map((arrayOfWords, ind) => (
              <Fragment key={ind}>
                {arrayOfWords.map((word) => (
                  <div
                    key={word + ind}
                    className="inline-flex gap-4 items-center"
                  >
                    <StarIcon size="6" color="text-gray-900 -rotate-12" />
                    <span className="text-sm font-extrabold uppercase text-gray-900">
                      {word}
                    </span>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default TapeSection;
