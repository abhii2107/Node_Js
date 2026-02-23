// module is needed to export 

function add(a,b) {
    return a+b;
}
function Sub(a,b) {
    return a-b;
}

module.exports = {add,Sub}

// module.exports = add;

// module.exports = {
//    addFn: add,
//    subFn: Sub,
// };


// exports.add = (a,b) => {a+b};

// exports.sub = (a,b) => {a-b};