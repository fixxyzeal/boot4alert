# boot4alert
boot4alert.js Easy &amp; Light weight Javascripts library allow you to create alert or confirm message with Bootstrap 4 modals :)

# Getting Started 

Dependencies

- [Bootrap version 4.x.x](https://getbootstrap.com/docs/4.2/getting-started/download/)
- [Jquery version 3.3.1](https://jquery.com/download/)

# Example
  - Alert message
  ```javascript
  <script>
  boot4.alert("Hello World!", "OK");
  </script>
  ```
  - Alert message with callback function
  ```javascript
   <script>
    boot4.alert(
      {
        msg: "Call Back",
        title: "Test Callback",
        callback: function() {
          console.log("callback");
        }
      },"OK");
    </script>
   ```
  - Custom Background-color Header Alert message
  ```javascript
     <script>
     boot4.alert(
      {
        msg: "Custom Title",
        title: "Test",
        style: {
          "background-color": "#6200ea",
          color: "white",
          "font-weight": "bold"
        }
      },
      "OK"
    );
    </script>
   ```
  - Confirm message
  ```javascript
  <script>
   boot4.confirm({
      msg: "Confirm",
      title: "Test Confirm",
      callback: function(result) {
        if(result){
          console.log("ok");
        }
        else{
          console.log("cancel");
        }
      }
    });
  </script>
  ```
  # Donate
  Please donate to encourage and support ^ ^ 
  Paypal : http://bit.ly/2FCa13E
