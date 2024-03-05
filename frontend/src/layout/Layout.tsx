import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

interface Props {
  children: React.ReactNode; // Corrected property name to 'children'
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto py-10 flex-1">{children}</div>{" "}
      {/* Use 'children' instead of 'chlidren' */}
      <Footer />
    </div>
  );
};

export default Layout;
