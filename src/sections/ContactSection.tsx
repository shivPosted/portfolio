import Arrowup from "../assets/icons/arrow-up-right";
import Card from "../components/Card";

function ContactSection() {
  return (
    <div className="my-14 lg:my-24">
      <div className="container lg:max-w-[80%] mx-auto">
        <Card color="flex-col items-center bg-gradient-to-r from-emerald-300/85 to-sky-400/85 text-center md:text-left text-gray-900 px-10 py-8 ">
          <div className="flex flex-col md:flex-row gap-8 items-center md:gap-16">
            <div>
              <h2 className="font-calistogo text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm mt-2 text-pretty md:text-base">
                I turn ideas into shipped features and coffee into questionable
                commit messages. Let’s build something that surprises people.
              </p>
            </div>
            <div>
              <button className="inline-flex items-center gap-2 rounded-lg bg-gray-900 h-12 px-6 text-white w-max border border-gray-900">
                <span className="font-semibold">Contact Me</span>
                <Arrowup width="1.2rem" height="1.2rem" />
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
export default ContactSection;
