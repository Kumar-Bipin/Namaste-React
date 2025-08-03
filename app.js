const parentDiv = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { key: "heading1" }, "Hello World! from React"),
    React.createElement("h1", { key: "heading2" }, "Hello Again! from React"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { key: "heading1" }, "Hello World! from React"),
    React.createElement("h1", { key: "heading2" }, "Hello Again! from React"),
  ]),
]);
console.log(parentDiv);
const reactRoot = document.getElementById("reactRoot");
const root = ReactDOM.createRoot(reactRoot);
root.render(parentDiv);
