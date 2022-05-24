import { createRoot } from "react-dom/client";
import { App } from "./App";

const mountElement = document.getElementById("app");
const root = createRoot(mountElement);

root.render(<App />);
