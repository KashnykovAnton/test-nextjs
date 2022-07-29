import { useEffect } from "react";
import { useRouter } from "next/router";
import Heading from "../components/Heading";
import Head from "next/head";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <Heading text="Page 404" />
      <Heading tag="h3" text="Something is going wrong..." />
    </>
  );
};

export default Error;
