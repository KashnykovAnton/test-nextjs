import Head from "next/head";
// import Heading from "../../components/Heading";
import ContactInfo from "../../components/ContactInfo";

export const getServerSideProps = async (context) => {
  try {
    const { id } = context.params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        contact: data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        contact: null,
      },
    };
  }
};

const Contact = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  );
};

export default Contact;
