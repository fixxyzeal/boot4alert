QUnit.module("module a", function() {
  QUnit.test("Hello world", function(assert) {
    assert.ok(boot4.alert("Hello World!", "OK"), "Passed!");
  });
  QUnit.test("Small Size Modal", function(assert) {
    assert.ok(boot4.alert({ msg: "test", size: "sm" }, "OK"), "Passed!");
  });
});

QUnit.test("Large Size Modal", function(assert) {
  assert.ok(boot4.alert({ msg: "test", size: "lg" }, "OK"), "Passed!");
});

QUnit.test("Extra-Large Size Modal", function(assert) {
  assert.ok(boot4.alert({ msg: "test", size: "xl" }, "OK"), "Passed!");
});

QUnit.test("Back-Drop", function(assert) {
  assert.ok(
    boot4.alert("Example With BackDrop", "OK", { backdrop: true }),
    "Passed!"
  );
});

QUnit.test("Toogle", function(assert) {
  assert.ok(boot4.alert("Example With Toggle", "OK", "toggle"), "Passed!");
});

QUnit.test("Keyboard-False", function(assert) {
  assert.ok(
    boot4.alert("Example With KeyBoardFalse", "OK", { keyboard: false }),
    "Passed!"
  );
});

QUnit.test("Title", function(assert) {
  assert.ok(boot4.alert({ msg: "Test", title: "My Title" }, "OK"), "Passed!");
});

QUnit.test("Test Call back function", function(assert) {
  assert.ok(
    boot4.alert(
      {
        msg: "Call Back",
        title: "Test Callback",
        callback: function() {
          console.log("callback");
        }
      },
      "OK"
    ),
    "Passed!"
  );
});

QUnit.test("Custom Title style", function(assert) {
  assert.ok(
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
    ),
    "Passed!"
  );
});

QUnit.test("Test Confirm", function(assert) {
  assert.ok(
    boot4.confirm({
      msg: "Confirm",
      title: "Test Confirm",
      callback: function(result) {
        console.log(result);
      }
    }),
    "Passed!"
  );
});
