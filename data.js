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

let sectionCount = '<label for="item5">ใบงาน/หน้า</label>'
    sectionCount += '<select class="form-select" name="item5" id="item5" required>'
    sectionCount += '<option value="#" selected disabled>เลือกใบงาน</option>'
    sectionCount += '<option value="ฝึกทักษะเกี่ยวกับหลักการบวกและหลักการคูณ">ฝึกทักษะเกี่ยวกับหลักการบวกและหลักการคูณ</option>'
    sectionCount += '<option value="ฝึกทักษะคำนวณเกี่ยวกับแฟกทอเรียล">ฝึกทักษะคำนวณเกี่ยวกับแฟกทอเรียล</option>'
    sectionCount += '<option value="ฝึกทักษะแก้สมการเกี่ยวกับแฟกทอเรียล">ฝึกทักษะแก้สมการเกี่ยวกับแฟกทอเรียล</option>'
    sectionCount += '<option value="ฝึกทักษะเกี่ยวกับการเรียงสับเปลี่ยน">ฝึกทักษะเกี่ยวกับการเรียงสับเปลี่ยน</option>'
    sectionCount += '<option value="เรียงสับเปลี่ยน(มีของติดกัน)">เรียงสับเปลี่ยน(มีของติดกัน)</option>'
    sectionCount += '<option value="โจทย์ปัญหาการเรียงสับเปลี่ยน">โจทย์ปัญหาการเรียงสับเปลี่ยน</option>'
    sectionCount += '<option value="โจทย์ปัญหาทบทวน">โจทย์ปัญหาทบทวน</option>'
    sectionCount += '<option value="การจัดหมู่(Combination)">การจัดหมู่(Combination)</option>'
    sectionCount += '<option value="โจทย์ปัญหาการจัดหมู่">โจทย์ปัญหาการจัดหมู่</option>'
    sectionCount += '</select>'
    
let sectionProp = '<label for="item5">ใบงาน/หน้า</label>'
    sectionProp += '<select class="form-select" name="item5" id="item5" required>'
    sectionProp += '<option value="#" selected disabled>เลือกใบงาน</option>'
    sectionProp += '<option value="SampleSpace">SampleSpace</option>'
    sectionProp += '<option value="สื่อลูกเต๋า">สื่อลูกเต๋า</option>'
    sectionProp += '<option value="ไพ่ 1 สำรับ">ไพ่ 1 สำรับ</option>'
    sectionProp += '<option value="การสุ่มหยิบสลาก">การสุ่มหยิบสลาก</option>'
    sectionProp += '<option value="การสุ่มหยิบของ 2 สิ่ง">การสุ่มหยิบของ 2 สิ่ง</option>'
    sectionProp += '<option value="การสุ่มหยิบของ 3 สิ่ง">การสุ่มหยิบของ 3 สิ่ง</option>'
    sectionProp += '</select>'

    
let sectionFx = '<label for="item5">ใบงาน/หน้า</label>'
    sectionFx += '<select class="form-select" name="item5" id="item5" required>'
    sectionFx += '<option value="#" selected disabled>เลือกใบงาน</option>'
    sectionFx += '<option value="SampleSpace">SampleSpace</option>'
    sectionFx += '<option value="ผลคูณคาร์ทีเชียน">ผลคูณคาร์ทีเชียน</option>'
    sectionFx += '<option value="ความสัมพันธ์1">ความสัมพันธ์1</option>'
    sectionFx += '<option value="ความสัมพันธ์สู่ฟังก์ชัน">ความสัมพันธ์สู่ฟังก์ชัน</option>'
    sectionFx += '<option value="โดเมน_เรนจ์">โดเมน_เรนจ์</option>'
    sectionFx += '<option value="โดเมน_เรนจ์เศษส่วน">โดเมน_เรนจ์เศษส่วน</option>'
    sectionFx += '<option value="โดเมน_เรนจ์ที่ติดรูท">โดเมน_เรนจ์ที่ติดรูท</option>'
    sectionFx += '<option value="โดเมน_เรนต์ฟังก์ชันกำลังสอง">โดเมน_เรนต์ฟังก์ชันกำลังสอง</option>'
    sectionFx += '<option value="โดเมน_เรนต์ฟังก์ชันค่าสัมบูรณ์">โดเมน_เรนต์ฟังก์ชันค่าสัมบูรณ์</option>'
    sectionFx += '<option value="โดเมน_เรนต์ฟังก์ชันค่าสัมบูรณ์">โดเมน_เรนต์ฟังก์ชันค่าสัมบูรณ์</option>'
    sectionFx += '<option value="ค่าของฟังก์ชัน_คู่อันดับ>ค่าของฟังก์ชัน_คู่อันดับ/option>'
    sectionFx += '<option value="ค่าของฟังก์ชัน_StepFx>ค่าของฟังก์ชัน_StepFx/option>'
    sectionFx += '<option value="ค่าของฟังก์ชัน_f(x)_g(x)>ค่าของฟังก์ชัน_f(x)_g(x)/option>'
    sectionFx += '</select>'

let sectionExpo = '<label for="item5">ใบงาน/หน้า</label>'
    sectionExpo += '<select class="form-select" name="item5" id="item5" required>'
    sectionExpo += '<option value="#" selected disabled>เลือกใบงาน</option>'
    sectionExpo += '<option value="เลขยกกำลัง1">เลขยกกำลัง1</option>'
    sectionExpo += '<option value="เลขยกกำลัง2">เลขยกกำลัง2</option>'
    sectionExpo += '<option value="เลขยกกำลัง3">เลขยกกำลัง3</option>'
    sectionExpo += '<option value="เลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็ม">เลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็ม</option>'
    sectionExpo += '<option value="การบวกลบจำนวนที่ติดกรณฑ์">การบวกลบจำนวนที่ติดกรณฑ์</option>'
    sectionExpo += '<option value="การคูณจำนวนที่ติดกรณฑ์">การคูณจำนวนที่ติดกรณฑ์</option>'
    sectionExpo += '<option value="การหารจำนวนที่ติดกรณฑ์โดยสังยุค">การหารจำนวนที่ติดกรณฑ์โดยสังยุค</option>'
    sectionExpo += '<option value="รากที่ n ของจำนวน">รากที่ n ของจำนวน</option>'
    sectionExpo += '</select>'

    
let page = '<label for="item5">ใบงาน/หน้า</label>'
    page += '<input type="tel" class="form-control" id="item5" name="item5" placeholder="พิมพ์เลขหน้า, ปก = 0" required />'

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

$item5 = $("#item5");

//เรื่องย่อย หรือ หน้า
$iditem5 = $("#iditem5");
$item4.on("change", () => {
    var lv = $item1.val() //ชั้น
    var cl = $item2.val() //ห้อง
    var tp = $item3.val() //เรื่อง
    var ty = $item4.val() //ประเภท
    var sh = $item5.val() //ใบงาน/หน้า
    let m4 = $item1.val() + $item2.val();
    console.log(lv,tp,ty)
    $iditem5.empty();
    if (lv == "ม.5" && tp == "หลักการนับ" && ty == "ใบงาน") {
        $iditem5.append(sectionCount);
    }
    if (lv == "ม.5" && tp == "ความน่าจะเป็น" && ty == "ใบงาน") {
        $iditem5.append(sectionProp);
    }

    if (m4 == "ม.48" && tp == "ฟังก์ชัน" && ty == "ใบงาน") {
        $iditem5.append(sectionFx);
    }
    if (m4 == "ม.48" && tp == "ฟังก์ชัน" && ty == "เล่มเอกสาร") {
        $iditem5.append(page);
    }
    if (m4 == "ม.48" && tp == "เลขยกกำลัง" && ty == "ใบงาน") {
        $iditem5.append(sectionExpo);
    }
    if (m4 == "ม.48" && tp == "เลขยกกำลัง" && ty == "เล่มเอกสาร") {
        $iditem5.append(page);
    }
});
