import React from "react";
import styles from "../../styles/style";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import { Navbar, Footer } from "../../components/index";
import { Heading, Guilds } from "../../components/my-servers/index";
import { InferGetServerSidePropsType } from "next";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function MyServers(props: Props) {
  return (
    <div className="bg-primary w-full min-h-screen">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Heading />
          <Guilds guilds={props.guilds} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  const guildFetch = await fetch(
    `https://discord.com/api/v10/users/@me/guilds`,
    {
      headers: {
        // @ts-ignore
        Authorization: `Bearer ${session?.accessToken}`,
      },
    }
  );
  const guilds = await guildFetch.json();
  for (let i = 0; i < guilds.length; i++) {
    if (guilds[i].owner === false) {
      guilds.splice(i, 1);
    }
    if (guilds[i].icon === null) {
      guilds[
        i
      ].icon_url = `https://cdn.discordapp.com/icons/1010422850483650570/7ce037d361cbacb995a9075c5cb28e58.png`;
    } else {
      guilds[
        i
      ].icon_url = `https://cdn.discordapp.com/icons/${guilds[i].id}/${guilds[i].icon}.png`;
    }
    if (guilds[i].owner === true) {
      const removedObject = guilds.splice(i, 1);
      console.log(removedObject[0]);
      guilds.unshift(removedObject[0]);
    }
  }
  console.log(guilds)
  return {
    props: {
      guilds,
    },
  };
}
