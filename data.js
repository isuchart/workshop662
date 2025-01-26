let level = '<option value="#" selected disabled>เลือกระดับชั้น</option>';
level += '<option value="ม.4">ม.4</option>';
level += '<option value="ม.5">ม.5</option>';

let room4 = '<option value="#" selected disabled>เลือกห้อง</option>';
//room4 += '<option value="8">8</option>';
room4 += '<option value="10">10</option>';

let room5 = '<option value="#" selected disabled>เลือกห้อง</option>';
room5 += '<option value="4">4</option>';
room5 += '<option value="10">10</option>';
//room5 += '<option value="8">8</option>';
//room5 += '<option value="9">9</option>';

let topic48 = '<option value="#" selected disabled>เลือกเรื่อง</option>';
topic48 += '<option value="ฟังก์ชัน">set</option>';
topic48 += '<option value="เลขยกกำลัง">เลขยกกำลัง</option>';

let topic410 = '<option value="#" selected disabled>เลือกเรื่อง</option>';
topic410 += '<option value="เลขยกกำลัง">เลขยกกำลัง</option>';
// topic410 += '<option value="จำนวนจริง">จำนวนจริง</option>';
// topic410 += '<option value="ตรรกศาสตร์">ตรรกศาสตร์</option>';
//topic410 += '<option value="ฟังก์ชันExpo">ฟังก์ชันExpo</option>';
//topic410 += '<option value="ภาคตัดกรวย">ภาคตัดกรวย</option>';

let topic5 = '<option value="#" selected disabled>เลือกเรื่อง</option>';
topic5 += '<option value="หลักการนับ">หลักการนับ</option>';
topic5 += '<option value="ความน่าจะเป็น">ความน่าจะเป็น</option>';
// topic5 += '<option value="ลำดับ">ลำดับ</option>';
// topic5 += '<option value="อนุกรม">อนุกรม</option>';
// topic5 += '<option value="ค่าของเงิน">ค่าของเงิน</option>';
// topic5 += '<option value="ฟังก์ชันตรีโกณมิติ">ฟังก์ชันตรีโกณมิติ</option>';
// topic5 += '<option value="เมตริกซ์">เมตริกซ์</option>';
// topic5 += '<option value="เวคเตอร์ในระบบ 3 มิติ">เวคเตอร์ในระบบ 3 มิติ</option>';

let kind4 =  '<option value="#" selected disabled>เลือกประเภท</option>';
kind4 += '<option value="สอบออนไลน์">สอบออนไลน์</option>';
kind4 += '<option value="ใบงาน">ใบงาน</option>';
// kind4 += '<option value="เล่มเอกสาร">เล่มเอกสาร</option>';

let kind5 =  '<option value="#" selected disabled>เลือกประเภท</option>';
kind5 += '<option value="สอบออนไลน์">สอบออนไลน์</option>';
kind5 += '<option value="ใบงาน">ใบงาน</option>';
//kind5 += '<option value="เล่มเอกสาร">เล่มเอกสาร</option>';

let sectionCount = '<label for="item5">รายการ</label>'
    sectionCount += '<select class="form-select" name="item5" id="item5" required>'
    sectionCount += '<option value="#" selected disabled>เลือกรายการ</option>'
    sectionCount += '<option value="ฝึกทักษะเกี่ยวกับหลักการบวกและหลักการคูณ">ฝึกทักษะเกี่ยวกับหลักการบวกและหลักการคูณ</option>'
    sectionCount += '<option value="ฝึกทักษะคำนวณเกี่ยวกับแฟกทอเรียล">ฝึกทักษะคำนวณเกี่ยวกับแฟกทอเรียล</option>'
    sectionCount += '<option value="ฝึกทักษะแก้สมการเกี่ยวกับแฟกทอเรียล">ฝึกทักษะแก้สมการเกี่ยวกับแฟกทอเรียล</option>'
    sectionCount += '<option value="ฝึกทักษะเกี่ยวกับการเรียงสับเปลี่ยน">ฝึกทักษะเกี่ยวกับการเรียงสับเปลี่ยน</option>'
    sectionCount += '<option value="เรียงสับเปลี่ยน(มีของติดกัน)">เรียงสับเปลี่ยน(มีของติดกัน)</option>'
    sectionCount += '<option value="โจทย์ปัญหาการเรียงสับเปลี่ยน">โจทย์ปัญหาการเรียงสับเปลี่ยน</option>'
    sectionCount += '<option value="โจทย์ปัญหาทบทวน">โจทย์ปัญหาทบทวน</option>'
    sectionCount += '<option value="การจัดหมู่(Combination)">การจัดหมู่(Combination)</option>'
    sectionCount += '<option value="การจัดหมู่(Combination)">ฝึกทักษะเกี่ยวกับการจัดหมู่ของสิ่งของ</option>'
    sectionCount += '<option value="โจทย์ปัญหาการจัดหมู่">โจทย์ปัญหาการจัดหมู่</option>'
    sectionCount += '</select>'

let sectionSequence = '<label for="item5">รายการ</label>'
    sectionSequence += '<select class="form-select" name="item5" id="item5" required>'
    sectionSequence += '<option value="#" selected disabled>เลือกรายการ</option>'
    sectionSequence += '<option value="แบบฝึกหัดที่ 1 ความหมายชองลำดับ">แบบฝึกหัดที่ 1 ความหมายชองลำดับ</option>'
    sectionSequence += '<option value="แบบฝึกหัดที่ 2.1 ลำดับเลขคณิต1">แบบฝึกหัดที่ 2.1 ลำดับเลขคณิต1</option>'
    sectionSequence += '<option value="แบบฝึกหัดที่ 2.2 ลำดับเลขคณิต2">แบบฝึกหัดที่ 2.2 ลำดับเลขคณิต2</option>'
    sectionSequence += '<option value="แบบฝึกหัดที่ 2.3 ลำดับเลขคณิต3">แบบฝึกหัดที่ 2.3 ลำดับเลขคณิต3</option>'
    sectionSequence += '<option value="แบบฝึกหัดที่ 2.4 ลำดับเลขคณิต4">แบบฝึกหัดที่ 2.4 ลำดับเลขคณิต4</option>'
    sectionSequence += '<option value="แบบฝึกหัดที่ 2.5 ลำดับเลขคณิต5">แบบฝึกหัดที่ 2.5 ลำดับเลขคณิต5</option>'
    sectionSequence += '<option value="แบบฝึกหัดที่ 2.6 ลำดับเลขคณิต6">แบบฝึกหัดที่ 2.6 ลำดับเลขคณิต6</option>'
    sectionSequence += '<option value="แบบฝึกหัดที่ 2.7 ลำดับเลขคณิต7">แบบฝึกหัดที่ 2.7 ลำดับเลขคณิต7</option>'
    sectionSequence += '<option value="แบบฝึกหัดที่ 2.8 ลำดับเลขคณิต8">แบบฝึกหัดที่ 2.8 ลำดับเลขคณิต8</option>'
    sectionSequence += '<option value="แบบฝึกหัดที่ 2.9 ลำดับเลขคณิต9">แบบฝึกหัดที่ 2.9 ลำดับเลขคณิต9</option>'
    sectionSequence += '<option value="แบบฝึกหัดที่ 2.10 ลำดับเลขคณิต10">แบบฝึกหัดที่ 2.10 ลำดับเลขคณิต10</option>'
    sectionSequence += '<option value="แบบฝึกหัดที่ 2.11 ลำดับเลขคณิต11">แบบฝึกหัดที่ 2.11 ลำดับเลขคณิต11</option>'
    sectionSequence += '</select>'
    
let sectionProp = '<label for="item5">รายการ</label>'
    sectionProp += '<select class="form-select" name="item5" id="item5" required>'
    sectionProp += '<option value="#" selected disabled>เลือกรายการ</option>'
    sectionProp += '<option value="SampleSpace">SampleSpace</option>'
    sectionProp += '<option value="สื่อลูกเต๋า">สื่อลูกเต๋า</option>'
    sectionProp += '<option value="ไพ่ 1 สำรับ">ไพ่ 1 สำรับ</option>'
    sectionProp += '<option value="การสุ่มหยิบสลาก">การสุ่มหยิบสลาก</option>'
    sectionProp += '<option value="การสุ่มหยิบของ 2 สิ่ง">การสุ่มหยิบของ 2 สิ่ง</option>'
    sectionProp += '<option value="การสุ่มหยิบของ 3 สิ่ง">การสุ่มหยิบของ 3 สิ่ง</option>'
    sectionProp += '</select>'

    
let sectionFx = '<label for="item5">รายการ</label>'
    sectionFx += '<select class="form-select" name="item5" id="item5" required>'
    sectionFx += '<option value="#" selected disabled>เลือกรายการ</option>'
    sectionFx += '<option value="ผลคูณคาร์ทีเชียน">ผลคูณคาร์ทีเชียน</option>'
    sectionFx += '<option value="ความสัมพันธ์1">ความสัมพันธ์1</option>'
    sectionFx += '<option value="ความสัมพันธ์สู่ฟังก์ชัน">ความสัมพันธ์สู่ฟังก์ชัน</option>'
    sectionFx += '<option value="โดเมนและเรนจ์ของความสัมพันธ์">โดเมนและเรนจ์ของความสัมพันธ์</option>'
    sectionFx += '<option value="โดเมนและเรนจ์ฟังก์ชันที่ติดกรณฑ์">โดเมนและเรนจ์ฟังก์ชันที่ติดกรณฑ์</option>'
    sectionFx += '<option value="โดเมนและเรนจ์ฟังก์ชันที่ติดกรณฑ์">โดเมนและเรนจ์ในรูปเศษส่วน</option>'
    sectionFx += '<option value="โดเมน_เรนต์ฟังก์ชันกำลังสอง">โดเมนและเรนจ์จากฟังก์ชันกำลังสอง</option>'
    sectionFx += '<option value="โดเมนและเรนจ์จากฟังก์ชันกำลังสอง">โดเมนและเรนต์ฟังก์ชันติดค่าสัมบูรณ์</option>'
    sectionFx += '<option value="ค่าของฟังก์ชัน y=f(x)">ค่าของฟังก์ชัน y=f(x)</option>'
    sectionFx += '<option value="การหาค่าของฟังก์ชัน:y=f(x)">การหาค่าของฟังก์ชัน:y=f(x)</option>'
    sectionFx += '<option value="การหาค่าของ step function f(x)=y">การหาค่าของ step function f(x)=y</option>'
    sectionFx += '<option value="ค่าของฟังก์ชัน_StepFx">ค่าของฟังก์ชัน_StepFx</option>'
    sectionFx += '<option value="โดเมน_เรนจ์ที่ติดรูท">โดเมน_เรนจ์ที่ติดรูท</option>'
    sectionFx += '<option value="ค่าของฟังก์ชัน_คู่อันดับ">ค่าของฟังก์ชัน_คู่อันดับ</option>'
    sectionFx += '<option value="ค่าของฟังก์ชัน_f(x)_g(x)">ค่าของฟังก์ชัน_f(x)_g(x)</option>'
    sectionFx += '</select>'

let sectionExpo = '<label for="item5">รายการ</label>'
    sectionExpo += '<select class="form-select" name="item5" id="item5" required>'
    sectionExpo += '<option value="#" selected disabled>เลือกรายการ</option>'
    sectionExpo += '<option value="เลขยกกำลัง1">เลขยกกำลัง1</option>'
    sectionExpo += '<option value="เลขยกกำลัง2">เลขยกกำลัง2</option>'
    sectionExpo += '<option value="เลขยกกำลัง3">เลขยกกำลัง3</option>'
    sectionExpo += '<option value="เลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็ม">เลขยกกำลังที่มีเลขชี้กำลังเป็นจำนวนเต็ม</option>'
    sectionExpo += '<option value="การบวกลบจำนวนที่ติดกรณฑ์">การบวกลบจำนวนที่ติดกรณฑ์</option>'
    sectionExpo += '<option value="การคูณจำนวนที่ติดกรณฑ์">การคูณจำนวนที่ติดกรณฑ์</option>'
    sectionExpo += '<option value="การหารจำนวนที่ติดกรณฑ์โดยสังยุค">การหารจำนวนที่ติดกรณฑ์โดยสังยุค</option>'
    sectionExpo += '<option value="รากที่ n ของจำนวน">รากที่ n ของจำนวน</option>'
    sectionExpo += '</select>'

let sectionSet = '<label for="item5">รายการ</label>'
    sectionSet += '<select class="form-select" name="item5" id="item5" required>'
    sectionSet += '<option value="#" selected disabled>เลือกรายการ</option>'
    sectionSet += '<option value="ใบงานที่ 1 สมาชิกและจำนวนสมาชิกของเซต">ใบงานที่ 1 สมาชิกและจำนวนสมาชิกของเซต</option>'
    sectionSet += '<option value="ใบงานที่ 2 เซตจำกัดเซตอนันต์">ใบงานที่ 2 เซตจำกัดเซตอนันต์2</option>'
    sectionSet += '<option value="ใบงานที่ 3 สับเซตกับสมาชิก">ใบงานที่ 3 สับเซตกับสมาชิก</option>'
    sectionSet += '<option value="ใบงานที่ 4 ฝึกสร้างสับเซต">ใบงานที่ 4 ฝึกสร้างสับเซต</option>'
    //sectionSet += '<option value="การบวกลบจำนวนที่ติดกรณฑ์">การบวกลบจำนวนที่ติดกรณฑ์</option>'
    //sectionSet += '<option value="การคูณจำนวนที่ติดกรณฑ์">การคูณจำนวนที่ติดกรณฑ์</option>'
    //sectionSet += '<option value="การหารจำนวนที่ติดกรณฑ์โดยสังยุค">การหารจำนวนที่ติดกรณฑ์โดยสังยุค</option>'
    //sectionSet += '<option value="รากที่ n ของจำนวน">รากที่ n ของจำนวน</option>'
    sectionSet += '</select>'

let page = '<label for="item5">รายการ</label>'
    page += '<input type="tel" class="form-control" id="item5" name="item5" placeholder="พิมพ์เลขหน้า, ปก = 0" required />'

let pageSet = '<label for="item5">รายการ</label>'
    pageSet += '<select class="form-select" name="item5" id="item5" required>'
    pageSet += '<option value="#" selected disabled>เลือกรายการ</option>'
    pageSet += '<option value="หน้าปก">หน้าปก</option>'
    pageSet += '<option value="หน้า 3">หน้า 3</option>'
    pageSet += '<option value="หน้า 5">หน้า 5</option>'
    pageSet += '<option value="หน้า 7">หน้า 7</option>'
    pageSet += '<option value="หน้า 11">หน้า 11</option>'
    pageSet += '<option value="หน้า 28">หน้า 28</option>'
    pageSet += '<option value="หน้า 35">หน้า 35</option>'
    pageSet += '<option value="หน้า 37">หน้า 37</option>'
    pageSet += '<option value="หน้า 38">หน้า 38</option>'
    pageSet += '<option value="หน้า 43">หน้า 43</option>'
    pageSet += '</select>'

let pageExpo = '<label for="item5">รายการ</label>'
    pageExpo += '<select class="form-select" name="item5" id="item5" required>'
    pageExpo += '<option value="#" selected disabled>เลือกรายการ</option>'
    pageExpo += '<option value="Expo1">Expo1</option>'
    pageExpo += '<option value="expo2">expo2</option>'
    pageExpo += '<option value="หน้า 5">หน้า 5</option>'
    pageExpo += '<option value="หน้า 7">หน้า 7</option>'
    pageExpo += '<option value="หน้า 11">หน้า 11</option>'
    pageExpo += '<option value="หน้า 28">หน้า 28</option>'
    pageExpo += '<option value="หน้า 35">หน้า 35</option>'
    pageExpo += '<option value="หน้า 37">หน้า 37</option>'
    pageExpo += '<option value="หน้า 38">หน้า 38</option>'
    pageExpo += '<option value="หน้า 43">หน้า 43</option>'
    pageExpo += '</select>'

let countOnline = '<label for="item5">รายการ</label>'
    countOnline += '<select class="form-select" name="item5" id="item5" required>'
    countOnline += '<option value="#" selected disabled>เลือกรายการ</option>'
    countOnline += '<option value="หลักการนับ1">หลักการนับ1</option>'
    countOnline += '<option value="หลักการนับ2">หลักการนับ2</option>'
    countOnline += '<option value="หลักการนับ3">หลักการนับ3</option>'
    countOnline += '<option value="หลักการนับ4">หลักการนับ4</option>'
    countOnline += '<option value="หลักการนับ5">หลักการนับ5</option>'
    countOnline += '<option value="หลักการนับ6">หลักการนับ6</option>'
    countOnline += '<option value="หลักการนับ7">หลักการนับ7</option>'
    // countOnline += '<option value="หน้า 37">หน้า 37</option>'
    // countOnline += '<option value="หน้า 38">หน้า 38</option>'
    // countOnline += '<option value="หน้า 43">หน้า 43</option>'
    countOnline += '</select>'

let propOnline = '<label for="item5">รายการ</label>'
    propOnline += '<select class="form-select" name="item5" id="item5" required>'
    propOnline += '<option value="#" selected disabled>เลือกรายการ</option>'
    propOnline += '<option value="ความน่าจะเป็น1">ความน่าจะเป็น1</option>'
    propOnline += '<option value="ความน่าจะเป็น2">ความน่าจะเป็น2</option>'
    propOnline += '<option value="ความน่าจะเป็น3">ความน่าจะเป็น3</option>'
    propOnline += '<option value="ความน่าจะเป็น4">ความน่าจะเป็น4</option>'
    propOnline += '<option value="ความน่าจะเป็น5">ความน่าจะเป็น5</option>'
    propOnline += '<option value="ความน่าจะเป็น6">ความน่าจะเป็น6</option>'
    // propOnline += '<option value="ความน่าจะเป็น7">ความน่าจะเป็น7</option>'
    // countOnline += '<option value="หน้า 37">หน้า 37</option>'
    // countOnline += '<option value="หน้า 38">หน้า 38</option>'
    // countOnline += '<option value="หน้า 43">หน้า 43</option>'
    countOnline += '</select>'

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
$item3.on("change", () => {
    let lv = $item1.val();
    console.log(lv)
    $item4.empty();
    if (lv == "ม.4" ){
        $item4.append(kind4);
    }else {
        $item4.append(kind5);
    }
})


$item5 = $("#item5");

//เรื่องย่อย หรือ หน้า
$iditem5 = $("#iditem5");
$item4.on("change", () => {
    var lv = $item1.val() //ชั้น
    var cl = $item2.val() //ห้อง
    var tp = $item3.val() //เรื่อง
    var ty = $item4.val() //ประเภท
    var sh = $item5.val() //รายการ
    let m4 = $item1.val() + $item2.val();
    console.log(lv,tp,ty)
    $iditem5.empty();
    if (lv == "ม.5" && tp == "หลักการนับ" && ty == "ใบงาน") {
        $iditem5.append(sectionCount);
    }
    if (lv == "ม.5" && tp == "ความน่าจะเป็น" && ty == "ใบงาน") {
        $iditem5.append(sectionProp);
    }
    if (lv == "ม.5" && tp == "ลำดับ" && ty == "ใบงาน") {
        $iditem5.append(sectionSequence);
    }
    if (lv == "ม.5" && tp == "หลักการนับ" && ty == "สอบออนไลน์") {
        $iditem5.append(countOnline);
    }
    if (lv == "ม.5" && tp == "ความน่าจะเป็น" && ty == "สอบออนไลน์") {
        $iditem5.append(propOnline);
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

    if (m4 == "ม.410" && tp == "เซต" && ty == "ใบงาน") {
        $iditem5.append(sectionSet);
    }

    if (m4 == "ม.410" && tp == "เซต" && ty == "เล่มเอกสาร") {
        $iditem5.append(pageExpo);
    }
    
    if (m4 == "ม.410" && tp == "ฟังก์ชัน" && ty == "ใบงาน") {
        $iditem5.append(sectionFx);
    }
    if (m4 == "ม.410" && tp == "ฟังก์ชัน" && ty == "เล่มเอกสาร") {
        $iditem5.append(page);
    }
    if (m4 == "ม.410" && tp == "เลขยกกำลัง" && ty == "ใบงาน") {
        $iditem5.append(sectionExpo);
    }
    if (m4 == "ม.410" && tp == "เลขยกกำลัง" && ty == "เล่มเอกสาร") {
        $iditem5.append(page);
    }
    if (m4 == "ม.410" && tp == "เลขยกกำลัง" && ty == "สอบออนไลน์") {
        $iditem5.append(pageExpo);
    }
    if (m4 == "ม.410" && tp == "เรขาคณิตวิเคราะห์พื้นฐาน" && ty == "เล่มเอกสาร") {
        $iditem5.append(page);
    }
    if (m4 == "ม.410" && tp == "ภาคตัดกรวย" && ty == "เล่มเอกสาร") {
        $iditem5.append(page);
    }
    if (m4 == "ม.410" && tp == "ฟังก์ชันExpo" && ty == "เล่มเอกสาร") {
        $iditem5.append(page);
    }

});
