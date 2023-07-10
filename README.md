This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# nextjs
Next.js full stack application

## Next JS
<p>Next JS simplifies the development process, and optimizes the web applications.</p>

<h3>Features:</h3>
<ul>
<li>Rendering</li>
<li>Routing</li>
<li>Api Routes (Fullstack Applications)</li>
<li>Automatic code splitting</li>
</ul>

<h4>Rendering:</h4>
<p>Next JS allows you to render on client side or server side rendering based on your needs. By default, it uses React server side rendering.<br>
You can change it to a server side component by adding "use client" at top of component page<br>
Client side is the code displayed when a user makes a request to the website.<br>
The server side rendering will take that request and process the request and display all of the info at once - not great for SEO.<br>
NextJS sends pre-rendered code directly to the browser which improves SEO.</p>

<h4>Routing</h4>
<p>In normal React, we install react-router-dom to handle the routing.<br>
In NextJS uses a file based <strong>routing system</strong> and the routing is handled by the file system - So if you have a folder named /about you can access it by going to /about automatically without external packages.</p>

<h4>Api Routes</h4>
<p>Enables the creation of serverless functions to handle API requests. <strong>Serverless APIs</strong> in Next.js are a way of creating API endpoints without the need for a traditional server. You can create an endpoint just by creating a file called route.js</p>

<h4>Automatic Code Splitting</h4>
<p>Code splitting is a technique that breaks down large bundles of javascript code into smaller, more manageable chunks that can be loaded as needed. It reduces the load time of web site and only loads the content when needed</p>
<p>In react, you use lazy loading and show something if it hasn't been loaded - in Next.js it does this automatically!</p>

### Next.js is still just React
<p>It simplifies certain tasks but it is still just react, while automating lots of functions that saves the developer time, it's just an extension of react</p>
