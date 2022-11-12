import { DiscordGuild } from "next-auth";

export default function GuildButton(guilds: DiscordGuild) {

    if (guilds.owner === true) {
      return (
        <button
          type="button"
          className=" rounded-md border border-transparent bg-purple-500 w-24 h-12 text-sm font-medium text-white shadow-sm hover:bg-purple-700"
        >
          Setup
        </button>
      );
    }

    else {
      return (
        <button
          type="button"
          className=" rounded-md border border-transparent bg-blue-500 w-24 h-12 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
        >
          View
        </button>
      );
    }
  }

