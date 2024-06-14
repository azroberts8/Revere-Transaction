import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <h1 class="text-4xl font-extrabold">404 - Page Not Found</h1>
    </>
  );
}
