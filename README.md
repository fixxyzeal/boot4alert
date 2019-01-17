# boot4alert
boot4alert.js Easy &amp; Light weight Javascripts library allow you to create  Bootstrap 4 modals :)
Example & Document Coming Soon Please wait

# Getting Started 

Dependencies

Bootrap version 4.x.x -> https://getbootstrap.com/docs/4.2/getting-started/download/
\Jquery version 3.3.1 -> https://jquery.com/download/

# Example
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
      integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="jumbotron">
      <h1 class="display-4">Welcome to Boot4Alert</h1>

      <hr class="my-4" />
      <button id="bt" class="btn btn-primary" type="button">Hello World</button>
    </div>

    <script
      src="https://code.jquery.com/jquery-3.3.1.min.js"
      integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
      integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
      crossorigin="anonymous"
    ></script>
    <script src="../boot4alert.js"></script>
    <script>
      $("#bt").click(function() {
        boot4.alert("Hello World!", "OK");
      });
    </script>
  </body>
</html>

