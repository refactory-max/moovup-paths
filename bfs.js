const MAX_INT = Number.MAX_SAFE_INTEGER;

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    bfs(start, end) {
        let visited = {};
        let dist = {};
        let pred = {};
        let bfsQueue = [];

        Object.keys(this.adjacencyList).forEach((vertex) => {
            visited[vertex] = false;
            dist[vertex] = MAX_INT;
            pred[vertex] = null;
        });

        visited[start] = true;
        dist[start] = 0;
        bfsQueue.push(start);

        while (bfsQueue.length > 0) {
            let currentVertex = bfsQueue.shift();
            for (let i=0; i<this.adjacencyList[currentVertex].length; i++) {
                if (visited[this.adjacencyList[currentVertex][i]] == false) {
                    visited[this.adjacencyList[currentVertex][i]] = true;
                    dist[this.adjacencyList[currentVertex][i]] = dist[currentVertex] + 1;
                    pred[this.adjacencyList[currentVertex][i]] = currentVertex;
                    bfsQueue.push(this.adjacencyList[currentVertex][i]);

                    if (this.adjacencyList[currentVertex][i] == end) {
                        let reversedPath = [];
                        let crawl = end;
                        reversedPath.push(crawl);
                        while (pred[crawl] != null) {
                            reversedPath.push(pred[crawl]);
                            crawl = pred[crawl];
                        }
                        let path = reversedPath.reverse();
                        console.log(path);
                        return;
                    }
                }
            }
        }
        console.log(`Unfortunately no path is found`);
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
graph.bfs("A", "F");
