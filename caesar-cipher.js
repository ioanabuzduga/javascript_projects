function rot13(str) { // LBH QVQ VG!
    return (str.split("").map.call(str,function(char)
    {
      var x = char.charCodeAt(0);
      if (x < 65 || x > 90) {
          return String.fromCharCode(x); // Return un-converted character
        }
         else if (x < 78) {
          return String.fromCharCode(x + 13);
        }
         return String.fromCharCode(x - 13);
    }).join("")
    );
}


// Change the inputs below to test
rot13("SERR PBQR PNZC");
