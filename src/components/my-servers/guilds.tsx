import { DiscordGuild } from "next-auth";
import Image from "next/image";
import GuildButton from "./guildButton";

export default function Guilds({ guilds }: { guilds: DiscordGuild[] }) {
  return (
    <ul
      role="list"
      className="grid justify-items-start grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-3 xl:gap-x-20 my-10 lg:mx-40"
    >
      {guilds.map((guilds) => (
        <li key={guilds.id} className="relative ">
          <div className="relative items-center justify-start ">
            <div className="relative flex items-center justify-center mb-4">
              <div className="bg-gray-600 rounded-lg ">
                <div
                  className="relative flex bg-cover rounded-lg bg-center blur-[8px]"
                  style={{
                    backgroundImage: `url(${guilds.icon_url})`,
                    height: "160px",
                    width: "260px",
                  }}
                >
                  <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>
                </div>
              </div>
              <div className="absolute flex justify-center items-center rounded-full bg-white w-[84px] h-[84px]">
                <div className="absolute rounded-full bg-gray-800 w-[80px] h-[80px]">
                  <Image
                    src={guilds.icon_url}
                    alt={guilds.id}
                    className="absolute rounded-full"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start">
              <p className="basis-3/5 flex text-gray-200 font-bold line-clamp-2 ">
                {guilds.name}
              </p>
              <div className="basis-2/5 relative flex items-center justify-end">
              </div>
              <GuildButton {...guilds} />
            </div>
          </div>
        </li>
      ))}
      
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </ul>
  );
}
