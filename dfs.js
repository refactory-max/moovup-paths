class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    dfs(start, end, visited = {}, path = []) {
        visited[start] = true;
        path.push(start);

        if (start === end) {
            console.log(path);
        } else {
            for (const vertex of this.adjacencyList[start]) {
                if (!visited[vertex]) {
                    this.dfs(vertex, end, visited, path);
                }
            }
        }

        path.pop();
        visited[start] = false;
    }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");
graph.addVertex("H");

graph.addEdge("A", "B");
graph.addEdge("A", "D");
graph.addEdge("A", "H");
graph.addEdge("B", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "F");
graph.addEdge("D", "E");
graph.addEdge("E", "F");
graph.addEdge("E", "H");
graph.addEdge("F", "G");
graph.addEdge("G", "H");

// Modify this line to test different paths
graph.dfs("A", "H");
