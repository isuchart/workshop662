const url = "https://script.google.com/macros/s/AKfycbzRt_SdL4R65GSisBB3Mdc1Rez_Ga1LW4llnuJUQTSy6OA4_I94UBfl0oQtMC7kYdlo/exec"; //Change API URL 
    //อ่านข้อมูลจาก API
    //chatGPT
    fetch(url)
      .then((response) => response.json())
      .then(json => {
        // Do something with the data
        // console.log(json);
        // console.log(json[0][1]);
      })
    //v
    //ดร.วิเชียร
    fetch(url)
      .then((res) => res.text())
      .then((resdata) => {
        //Parsing the JSON
        const data = JSON.parse(resdata);
        // console.log(data)
      })
    const file1 = document.querySelector("#imgfile1");
    const img1 = document.querySelector("#img1");
    let spt1 = "";
    let type1 = "";
    let imgname1 = "";
    // const file2 = document.querySelector("#imgfile2");
    // const img2 = document.querySelector("#img2");
    // let spt2 = "";
    // let type2 = "";
    // let imgname2 = "";

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

    // file2.addEventListener("change", () => {
    //   let fr = new FileReader();
    //   fr.addEventListener("loadend", () => {
    //     const res = fr.result;
    //     img2.src = res;
    //     spt2 = res.split("base64,")[1];
    //     type2 = file2.files[0].type;
    //     imgname2 = file2.files[0].name;
    //   });
    //   fr.readAsDataURL(file2.files[0]);
    // });


    //Save data to sheet
    const btnsubmit = document.querySelector("#btn-senddata");
    btnsubmit.addEventListener("click", (event) => {
      event.preventDefault();
      startloading();
      const inputname = document.querySelector("#item5").value;
      // console.log(inputname)

      let section 
      if ($("#item4").val() == "เล่มเอกสาร"){
        section = "หน้า "+$("#item5").val()
      }else{
        section = $("#item5").val()
      }
      
      if (spt1 === "" || inputname === "") {
        popup("ตรวจสอบข้อมูลอีกครั้ง");
      } else {
        const obj = {
          action: "write",
          item1: $("#item1").val(),
          item2: $("#item2").val(),
          item3: $("#item3").val(),
          item4: $("#item4").val(),
          item5: section,
          item6: $("#item6").val(),
          item7: $("#item7").val(),
          item8: $("#item8").val(),
          item9: $("#item9").val(),
          item10: $("#item10").val(),
          // tname: $("#tname").val(),
          // t_tel: $("#t_tel").val(),
          // t_email: $("#t_email").val(),
          // t_line: $("#t_line").val(),
          dataimg1: spt1,
          type1: type1,
          imgname1: imgname1,
          // dataimg2: spt2,
          // type2: type2,
          // imgname2: imgname2
        };

        fetch(url, {
          method: "POST",
          body: JSON.stringify(obj)
        })
          .then((r) => r.text())
          .then((data) => {
            popup(data);
            console.log(data);
            // readdata();
          });
        // $("#btn-close").click();
        // location.reload();
      }
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

    function popup(e) {
      Swal.fire({
        title: e,
        text: "",
        imageUrl: "https://cdn-icons-png.flaticon.com/128/5978/5978223.png",
        imageWidth: 80,
        imageHeight: 80
      });
      $("#data-form")[0].reset()
      spt1 = "";
      type1 = "";
      imgname1 = "";
      img1.src = "";
      // spt2 = "";
      // type2 = "";
      // imgname2 = "";
      // img2.src = "";
    }