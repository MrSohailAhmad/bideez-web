import Image from "next/image";

type TeamCardProps = {
  image: string;
  name: string;
  role: string;
  bio: string;
  tags: string[];
};

export default function TeamCard({ image, name, role, bio, tags }: TeamCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-80 hover:-translate-y-2 transition-transform">
      <div className="relative w-full h-72">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>
      <div className="p-5 text-left">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <h4 className="text-blue-600 text-sm mb-3">{role}</h4>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{bio}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
