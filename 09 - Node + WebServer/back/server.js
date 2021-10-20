// const http = require("http");

// const server = http
//   .createServer((req, res) => {
//     let body = "";
//     // header
//     res.writeHead(200, "ok", {
//       "Access-Control-Allow-Headers": "*",
//     });
//     // get main route
//     if (req.method === "GET" && req.url === "/") {
//       res.write("hey");
//       res.end();
//       return;
//     }

//     // when there is data
//     req.on("data", (data) => {
//       console.log(data);
//       body += data;
//     });
//     // end of req
//     req.on("end", () => {
//       res.write(body);
//       res.end();
//     });
//   })
//   .listen(8080, () => {
//     console.log("running on 8080");
//   });
const http = require("http");
const { validStudent } = require("./db");

const server = http
  .createServer((req, res) => {
    let body = "";
    // header
    res.writeHead(200, "ok", {
      "Access-Control-Allow-Origin": "*",
    });
    // get main route
    if (req.method === "GET" && req.url === "/") {
      res.write(JSON.stringify(validStudent));
      res.end();
      return;
    }

    // when there is data
    req.on("data", (data) => {
      body += data;
    });
    // end of req
    req.on("end", () => {
      res.write(body);
      res.end();
    });
  })
  .listen(8080, () => {
    console.log("running on 8080");
  });
