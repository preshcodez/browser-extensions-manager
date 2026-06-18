import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { extensions } from "./data/extension";
import { useState } from "react";

export interface Extension {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

function App() {
  const [allExtensions, setAllExtensions] = useState<Extension[]>(
    extensions as Extension[],
  );
  const [filter, setFilter] = useState("all");
  const filteredExtension = allExtensions.filter((extension) => {
    if (filter === "active") {
      return extension.isActive;
    }
    if (filter === "inactive") {
      return !extension.isActive;
    }
    return true;
  });

  const toggleExtension = (name: string) => {
    setAllExtensions((prev) =>
      prev.map((extension) =>
        extension.name === name
          ? { ...extension, isActive: !extension.isActive }
          : extension,
      ),
    );
  };
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                allExtensions={filteredExtension}
                filter={filter}
                setFilter={setFilter}
                toggleExtension={toggleExtension}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
