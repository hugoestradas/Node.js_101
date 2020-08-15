const name = require("./myModule");
//const counter = require("./myModule");

const {inc, dec, getCount} = require("./myModule");

inc();
inc();
inc();
dec();

console.log(getCount());