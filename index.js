function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>Price</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <div>
      <ol>
        <li>Bread</li>
        <li>Peanut</li>
        <li>Groundnut</li>
        <li>Milk</li>
        <li>Milo</li>
        <li>Biscuit</li>
        <li>Yoghurt</li>
        <li>Tom tom</li>
        <li>Blue band</li>
        <li>Aqua Rapha bottle water</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <p>This copy is </p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <h1>Welcome to react</h1>
      <Main />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
