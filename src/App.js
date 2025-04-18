import { BrowserRouter } from "react-router-dom";
import PublicRoutes from "./router/PublicRoutes";

function App() {
  return (
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  );
}

export default App;
