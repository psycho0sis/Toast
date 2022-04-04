export const addClass = (node, animation) => {
  switch (animation) {
    case "transform":
      node.classList.add("transform");
    case "opacity":
      node.classList.add("opacity"); 
  }
}