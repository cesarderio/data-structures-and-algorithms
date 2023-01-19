'use strict';
const { Vertex, Edge, Graph } = require('./index');

describe('Graphs and their data', () => {
  it('Node can be successfully added to the graph', () => {
    const graph = new Graph();
    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    const C = graph.addVertex('C');

    expect(console.log(A)).toEqual('A');
    expect(console.log(B)).toEqual('B');
    expect(console.log(C)).toEqual('C');
  });

  it('An edge can be successfully added to the graph', () => {
    const graph = new Graph();

    graph.addDirectedEdge(A, B);
    graph.addDirectedEdge(A, D);
    graph.addDirectedEdge(A, C);
    expect(console.log(graph.addDirectedEdge(A, B))).toEqual(A, B);
    expect(console.log(graph.addDirectedEdge(A, D))).toEqual(A, D);
    expect(console.log(graph.addDirectedEdge(A, C))).toEqual(A, C);
  });

  it('A collection of all nodes can be properly retrieved from the graph', () => {
    const graph = new Graph();

    const A = graph.addVertex('A');
    const B = graph.addVertex('B');
    const C = graph.addVertex('C');
    const D = graph.addVertex('D');
    const E = graph.addVertex('E');

    expect(console.log(A)).toEqual('A');
    expect(console.log(B)).toEqual('B');
    expect(console.log(C)).toEqual('C');
    expect(console.log(D)).toEqual('D');
    expect(console.log(E)).toEqual('E');
  });

  it('All appropriate neighbors can be retrieved from the graph', () => {
    const graph = new Graph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');

    graph.addDirectedEdge(A, B);
    graph.addDirectedEdge(A, D);
    graph.addDirectedEdge(A, C);

    const getNeighbors = console.log(getNeighbors());

    expect(getNeighbors).toEqual('A, B, C, D, E' );
  });

  it('Neighbors are returned with the weight between nodes included', () => {
    const graph = new Graph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');

    graph.addDirectedEdge(A, B);
    graph.addDirectedEdge(A, D);
    graph.addDirectedEdge(A, C);

    const getNeighbors = console.log(getNeighbors());

    expect(getNeighbors).toEqual();
  });

  it('The proper size is returned, representing the number of nodes in the graph', () => {
    const graph = new Graph();

    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addVertex('E');

    expect(console.log(graph.depthFirst())).toEqual('A', 'B', 'C', 'D', 'E');
  });

  it('A graph with only one node and edge can be properly returned', () => {
    const graph = new Graph();
    const A = graph.addVertex('A');

    expect(console.log(A)).toEqual('A');
  });
});
