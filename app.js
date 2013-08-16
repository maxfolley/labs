var express = require("express"),
    http = require("http"),
    path = require("path"),
    app = express(),
    routes = {
        index: function (req, res) {
            res.render("index");
        }
    };

app.configure(function () {
  app.set("port", process.env.PORT || 8080);
  app.set("views", __dirname + "/source/views");
  app.set("view engine", "ejs");
  app.use(express.favicon(__dirname + '/favicon.ico'));
  //app.use(express.favicon());
  app.use(express.logger("dev"));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(require("less-middleware")({ src: __dirname + "/source"}));
  app.use(express.static(path.join(__dirname, "source")));
});

app.get("/", routes.index);

http.createServer(app).listen(app.get("port"), function () {
  console.log("Express server listening on port " + app.get("port"));
});
