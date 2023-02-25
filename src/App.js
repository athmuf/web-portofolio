import Header from "./parts/Header";
import Footer from "./parts/Footer";
import Hero from "./parts/Hero";
import About from "./parts/About";
import Projects from "./parts/Projects"
import Contact from "./parts/Contact";

function App() {
  return (
  <>
    <Header></Header>
    <Hero></Hero>
    <main>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </main>
    <Footer></Footer>
  </>
);
}

export default App;
