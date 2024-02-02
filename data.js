let level = '<option value="#" selected disabled>เลือกระดับชั้น</option>'
    level += '<option value="ม.4">ม.4</option>'
    level += '<option value="ม.5">ม.5</option>'

let room4 = '<option value="#" selected disabled>เลือกห้อง</option>'
    room4 += '<option value="8">8</option>'
    room4 += '<option value="10">10</option>'
    
let room5 = '<option value="#" selected disabled>เลือกห้อง</option>'
    room5 += '<option value="6">6</option>'
    room5 += '<option value="7">7</option>'
    room5 += '<option value="8">8</option>'
    room5 += '<option value="9">9</option>'

let topic48 = '<option value="#" selected disabled>เลือกเรื่อง</option>'
    topic48 += '<option value="ฟังก์ชัน">ฟังก์ชัน</option>'
    topic48 += '<option value="เลขยกกำลัง">เลขยกกำลัง</option>'
    
let topic410 = '<option value="#" selected disabled>เลือกเรื่อง</option>'
    topic410 += '<option value="ฟังก์ชัน">ฟังก์ชัน</option>'
    topic410 += '<option value="เรขาคณิตพื้นฐาน">ฟังก์ชัน</option>'
    topic410 += '<option value="เลขยกกำลัง">เลขยกกำลัง</option>'
    topic410 += '<option value="ฟังก์ชันExpo">ฟังก์ชันExpo</option>'
    topic410 += '<option value="ภาคตัดกรวย">ภาคตัดกรวย</option>'
    
let topic5 = '<option value="#" selected disabled>เลือกเรื่อง</option>'
    topic5 += '<option value="หลักการนับ">หลักการนับ</option>'
    topic5 += '<option value="ความน่าจะเป็น">ความน่าจะเป็น</option>'
    
$item1 = $("#item1")
$item1.append(level)

$item2 = $("#item2")
// $item1.on("change", function()  {
$item1.on("change", () => {
   let lv = $item1.val()
   $item2.empty();
   if(lv=="ม.4"){
       $item2.append(room4)
   }else{
       $item2.append(room5)
   }
})

$item3 = $("#item3")
$item2.on("change", function()  {
   let it = $item1.val()+$item2.val()
   $item3.empty();
   if(it=="ม.48"){
       $item3.append(topic48)
   }else if(it=="ม.410"){
       $item3.append(topic410)
   }else {
       $item3.append(topic5)
}
   
})
