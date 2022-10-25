import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";

function App() {
  // const 
  return (
    <div className="App" >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
