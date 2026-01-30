import { Routes, Route } from "react-router-dom";
import React from "react";
import AddingPanel from "./components/adding_panel";
import SuperheroesList from "./pages/SuperheroesList";
import SuperheroDetails from "./pages/SuperheroDetails";

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center full">

      <Routes>
        <Route path="/" element={
          <>
            <AddingPanel />
            <SuperheroesList />
          </>
        } />

        <Route path="/:id" element={<SuperheroDetails />} />
      </Routes>
    </div>
  );
}

export default App;
