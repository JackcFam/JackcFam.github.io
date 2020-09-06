$(function () {
  $.ajax({
    url: "http://localhost:3000/users",
  }).done(function (users) {
    let htmlString = "";
    // Dùng vòng lặp for of
    for (let user of users) {
      htmlString += `<tr>
          <td>${user.name}</td>
          <td>${user.birthday}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>
            <a href="/edit.html?id=${user.id}" class="text-info"
              ><i class="fa fa-edit"></i> Chỉnh sửa</a
            >
            |
            <a a href = "javascript:void(0)"
            class = "text-danger"
            onclick = "confirmDelete(${user.id})"
              >
              <i class="fa fa-trash-alt"></i> Xóa
              </a>
          </td>
        </tr>`;
    }

    // Thay đổi nội dung HTML của thẻ tbody thành chuỗi htmlString ở trên
    $("#table-users").html(htmlString);
  });
});

let idStudent = 0;

function confirmDelete(id) {
  studentId = id;
  console.log(studentId);
  $("#exampleModal").modal("show");
}

function deleteStudent() {
  $.ajax({
      url: "http://localhost:3000/users/" + studentId,
      method: "DELETE"
    })
    .done(function (result) {
      // C1: Tải lại trang
      const tdElement = $('.text-danger').parent();
      const trElement = tdElement.parent();
      trElement.remove();
      $("#exampleModal").modal("hide");
      location.reload();
      // C2: Không tải lại trang
      // Lấy lại danh sách users, sau đó render lại table => Tốn thời gian lấy lại danh sách users

      // C3: Không tải lại trang
      // Dòng DOM để xóa

    })
    .fail(function (err) {
      if (err.status == 404) {
        alert("Hoc vien khong ton tai");
      } else {
        alert("Khong xoa duoc");
      }
    });
}
