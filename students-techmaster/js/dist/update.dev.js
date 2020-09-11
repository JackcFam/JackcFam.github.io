"use strict";

function getIdQueryParam() {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

var userid = getIdQueryParam();
console.log(userid);
var http = "http://localhost:3000/users";
$(function () {
  $.ajax({
    url: http + "/" + userid,
    context: document.body
  }).done(function (users) {
    $("#name").val(users.name);
    $("#birthYear").val(users.birthday);
    $("#email").val(users.email);
    $("#phone").val(users.phone);
  });
});

function repairInfo() {
  if (true) {
    $.ajax({
      url: http + "/" + userid,
      method: "PUT",
      data: {
        "name": $("#name").val(),
        "birthday": $("#birthYear").val(),
        "email": $("#email").val(),
        "phone": $("#phone").val()
      }
    });
  }
}

function updateUser() {
  $.ajax({
    url: "http://localhost:3000/users" + '/' + userid,
    method: "PUT",
    data: {
      name: $('#name').val(),
      birthday: $('#birthYear').val(),
      email: $('#email').val(),
      phone: $('#phone').val()
    }
  }).done(function () {
    window.location.href = '/';
  });
}