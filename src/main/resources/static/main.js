// Sample data (nodes and links)
var nodes = [
  { id: "A" },
  { id: "B" },
  { id: "C" },
  { id: "D" },
  { id: "E" },
];

var links = [
  { source: "A", target: "B" },
  { source: "A", target: "C" },
  { source: "A", target: "D" },
  { source: "D", target: "E" },
  { source: "A", target: "E" },
];

// Define the dimensions of the SVG container
var width = 600;
var height = 400;

// Create the SVG container
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Create a D3 force simulation
var simulation = d3.forceSimulation(nodes)
  .force("link", d3.forceLink(links).id(d => d.id).distance(100))
  .force("charge", d3.forceManyBody().strength(-200))
  .force("center", d3.forceCenter(width / 2, height / 2));

// Create SVG elements for links
var link = svg.selectAll("line")
  .data(links)
  .enter()
  .append("line")
  .attr("stroke", "gray")
  .attr("stroke-width", 2);

// Create SVG elements for nodes
var node = svg.selectAll("circle")
  .data(nodes)
  .enter()
  .append("circle")
  .attr("r", 20)
  .attr("fill", "steelblue");

// Create labels for nodes
var labels = svg.selectAll("text")
  .data(nodes)
  .enter()
  .append("text")
  .text(d => d.id)
  .attr("font-size", 12)
  .attr("dx", 25)
  .attr("dy", 5);

// Update node and link positions in each tick of the simulation
simulation.on("tick", () => {
  link.attr("x1", d => d.source.x)
    .attr("y1", d => d.source.y)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y);

  node.attr("cx", d => d.x)
    .attr("cy", d => d.y);

  labels.attr("x", d => d.x)
    .attr("y", d => d.y);
});