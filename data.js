let level = '<option value="#" selected disabled>เลือกระดับชั้น</option>'
    level += '<option value="ม.4">ม.4</option>'
    level += '<option value="ม.5">ม.5</option>'

let room = '<option value="#" selected disabled>เลือกห้อง</option>'
    room += '<option value="8">8</option>'
    room += '<option value="10">10</option>'

$item1 = $("#item1")
$item1.append(level)

$item2 = $("#item2")
$item1.on("change", function()  {
   $item2.append(room)
})
