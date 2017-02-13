$(document).ready(function(){
    $('.news-item').fadeIn(2000)
    $('#search-link').click(function(e){
      e.preventDefault()
      $('.search').toggle()
    })
})
