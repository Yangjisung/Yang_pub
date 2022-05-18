//예제1
//레이어팝업(모달창) (보이기, 감추기 2버튼 click, show, hide)
// $('.show-btn').click(function(){
//     $('div').show()
// })

// $('.hide-btn').click(function(){
//     $('div').hide()
// })

//예제 2
//네비게이션 만들때 (보이기/감추기 1버튼 , mouse enter/leave)
$('.btn').mouseenter(function(){
    $('div').show()
})
$('.btn').mouseleave(function(){
    $('div').hide()
})