$(document).ready(function() {

$("p.prize-info").hide()

$('button.learn-more').click(function() {
  $("p.prize-info").toggle();
});

$( ".well.prize-index:contains('gold')" ).css({ "border-color": "gold", "border-width": "5px" });
$( ".well.prize-index:contains('silver')" ).css({ "border-color": "silver", "border-width": "5px" });
$( ".well.prize-index:contains('bronze')" ).css({ "border-color": "bronze", "border-width": "5px" });
console.log($(".well.prize-index.value"))

var options = {
  valueNames: [ '.well.prize-index.value']
};

// var userList = new List('prizes', options);



});

// {
//       "background-color": "yellow",
//       "font-weight": "bolder"
//     }
// $("#jobs-index-list").hide()
// // hide the list of jobs on page load
// $('button#toggle-index-map-list').click(function() {
//   $("#jobs-index-map-container").toggleClass('hide-index-map');
//   $("#jobs-index-list").toggle();
// });
// // click on a button to 
// // 