export default function Card({
  image,
  title,
  desc,
  profile,
  name,
}: {
  image: any;
  title: string;
  desc: string;
  profile: any;
  name: string;
}) {
  return (
    <div className="flex flex-col w-72 p-4 bg-white shadow-2xl rounded-2xl items-center">
      <img src={`${image}`} className="rounded-xl" />
      <h1 className="w-full pt-2 font-semibold text-md">{title}</h1>
      <p className="w-full pt-2 font-semibold text-xs text-neutral-500">
        {desc}
      </p>
      <div className="flex w-full items-center gap-4">
        <img src={`${profile}`} className="rounded-full w-8 mt-4 h-8" />
        <h1 className="text-md font-semibold pt-4">{name} - Jan 28, 2024</h1>
      </div>
    </div>
  );
}
