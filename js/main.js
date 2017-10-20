

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
      "School": "St. Olaf"
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


