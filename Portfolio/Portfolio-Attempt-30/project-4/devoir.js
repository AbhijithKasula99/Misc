// Define nodes for the architecture components
// Viz.js
var nodes = new vis.DataSet([
    {id: 1, label: 'Medical Devices'},
    {id: 2, label: 'AWS IoT Core'},
    {id: 3, label: 'Kinesis Data Streams'},
    {id: 4, label: 'Amazon S3'},
    {id: 5, label: 'AWS Glue'},
    {id: 6, label: 'Amazon EMR'},
    {id: 7, label: 'Amazon Redshift'},
    {id: 8, label: 'Amazon QuickSight'},
    {id: 9, label: 'Amazon SageMaker'},
    {id: 10, label: 'IAM'},
    {id: 11, label: 'Amazon Macie'},
    {id: 12, label: 'AWS KMS'},
    {id: 13, label: 'Amazon CloudWatch'},
    {id: 14, label: 'AWS CloudTrail'},
    {id: 15, label: 'S3 Cross-Region Replication'},
    {id: 16, label: 'Redshift Snapshot'}
]);

// Define edges to represent the flow between components
var edges = new vis.DataSet([
    {from: 1, to: 2},
    {from: 2, to: 3},
    {from: 3, to: 4},
    {from: 4, to: 5},
    {from: 5, to: 6},
    {from: 6, to: 7},
    {from: 7, to: 8},
    {from: 7, to: 9},
    {from: 10, to: 4},
    {from: 11, to: 4},
    {from: 12, to: 4},
    {from: 13, to: 6},
    {from: 14, to: 10},
    {from: 15, to: 4},
    {from: 16, to: 7}
]);

// Create a network
var container = document.getElementById('mynetwork');
var data = {
    nodes: nodes,
    edges: edges
};
var options = {
    nodes: {
        shape: 'box',
        margin: 10,
        widthConstraint: {
            maximum: 200
        }
    },
    edges: {
        arrows: 'to',
        smooth: {
            type: 'cubicBezier'
        }
    },
    layout: {
        hierarchical: {
            direction: 'LR',
            sortMethod: 'directed'
        }
    }
};
var network = new vis.Network(container, data, options);


/* WORKED
const svg = d3.select("#awsFlowchart");
const width = 1200;
const height = 800;

svg.attr("width", width).attr("height", height);

const nodes = [
    { id: "IoT Devices", type: "device" },
    { id: "AWS IoT Core", type: "aws" },
    { id: "Kinesis Data Streams", type: "aws" },
    { id: "S3 Bucket", type: "aws" },
    { id: "AWS Glue", type: "aws" },
    { id: "Amazon EMR", type: "aws" },
    { id: "Amazon Redshift", type: "aws" },
    { id: "Amazon QuickSight", type: "aws" },
    { id: "Amazon SageMaker (Optional)", type: "aws" },
    { id: "IAM", type: "security" },
    { id: "Amazon Macie", type: "security" },
    { id: "AWS KMS", type: "security" },
    { id: "Amazon CloudWatch", type: "monitoring" },
    { id: "AWS CloudTrail", type: "monitoring" },
    { id: "S3 Cross-Region Replication", type: "backup" },
    { id: "Redshift Snapshot", type: "backup" }
];

const links = [
    { source: "IoT Devices", target: "AWS IoT Core", label: "Data Ingestion" },
    { source: "AWS IoT Core", target: "Kinesis Data Streams", label: "Store" },
    { source: "Kinesis Data Streams", target: "S3 Bucket", label: "ETL" },
    { source: "S3 Bucket", target: "AWS Glue", label: "Transformed Data" },
    { source: "AWS Glue", target: "Amazon EMR", label: "Visualization" },
    { source: "Amazon EMR", target: "Amazon Redshift", label: "Advanced Analytics" },
    { source: "IAM", target: "S3 Bucket", label: "Access Control" },
    { source: "Amazon Macie", target: "S3 Bucket", label: "Data Classification" },
    { source: "AWS KMS", target: "S3 Bucket", label: "Encryption" },
    { source: "Amazon CloudWatch", target: "Amazon EMR", label: "Monitoring" },
    { source: "AWS CloudTrail", target: "IAM", label: "Logging" },
    { source: "S3 Cross-Region Replication", target: "S3 Bucket", label: "Backup" },
    { source: "Redshift Snapshot", target: "Amazon Redshift", label: "Backup" }
];

const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(100))
    .force("charge", d3.forceManyBody().strength(-400))
    .force("center", d3.forceCenter(width / 2, height / 2));

const link = svg.append("g")
    .selectAll("line")
    .data(links)
    .enter().append("line")
    .attr("stroke-width", 2);

const node = svg.append("g")
    .selectAll("circle")
    .data(nodes)
    .enter().append("circle")
    .attr("r", 20)
    .attr("fill", d => {
        // You can add color coding based on groups here
        return "#6699cc";
    });

node.append("title")
    .text(d => d.id);

const label = svg.append("g")
    .selectAll("text")
    .data(nodes)
    .enter().append("text")
    .attr("dx", 22)
    .attr("dy", ".35em")
    .text(d => d.id);

simulation.nodes(nodes).on("tick", ticked);
simulation.force("link").links(links);

function ticked() {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);

    label
        .attr("x", d => d.x)
        .attr("y", d => d.y);
} */


/* This got me the dots
const svg = d3.select("#awsFlowchart");
const width = 800;
const height = 600;

svg.attr("width", width).attr("height", height);

const nodes = [
    { id: "IoT Devices", type: "device" },
    { id: "AWS IoT Core", type: "aws" },
    { id: "Kinesis Data Streams", type: "aws" },
    { id: "S3 Bucket", type: "aws" },
    { id: "AWS Glue", type: "aws" },
    { id: "Amazon EMR", type: "aws" },
    { id: "Amazon Redshift", type: "aws" },
    { id: "Amazon QuickSight", type: "aws" },
    { id: "Amazon SageMaker (Optional)", type: "aws" },
    { id: "IAM", type: "security" },
    { id: "Amazon Macie", type: "security" },
    { id: "AWS KMS", type: "security" },
    { id: "Amazon CloudWatch", type: "monitoring" },
    { id: "AWS CloudTrail", type: "monitoring" },
    { id: "S3 Cross-Region Replication", type: "backup" },
    { id: "Redshift Snapshot", type: "backup" }
];

const links = [
    { source: "IoT Devices", target: "AWS IoT Core", label: "Data Ingestion" },
    { source: "AWS IoT Core", target: "Kinesis Data Streams", label: "Store" },
    { source: "Kinesis Data Streams", target: "S3 Bucket", label: "ETL" },
    { source: "S3 Bucket", target: "AWS Glue", label: "Transformed Data" },
    { source: "AWS Glue", target: "Amazon EMR", label: "Visualization" },
    { source: "Amazon EMR", target: "Amazon Redshift", label: "Advanced Analytics" },
    { source: "IAM", target: "S3 Bucket", label: "Access Control" },
    { source: "Amazon Macie", target: "S3 Bucket", label: "Data Classification" },
    { source: "AWS KMS", target: "S3 Bucket", label: "Encryption" },
    { source: "Amazon CloudWatch", target: "Amazon EMR", label: "Monitoring" },
    { source: "AWS CloudTrail", target: "IAM", label: "Logging" },
    { source: "S3 Cross-Region Replication", target: "S3 Bucket", label: "Backup" },
    { source: "Redshift Snapshot", target: "Amazon Redshift", label: "Backup" }
];

const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

const link = svg.append("g")
    .selectAll("line")
    .data(links)
    .enter().append("line")
    .attr("stroke-width", 2);

const node = svg.append("g")
    .selectAll("circle")
    .data(nodes)
    .enter().append("circle")
    .attr("r", 5)
    .attr("fill", d => {
        // You can add color coding based on groups here
        return "#6699cc";
    });

node.append("title")
    .text(d => d.id);

simulation.nodes(nodes).on("tick", ticked);
simulation.force("link").links(links);

function ticked() {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
} */




/* // Define the diagram data
const data = {
    nodes: [
        { id: "IoT Devices", type: "device" },
        { id: "AWS IoT Core", type: "aws" },
        { id: "Kinesis Data Streams", type: "aws" },
        { id: "S3 Bucket", type: "aws" },
        { id: "AWS Glue", type: "aws" },
        { id: "Amazon EMR", type: "aws" },
        { id: "Amazon Redshift", type: "aws" },
        { id: "Amazon QuickSight", type: "aws" },
        { id: "Amazon SageMaker (Optional)", type: "aws" },
        { id: "IAM", type: "security" },
        { id: "Amazon Macie", type: "security" },
        { id: "AWS KMS", type: "security" },
        { id: "Amazon CloudWatch", type: "monitoring" },
        { id: "AWS CloudTrail", type: "monitoring" },
        { id: "S3 Cross-Region Replication", type: "backup" },
        { id: "Redshift Snapshot", type: "backup" }
    ],
    links: [
        { source: "IoT Devices", target: "AWS IoT Core", label: "Data Ingestion" },
        { source: "AWS IoT Core", target: "Kinesis Data Streams", label: "Store" },
        { source: "Kinesis Data Streams", target: "S3 Bucket", label: "ETL" },
        { source: "S3 Bucket", target: "AWS Glue", label: "Transformed Data" },
        { source: "AWS Glue", target: "Amazon EMR", label: "Visualization" },
        { source: "Amazon EMR", target: "Amazon Redshift", label: "Advanced Analytics" },
        { source: "IAM", target: "S3 Bucket", label: "Access Control" },
        { source: "Amazon Macie", target: "S3 Bucket", label: "Data Classification" },
        { source: "AWS KMS", target: "S3 Bucket", label: "Encryption" },
        { source: "Amazon CloudWatch", target: "Amazon EMR", label: "Monitoring" },
        { source: "AWS CloudTrail", target: "IAM", label: "Logging" },
        { source: "S3 Cross-Region Replication", target: "S3 Bucket", label: "Backup" },
        { source: "Redshift Snapshot", target: "Amazon Redshift", label: "Backup" }
    ]
};

// Set up the D3.js graph
const svg = d3.select("#chart")
    .append("svg")
    .attr("width", 800)
    .attr("height", 400);

// Define the arrow markers for links
svg.append("defs").selectAll("marker")
    .data(["arrow"])
    .enter()
    .append("marker")
    .attr("id", d => d)
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 25)
    .attr("refY", 0)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M0,-5L10,0L0,5")
    .attr("class", "arrowhead");

// Create a force layout
const simulation = d3.forceSimulation(data.nodes)
    .force("charge", d3.forceManyBody().strength(-200))
    .force("link", d3.forceLink(data.links).distance(150))
    .force("center", d3.forceCenter(400, 200));

// Draw links
const links = svg.selectAll(".link")
    .data(data.links)
    .enter()
    .append("line")
    .attr("class", "link")
    .attr("marker-end", "url(#arrow)");

// Draw nodes
const nodes = svg.selectAll(".node")
    .data(data.nodes)
    .enter()
    .append("g")
    .attr("class", d => `node ${d.type}`);

nodes.append("circle")
    .attr("r", 20);

nodes.append("text")
    .attr("dy", 30)
    .style("text-anchor", "middle")
    .text(d => d.id);

simulation.on("tick", () => {
    links
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    nodes
        .attr("transform", d => `translate(${d.x},${d.y})`);
});
 */