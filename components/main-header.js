import News from "./news";
import Home from "./home";

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Home />
      </div>
      <nav>
        <News />
      </nav>
    </header>
  );
}
