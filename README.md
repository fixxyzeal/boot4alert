# boot4alert
boot4alert.js Easy &amp; Light weight Javascripts library allow you to create Message Alert or Confirm with Bootstrap 4 modals :)

# Getting Started 

Dependencies

- [Bootrap version 4.x.x](https://getbootstrap.com/docs/4.2/getting-started/download/)
- [Jquery version 3.3.1](https://jquery.com/download/)

# Example
  ```javascript
  <script>
  boot4.alert("Hello World!", "OK");
  </script>
  ```
  ```javascript
  <script>
   boot4.confirm({
      msg: "Confirm",
      title: "Test Confirm",
      callback: function(result) {
        console.log(result);
      }
    })
  </script>
  ```
