import Header from "../components/header";
import Footer from "../components/footer";

export default function Layout({ children }: any) {
  return (
    <div id="wrapper">
      <Header />
      <div className="container">
        {children}
      </div>
      <Footer />
    </div>
  );
}
