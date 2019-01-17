"use strict";

var modalTemplate = {
  dialog:
    '<div id="boot4alert" class="modal fade">' +
    '<div class="modal-dialog">' +
    '<div class="modal-content">' +
    '<div class="modal-body"></div>' +
    "</div>" +
    "</div>" +
    "</div>",
  header:
    '<div class="modal-header">' + '<h5 class="modal-title"></h5>' + "</div>",
  footer: '<div class="modal-footer"></div>',
  closeButton:
    '<button class="close" style="margin-top: -15px;"  data-dismiss="modal">' +
    "<span>&times;</span>" +
    "</button>",
  button:
    '<button class="btn btn-primary" data-dismiss="modal" type="button"></button>'
};

var dialog = $(modalTemplate.dialog);
var body = dialog.find(".modal-body");

function Initial(msg, btnMsg) {
  console.log(msg);
  var tmsg = "";

  if (msg.msg != undefined) {
    tmsg = msg.msg;
  } else if (msg.title != undefined) {
    tmsg = msg.msg;
  } else {
    tmsg = msg + modalTemplate.closeButton;
  }

  body.after(modalTemplate.footer);
  dialog.find(".modal-body").html(tmsg);

  if (msg.title != undefined) {
    body.before(modalTemplate.header);
    dialog.find(".modal-header").html(msg.title + modalTemplate.closeButton);
  }
  dialog.find(".modal-footer").html(modalTemplate.button);
  dialog.find(".btn").html(btnMsg);

  if (msg.size != undefined) {
    switch (msg.size) {
      case "sm":
        dialog.find(".modal-dialog").addClass("modal-sm");
        break;
      case "lg":
        dialog.find(".modal-dialog").addClass("modal-lg");
        break;
      case "xl":
        dialog.find(".modal-dialog").addClass("modal-xl");
        break;
      default:
        break;
    }
  }
}

var boot4 = {
  alert: function(msg, btnMsg, options) {
    Initial(msg, btnMsg);
    $("body").append(dialog);
    return $("#boot4alert").modal(options);
  }
};
