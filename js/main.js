// (function($){
//   $(function(){

//     $('.collapsible').collapsible();

//   }); // end of document ready
// })(jQuery); // end of jQuery name space

let schoolList={
Schools: [
    {
      "School": "Gettysburg"
    },
    {
      "School": "Valparaiso"
    },
    {
      "School": "Wheaton"
    },
    {
      "School": "Holy Cross Norte Dame"
    },
    {
      "School": "Butler"
    },
    {
      "School": "Florida Gulf Coast"
    },
    {
      "School": "UMass Amherst"
    },
    {
      "School": "Indiana University"
    },
    {
      "School": "Temple"
    },
    {
      "School": "Miami Ohio"
    },
    {
      "School": "Penn State"
    }

   ]
};


$.each(schoolList.Schools, function (key, value) {
    $(".dropDownDest").prepend($('<li></li>').text(value.School));
});


