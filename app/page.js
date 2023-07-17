//Data Fetching

//1. Server Side Rendering (SSR)
//2. Static Site Generation(SSG)
//3. Incremental Static Generation (ISR)

//Metadata (Static)

export const metadata = {
  title: 'Home',
  description: "Website built with Next.js"
}
//Outpuit
//<title>Home</title><meta name="description" content="Website built with Next.js"/>

async function Page ({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`,
  { next: {revalidate: 10} }
  ); //Will cache but after a specific time frame it will refresh it

  const data = await res.json();

return (
  <div>
    DIsplay Response from fetch here
  </div>
);
}

export default Page;
