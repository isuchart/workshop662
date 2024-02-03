let level = '<option value="#" selected disabled>เลือกระดับชั้น</option>';
level += '<option value="ม.4">ม.4</option>';
level += '<option value="ม.5">ม.5</option>';

let room4 = '<option value="#" selected disabled>เลือกห้อง</option>';
room4 += '<option value="8">8</option>';
room4 += '<option value="10">10</option>';

let room5 = '<option value="#" selected disabled>เลือกห้อง</option>';
room5 += '<option value="6">6</option>';
room5 += '<option value="7">7</option>';
room5 += '<option value="8">8</option>';
room5 += '<option value="9">9</option>';

let topic48 = '<option value="#" selected disabled>เลือกเรื่อง</option>';
topic48 += '<option value="ฟังก์ชัน">ฟังก์ชัน</option>';
topic48 += '<option value="เลขยกกำลัง">เลขยกกำลัง</option>';

let topic410 = '<option value="#" selected disabled>เลือกเรื่อง</option>';
topic410 += '<option value="ฟังก์ชัน">ฟังก์ชัน</option>';
topic410 += '<option value="เรขาคณิตพื้นฐาน">เรขาคณิตพื้นฐาน</option>';
topic410 += '<option value="เลขยกกำลัง">เลขยกกำลัง</option>';
topic410 += '<option value="ฟังก์ชันExpo">ฟังก์ชันExpo</option>';
topic410 += '<option value="ภาคตัดกรวย">ภาคตัดกรวย</option>';

let topic5 = '<option value="#" selected disabled>เลือกเรื่อง</option>';
topic5 += '<option value="หลักการนับ">หลักการนับ</option>';
topic5 += '<option value="ความน่าจะเป็น">ความน่าจะเป็น</option>';

let kind =  '<option value="#" selected disabled>เลือกประเภท</option>';
kind += '<option value="ใบงาน">ใบงาน</option>';
kind += '<option value="เล่มเอกสาร">เล่มเอกสาร</option>';

let section = '<label for="item5">ใบงาน/หน้า</label>'
    section += '<select class="form-select" name="item5" id="item5" required>'
    section += '<option value="#" selected disabled>เลือกใบงาน</option>'
    section += '<option value="ฝึกทักษะเกี่ยวกับหลักการบวกและหลักการคูณ">ฝึกทักษะเกี่ยวกับหลักการบวกและหลักการคูณ</option>'
    section += '<option value="ฝึกทักษะคำนวณเกี่ยวกับแฟกทอเรียล">ฝึกทักษะคำนวณเกี่ยวกับแฟกทอเรียล</option>'
    section += '<option value="ฝึกทักษะแก้สมการเกี่ยวกับแฟกทอเรียล">ฝึกทักษะแก้สมการเกี่ยวกับแฟกทอเรียล</option>'
    section += '<option value="ฝึกทักษะเกี่ยวกับการเรียงสับเปลี่ยน">ฝึกทักษะเกี่ยวกับการเรียงสับเปลี่ยน</option>'
    section += '<option value="เรียงสับเปลี่ยน(มีของติดกัน)">เรียงสับเปลี่ยน(มีของติดกัน)</option>'
    section += '<option value="โจทย์ปัญหาการเรียงสับเปลี่ยน">โจทย์ปัญหาการเรียงสับเปลี่ยน</option>'
    section += '<option value="โจทย์ปัญหาทบทวน">โจทย์ปัญหาทบทวน</option>'
    section += '<option value="การจัดหมู่(Combination)">การจัดหมู่(Combination)</option>'
    section += '<option value="โจทย์ปัญหาการจัดหมู่">โจทย์ปัญหาการจัดหมู่</option>'
    section += '</select>'

let page = '<label for="item5">ใบงาน/หน้า</label>'
    page += '<input type="tel" class="form-control" id="item5" name="item5" placeholder="พิมพ์เลขหน้า" required />'

//ชั้น
$item1 = $("#item1");
$item1.append(level);

//ห้อง
$item2 = $("#item2");
// $item1.on("change", function()  {
$item1.on("change", () => {
  let lv = $item1.val();
  $item2.empty();
  if (lv == "ม.4") {
    $item2.append(room4);
  } else {
    $item2.append(room5);
  }
});

// เรื่อง
$item3 = $("#item3");
$item2.on("change", () => {
  let it = $item1.val() + $item2.val();
  $item3.empty();
  if (it == "ม.48") {
    $item3.append(topic48);
  } else if (it == "ม.410") {
    $item3.append(topic410);
  } else {
    $item3.append(topic5);
  }
});

//ประเภท sheet หรือ เล่มเอกสาร
$item4 = $("#item4");
$item4.append(kind);

//เรื่องย่อย หรือ หน้า
$iditem5 = $("#iditem5");
$item4.on("change", () => {
    let it = $item4.val();
    $iditem5.empty();
    if (it == "ใบงาน") {
        $iditem5.append(section);
    } else {
        $iditem5.append(page);
    }
  });



