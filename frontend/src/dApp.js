import "./App.css";
import React from "react";
import Show from "./components/Admin/Show";
import EditPost from "./components/Admin/EditPost";
import CreatePost from "./components/Admin/CreatePost";
function App() {
  return (
    <div className="App">
      {/* <CreatePost /> */}
      <EditPost />
      {/* <Show /> */}
    </div>
  );
}

export default App;
