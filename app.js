document.write(prompt('what is your name'))
$(document).ready(function(){
$("h1").click(function () {
    // console.log($(this).text().replace($(this).text(), "hello everyone")) 
    document.getElementsByTagName("h1")[0].innerHTML = "Thank You Goodbye♥☻"
})
})