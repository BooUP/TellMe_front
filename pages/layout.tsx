import { useRouter } from "next/router";

import Footer from "../components/Footer";
import Header from "../components/Header";

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
