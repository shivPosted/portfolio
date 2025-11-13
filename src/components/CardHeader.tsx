import StarIcon from "../assets/icons/star";

function CardHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col px-4 pt-6">
      <div className="inline-flex items-center gap-2">
        <StarIcon size="size-9" color="text-emerald-300" />
        <h3 className="font-calistogo text-3xl">{title}</h3>
      </div>
      <p className="text-pretty text-sm text-white/60 mt-2">{description}</p>
    </div>
  );
}
export default CardHeader;
