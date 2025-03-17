import { Header } from "./components/header";
import { Products } from "./views/products";
function App() {
  return (
    <div className="flex flex-col justify-center min-h-vh">
      <Header />
      <main className="flex flex-col md:w-5/6 w-11/12 mb-24 max-w-6xl gap-8 mx-auto flex-grow bg-[length:1200px_800px] bg-top bg-no-repeat">
        <Products />
   
      </main>
    </div>
  );
}

export default App;
