import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Posts", path: "/posts" },
  { id: 3, title: "Contacts", path: "/contacts" },
];

const Navbar = () => {
  const { pathname } = useRouter();
  return (
    <nav>
      <Image src="/logo.svg" width={60} height={60} alt="logo" />
      <div>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <a className={pathname === path ? styles.active : null}>{title}</a>
          </Link>
        ))}
        {/* <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
      <Link href="/contacts">
        <a>Contacts</a>
      </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
