// HOMEWORK

// You have been given the task of building and testing a network.
// You are receiving commands and should execute them in the order they have been sent.
//  The commands are made up of three elements: Operation - either 'B' for building a connection or 'T' for testing if
//  the connection exists and providing information as true or false. The last two elements are two IP addresses: the start IP and the
//  end IP.

// [

//     "B 100.100.100.1 100.100.100.2",

//     "B 100.100.100.1 100.100.100.3",

//     "B 100.100.100.10 100.100.100.11",

//     "T 100.100.100.1 100.100.100.3",

//     "T 100.100.100.10 100.100.100.2",

//     "T 100.100.100.10 100.100.100.11",

//     "B 100.100.100.11 100.100.100.2",

//     "T 100.100.100.10 100.100.100.3",

//     "T 100.100.100.100 100.100.100.103",

//   ]

const Network = [
  "B 100.100.100.1 100.100.100.2",

  "B 100.100.100.1 100.100.100.3",

  "B 100.100.100.10 100.100.100.11",

  "T 100.100.100.1 100.100.100.3",

  "T 100.100.100.10 100.100.100.2",

  "T 100.100.100.10 100.100.100.11",

  "B 100.100.100.11 100.100.100.2",

  "T 100.100.100.10 100.100.100.3",

  "T 100.100.100.100 100.100.100.103",
];
const networkGraph = new Map();

const checkNetwork = function (NetworkInput) {
  const nestedNetwork = NetworkInput.map((item) => item.split(" "));
  nestedNetwork.forEach((connection,index) => {
    console.log(`action ${index+1}:`)
    if (connection[0] === "T") {
      console.log(`----testing path between ${connection[1]} and ${connection[2]}-----`);
      if (doesIPExist(connection[1]) && doesIPExist(connection[2])) {
        TestForRoute(connection[1], connection[2]);
      } else {
        console.log(`Route between ${connection[1]} and ${connection[2]} doesnt exist`);
      }
    } else if (connection[0] === "B") {
      addNode(connection[1], connection[2]);
      addEdge(connection[1], connection[2]);
      console.log(`----estabilishing connection  between ${connection[1]} and ${connection[2]}-----`)
    }
  });
};
const addNode = function (start, finish) {
  if (!doesIPExist(start)) {
    networkGraph.set(start, []);
  }
  if (!doesIPExist(finish)) {
    networkGraph.set(finish, []);
  }
};
const addEdge = function (start, finish) {
  networkGraph.get(start).push(finish);
  networkGraph.get(finish).push(start);
};
const doesIPExist = function (Adress) {
  return networkGraph.has(Adress);
};
const TestForRoute = function (startIP, endIP) {
  const visitedAdresses=new Set();
  let isFound=false;
  const queue = [startIP];
    while (queue.length > 0) {
    const IPAdress = queue.shift();
    const possibleConnections = networkGraph.get(IPAdress);
    for (const connection of possibleConnections) {
      if(!visitedAdresses.has(connection)){
        visitedAdresses.add(connection)
        queue.push(connection);
      }
      if (connection === endIP) {
        console.log(`Route between ${startIP} and ${endIP}  exists`);
        isFound=true;
        queue.length=0
      }
    }
  }
  if(!isFound){
    console.log(`Route between ${startIP} and ${endIP} doesnt exist`)
  }
};
checkNetwork(Network);
console.log(`Connections`);
