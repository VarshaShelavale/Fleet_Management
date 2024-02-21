import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import { SelectedOptionsProvider } from "./Components/SelectedOptionsContext/SelectedOptionsContext";
function App() {
  return (
    <div>
      <Header />
      <SelectedOptionsProvider>
        <Main></Main>
      </SelectedOptionsProvider>
      <Footer />
    </div>
  );
}

export default App;
