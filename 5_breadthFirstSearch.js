const graph = {};

graph['you'] = ['Bob', 'Alex', 'John'];
graph['Bob'] = ['April'];
graph['Alex'] = ['Sam', 'Sussy', 'April'];
graph['John'] = ['Duke', 'Eva'];

function isItYou(name) {
    // for exsample
    return name[name.length - 1] === 'y' ? true : false;
}

function breadthFirstSearch(name) {
    let searched = [];
    let queue = [name];
    while (queue.length != 0) {
        if (isItYou(queue[0])) {
            return queue[0];
        } else {
            if (Array.isArray(graph[queue[0]])) {
                for (let k = 0; k < graph[queue[0]].length; k++) {
                    queue.push(graph[queue[0]][k]);
                }
            } else {
                queue.push(queue[0]);
            }
            searched.push(queue.shift());
        }
    }
}

console.log(breadthFirstSearch('you'));
