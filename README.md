## Run Example
An example of this application can be found at ```Test.QuestBot.io```

## Disclaimer
This project is a work in progress, I'll do my best to make sure most of the application is working. However, due to the nature of the main discord application being closed source, not everything will work as intended.  

## Deployment

First, install all dependancies with:

```bash
npm install 
# or
yarn install
```

Second, Add a .env file with the following:

```bash
DISCORD_CLIENT_ID= *Your Discord Client Id*
DISCORD_CLIENT_SECRET=  *Your Discord Client Secret*
NEXTAUTH_URL= *Your Deployment URL (EG: http://localhost:3000)
NEXTAUTH_SECRET= *Your NextAuth Secret*
```

Third, Run the application locally with:

```bash
npm run dev
# or 
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
