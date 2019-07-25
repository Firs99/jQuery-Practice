$(()=>{
// $('.red, ul').css('color', 'red');
$('#exercise1').on('click', ()=> {
    $('.red, ul').css('color', 'red');
});
$('#exercise2').on('click', ()=> {
    $('div > p').css('color', 'blue');
});
$('#exercise3').on('click', ()=> {
    $('p > img ~ strong').css('font-style', 'italic');
});
$('#exercise4').on('click', ()=> {
    $('.blocks > div').css('background', 'aqua')
})
});
