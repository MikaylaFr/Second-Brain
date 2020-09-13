const Pool = require("pg").Pool;

const pool = new Pool({
    user: "wxojmjciokbpwb",
    password: "a71f202a66b71a305eeebc16d4fd697fad020a14788ff84f0e0e67c61a87c75a",
    host: "ec2-52-207-124-89.compute-1.amazonaws.com", 
    port: 5432, 
    database: "d8mkuqrnt9d7dm"
});

module.exports = pool;
