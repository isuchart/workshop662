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

$item1 = $("#item1")
$item1.append(level)

$item2 = $("#item2")
$item1.on("change", function()  {
   let lv = $item1.val()
   $item2.empty();
   if(lv=="ม.4"){
       $item2.append(room4)
   }else{
       $item2.append(room5)
   }
   
})

// chatGPT

// let levelOptions = '<option value="#" selected disabled>เลือกระดับชั้น</option>'
//     levelOptions += '<option value="ม.4">ม.4</option>'
//     levelOptions += '<option value="ม.5">ม.5</option>'

// let roomOptions = '<option value="#" selected disabled>เลือกห้อง</option>'
//     roomOptions += '<option value="8">8</option>'
//     roomOptions += '<option value="10">10</option>'

// $item1 = $("#item1")
// $item1.append(levelOptions)

// $item2 = $("#item2")
// $item1.on("change", function()  {
//    // เคลียร์ option เก่าทุกครั้งที่มีการเปลี่ยนแปลง
//    $item2.empty();
//    // ใช้ .append() เพื่อเพิ่ม option ใหม่ลงใน #item2
//    $item2.append(roomOptions);
// })

