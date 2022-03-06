import Header from "../components/header";
import Footer from "../components/footer";
import { useRouter } from "next/router";

export default function Layout({ children }: any) {
  const router = useRouter();
  const isLogin = router.asPath === "/login";

  return (
    <div id="wrapper">
      {!isLogin && <Header />}
      <div className="container">{children}</div>
      {!isLogin && <Footer />}
    </div>
  );
}
