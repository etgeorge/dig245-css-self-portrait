
/* javascript */

var bauhaus = `

Staaatliches Bauhaus (1919-1933)

      ..-""T-..
    ,'__   |   '.
   /   N|  |     !
  :     '  |      :
  [      __|      ]
  :      _I       :
   !   ___I      /
    '.  N]     ,'
      "-"!..--"

`;

console.log(bauhaus);


document.addEventListener('mousemove', function (e){
  document.getElementById("cursor").textContent = "X position: " + e.x + " Y position: " + e.y;
});

console.log(document.querySelectorAll("div").length);


