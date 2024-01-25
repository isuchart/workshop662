//https://www.codewithsundeep.com/2022/11/html-to-google-sheet.html
//Call command to read data from Google Sheets
window.addEventListener("DOMContentLoaded", () => {
  getSession();
  readdata();
});

//App Script URL
const url = "https://script.google.com/macros/s/AKfycbzRt_SdL4R65GSisBB3Mdc1Rez_Ga1LW4llnuJUQTSy6OA4_I94UBfl0oQtMC7kYdlo/exec"; //Change API URL 
console.log(url)
//Upload file  base64
const file1 = document.querySelector("#imgfile1");
const img1 = document.querySelector("#img1");
const file2 = document.querySelector("#imgfile2");
const img2 = document.querySelector("#img2");
let spt1 = "";
let type1 = "";
let imgname1 = "";
let spt2 = "";
let type2 = "";
let imgname2 = "";

file1.addEventListener("change", () => {
  let fr = new FileReader();
  fr.addEventListener("loadend", () => {
    const res = fr.result;
    img1.src = res;
    spt1 = res.split("base64,")[1];
    imgname1 = file1.files[0].name;
    type1 = file1.files[0].type;
  });
  fr.readAsDataURL(file1.files[0]);
});

file2.addEventListener("change", () => {
  let fr = new FileReader();
  fr.addEventListener("loadend", () => {
    const res = fr.result;
    img2.src = res;
    spt2 = res.split("base64,")[1];
    type2 = file2.files[0].type;
    imgname2 = file2.files[0].name;
  });
  fr.readAsDataURL(file2.files[0]);
});

//Save data to sheet
const btnsubmit = document.querySelector("#btn-senddata");
btnsubmit.addEventListener("click", (event) => {
  event.preventDefault();
  startloading();
  const inputname = document.querySelector("#name").value;
  if (spt1 === "" || spt2 === "" || inputname === "") {
    popup("ตรวจสอบข้อมูลอีกครั้ง");
  } else {
    const obj = {
      action: "write",
      fname: $("#name").val(),
      email: $("#email").val(),
      msg: $("#message").val(),
      dataimg1: spt1,
      type1: type1,
      imgname1: imgname1,
      dataimg2: spt2,
      type2: type2,
      imgname2: imgname2
    };

    fetch(url, {
      method: "POST",
      body: JSON.stringify(obj)
    })
      .then((r) => r.text())
      .then((data) => {
        popup(data);
        //console.log(data);
        readdata();
      });
    $("#btn-close").click();
  }
});

// Open the edit modal and populate with data
function openEditModal(e) {
  //console.log(e)
  const data = e.split(",");
  $("#header").html("แก้ไขข้อมูล  " + data[0]);
  $("#ID").val(data[0]);
  $("#name").val(data[1]);
  $("#email").val(data[2]);
  $("#message").val(data[3]);
  $("#img1").attr("src", data[4].split("&")[0]);
  $("#img2").attr("src", data[5].split("&")[0]);
  $("#btn-updatedata").removeClass("d-none");
  $("#btn-senddata").addClass("d-none");
  $("#formModal").modal("show");
}

//Update data to sheet
function updateData() {
  startloading();
  const obj = {
    action: "update",
    ID: $("#ID").val(),
    fname: $("#name").val(),
    email: $("#email").val(),
    msg: $("#message").val(),
    dataimg1: spt1,
    type1: type1,
    imgname1: imgname1,
    dataimg2: spt2,
    type2: type2,
    imgname2: imgname2
  };
  fetch(url, {
    method: "POST",
    body: JSON.stringify(obj)
  })
    .then((r) => r.text())
    .then((data) => {
      popup(data);
      //console.log(data);
      readdata();
    });

  $("#btn-updatedata").addClass("d-none");
  $("#btn-senddata").removeClass("d-none");
  $("#btn-close").click();
}

//Delete data in a worksheet
function delData(id) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3d5afe",
    cancelButtonColor: "#DC4C64",
    confirmButtonText: "Yes"
  }).then((result) => {
    if (result.isConfirmed) {
      startloading();
      const obj = {
        action: "delete",
        ID: id
      };
      fetch(url, {
        method: "POST",
        body: JSON.stringify(obj)
      })
        .then((r) => r.text())
        .then((data) => {
          console.log(data);
          // readdata();
          popup(data);
        });
    }
  });
}

//Read data from google sheet
function readdata() {
  $("#data-table").html("");
  fetch(url)
    .then((res) => res.text())
    .then((resdata) => {
      stoploading();
  
      //Parsing the JSON
      const data = JSON.parse(resdata);
      const status = getSession();
      //DataTable
      new DataTable("#data-table", {
        data: data,
        destroy: true,
        responsive: true,
        order: [0, "desc"], //'asc'
        columns: [
          { title: "#รหัส" },
          { title: "ชื่อ" },
          { title: "อีเมล" },
          { title: "ข้อความ" },
          {
            title: "รูปที่1",
            data: null,
            render: (data, type, row) => {
              const idimg1 = row[4].split("=")[1].split("&")[0];
              return `<button class="btn btn-outline-secondary btn-sm m-0 p-0" onclick = "open_img(\'${idimg1}\'); " data-bs-toggle="modal" data-bs-target="#imgModal">
              <img class="icon" id="imgmodal" src="https://lh5.googleusercontent.com/d/${idimg1}" alt=""/></button>`;
            }
          },
          {
            title: "รูปที่2",
            data: null,
            render: (data, type, row) => {
              const idimg2 = row[5].split("=")[1].split("&")[0];
              return `<button class="btn btn-outline-secondary btn-sm m-0 p-0" onclick = "open_img(\'${idimg2}\');" data-bs-toggle="modal" data-bs-target="#imgModal">
              <img class="icon" id="imgmodal" src="https://lh5.googleusercontent.com/d/${idimg2}" alt=""/></button>`;
            }
          },
          {
            title: "แก้ไข || ลบ",
            data: null,
            render: (data, type, row) => {
              return `<button class="btn btn-primary btn-sm" onclick="openEditModal(\'${row}\')">Edit</button>
      			  <button  class="btn btn-danger btn-sm" onclick = "delData(\'${row[0]}\')" >Del</button>`;
            }
          }
        ],
        columnDefs: [
          { width: "100px", targets: 0 },
          { width: "40%", targets: 3 },
          { width: "100px", targets: -1 },
          status === "เข้าสู่ระบบเสร็จสมบูรณ์"
            ? { target: -1, visible: true }
            : { target: -1, visible: false },
          { responsivePriority: 1, targets: 1 },
          { responsivePriority: 2, targets: -1 }
        ],
        language: {
          url: "https://cdn.datatables.net/plug-ins/1.11.3/i18n/th.json",
          paginate: {
            previous: '<i class="fa-solid fa-caret-left"></i>',
            next: '<i class="fa-solid fa-caret-right"></i>'
          }
        }
      });
      $.fn.DataTable.ext.pager.numbers_length = 5;
    });
}

//Login
const btnSignin = document.querySelector("#btn-signin");
btnSignin.addEventListener("click", function () {
  Swal.fire({
    imageUrl: "https://cdn-icons-png.flaticon.com/128/4413/4413809.png",
    imageWidth: 128,
    imageHeight: 128,
    html: `<div class="d-flex justify-content-center ms-0">
            <div  style="max-width:300px;">
              <div class="input-group mb-3">
                <span class="input-group-text" style="width:100px;">Username</span>
                <input type="text" id="login" class="form-control  mx-0" placeholder="Username">
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" style="width:100px;">Password</span>
                <input type="password" id="password" class="form-control   mx-0" placeholder="Password">
              </div>
            </div>
          </div>`,
    confirmButtonText: "Sign in",
    focusConfirm: false,
    preConfirm: () => {
      const login = Swal.getPopup().querySelector("#login").value;
      const password = Swal.getPopup().querySelector("#password").value;
      if (!login || !password) {
        Swal.showValidationMessage(`Please enter login and passwordxxx`);
      }
      return { userId: login, pwd: password };
    }
  }).then((result) => {
    startloading();
    if (result.value) {
      const obj = {
        action: "signin",
        userID: result.value.userId,
        pwd: result.value.pwd
      };
      fetch(url, {
        method: "POST",
        body: JSON.stringify(obj)
      })
        .then((r) => r.text())
        .then((data) => {
          // console.log(data);
          if (data === "เข้าสู่ระบบเสร็จสมบูรณ์") {
            readdata();
            setSession(data);
          } else {
            stoploading();
            popup(data);
          }
        });
    } else {
      stoploading();
    }
  });
});

//Get value from session memory
function getSession() {
  try{
    const status = sessionStorage.getItem("userApi");
    btnAct(status);
    return status;
  }catch(e){
    const status = '';
    btnAct(status);
    return status;
  }
}

//Set value on session memory
function setSession(sses) {
  if(sses){
    const status = sessionStorage.setItem("userApi", sses);
    btnAct(status);
    return status;
  }else{
    const status = sessionStorage.setItem("userApi", "");
    btnAct(status);
    return status;
  }
}

//Logout
function logout() {
  startloading();
  const obj = { action: "logout" };
  fetch(url, {
    method: "POST",
    body: JSON.stringify(obj)
  })
    .then((r) => r.text())
    .then((data) => {
      setSession();
      readdata();
      popup(data);
    });
}

//Show login or logout button
function btnAct(respons) {
  if (respons === "เข้าสู่ระบบเสร็จสมบูรณ์") {
    $("#btn-signin").addClass("d-none");
    $("#btn-logout").removeClass("d-none");
  } else {
    $("#btn-signin").removeClass("d-none");
    $("#btn-logout").addClass("d-none");
  }
}

//Pop-up notifications
function popup(e) {
  Swal.fire({
    title: e,
    text: "",
    imageUrl: "https://cdn-icons-png.flaticon.com/128/5978/5978223.png",
    imageWidth: 80,
    imageHeight: 80
  });
}

//Clear form
const btnClose = document.querySelector("#btn-close");
btnClose.addEventListener("click", function () {
  $("#formModal form")[0].reset();
  $("#header").html("บันทึกข้อมูล");
  $("#btn-updatedata").addClass("d-none");
  $("#btn-senddata").removeClass("d-none");
  spt1 = "";
  type1 = "";
  imgname1 = "";
  spt2 = "";
  type2 = "";
  imgname2 = "";
  img1.src = "";
  img2.src = "";
});

//Start Loader
function startloading() {
  $("#balloon").addClass("d-none")
  $("html").css("overflow", "hidden");
  $("#overlay").show();
}

//Stop Loader
function stoploading() {
  $("#balloon").removeClass("d-none")
  $("#overlay").hide();
  $("html").css("overflow", "visible");
}

//Open image
function open_img(e) {
  //console.log(e);
  const imglink = "https://lh5.googleusercontent.com/d/" + e;
  $("#imgmodal").attr("src", imglink);
}
