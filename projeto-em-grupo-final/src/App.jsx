import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <AppRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
