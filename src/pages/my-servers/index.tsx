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
          <Guilds guilds={props.guilds} user={props.user} />
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
        Authorization: `Bearer ${session?.accessToken}`,
      },
    }
  );
  const guilds = await guildFetch.json();
  const userFetch = await fetch(`https://discord.com/api/v10/users/@me`, {
    headers: {
      Authorization: `Bearer ${session?.accessToken}`,
    },
  });
  const user = await userFetch.json();
  if (user) {
    for (let i = 0; i < user.length; i++) {
      if (user.icon === null) {
        user.icon_url = `https://cdn.discordapp.com/icons/1010422850483650570/7ce037d361cbacb995a9075c5cb28e58.png`;
      } else {
        user.icon_url = `https://cdn.discordapp.com/icons/${user.id}/${user.icon}.png`;
      }
    }
  }
  if (guilds) {
    if (user.avatar === null) {
      const defaultAvatarNumber = parseInt(user.discriminator) % 5;
      user.image_url = `https://cdn.discordapp.com/embed/avatars/${defaultAvatarNumber}.png`;
    } else {
      const format = user.avatar.startsWith("a_") ? "gif" : "png";
      user.image_url = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${format}`;
    }
    console.log(guilds, user);
    return {
      props: {
        guilds,
        user,
      },
    };
  }
}
