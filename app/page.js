//Data Fetching

//1. Server Side Rendering (SSR)
//2. Static Site Generation(SSG)
//3. Incremental Static Generation (ISR)

//Metadata (Static)
export const metadata = {
  title: 'Home',
  description: "Website built with Next.js"
}
//Output
//<title>Home</title><meta name="description" content="Website built with Next.js"/>

function getProduct() {
  //Search for product and return it for the dynamic metadata example

  return 1;
}

//Dynamic Metadata
export async function generateMetadata({params, searchParams}) {
  const product = await getProduct(params.id);
  return {title: product.title}
}

//Output

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
