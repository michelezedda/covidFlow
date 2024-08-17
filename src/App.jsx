import { Helmet } from "react-helmet";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/footer/Footer";
import Download from "./components/download/Download";
import { scrollToTop } from "./components/clientAPI/clientAPI";

function App() {
  scrollToTop();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>covidFlow - Stay Safe</title>
        <link rel="canonical" href="https://covid-flow.vercel.app/" />
      </Helmet>
      <Navbar />
      <Header />
      <Dashboard />
      <Download />
      <Footer />
    </>
  );
}

export default App;
