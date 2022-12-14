import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import Heading from "../../components/Heading";

// export const getStaticProps = async () => {
//   console.log("inside");
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       contacts: data,
//     },
//   };
// };

// const Contacts = ({ contacts }) => {
const Contacts = () => {
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setContacts(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts list: " />
      <ul>
        {contacts &&
          contacts.map(({ id, name }) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>
                {name}
                {/* <strong>{name}</strong>({email}) */}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Contacts;
