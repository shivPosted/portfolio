import Card from "../components/Card";
import SectionHeader from "../components/SectionHeader";
import BookImg from "../assets/images/book-cover.png";
import StaticMapImg from "../assets/images/jaipur-map.png";
import MyAvatarImg from "../assets/images/my-avatar.jpg";
import CardHeader from "../components/CardHeader";
import Skills from "../components/Skills";

const hobbies = [
  {
    name: "Gaming",
    icon: "🎮",
  },
  {
    name: "Music",
    icon: "🎧",
  },
  {
    name: "Fitness",
    icon: "💪",
  },
  {
    name: "Reading",
    icon: "📖",
  },
  {
    name: "Riding",
    icon: "🚴",
  },
];

function AboutSection() {
  return (
    <div className="my-32">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          heading="A Glimpse into My World"
          description="Learn more about who I am, what I do and what inspires me."
        />
        <div className="mt-20">
          <Card className="flex-col items-center h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
            />
            <figure className="w-40 mt-8">
              <img
                src={BookImg}
                alt="Atomic habits book cover"
                className="w-full"
              />
            </figure>
          </Card>
          <Card className="flex-col items-center h-[320px]">
            <CardHeader
              title="My Toolbox"
              description="
                Explore the technologies and tools that I use to create
                exceptional digital experience.
              "
            />
            <Skills />
            <Skills />
          </Card>
          <Card>
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm"
            />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.name}>
                  <span>{hobby.name}</span>
                  <span>{hobby.icon}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <figure>
              <img src={StaticMapImg} alt="static map of location" />
            </figure>
            <figure>
              <img src={MyAvatarImg} alt="Me emoji image" />
            </figure>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default AboutSection;
