import React from "react";
import AddingPanel from "./components/adding_panel";
import PaginationHeroui from "./components/pagination";

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-between items-center full">

      <AddingPanel />

    
      

      <footer className="sticky bottom-0 pb-10 pt-4">
        <PaginationHeroui />
      </footer>
    </div>
  );
}

export default App;
