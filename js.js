//name1 = prompt("Name of Player 1");
//name2 = prompt("Name of Player 2");
//document.getElementById("player1").innerHTML = name1;
//document.getElementById("player2").innerHTML = name2;
function calculateLovePercentage(name1, name2) {
    var combinedNames = (name1 + name2).toLowerCase();
    var lovePercentage = 0;
  
    // Sum up the ASCII values of all characters in the combined names
    for (var i = 0; i < combinedNames.length; i++) {
      lovePercentage += combinedNames.charCodeAt(i);
    }
  
    // Adjust the love percentage to be within the desired range
    lovePercentage = (lovePercentage % 91) + 5;
  
    return lovePercentage;
}
  
  // Get the names from the user or any other source
  var name1 = prompt("Ime Prve Osobe");
  var name2 = prompt("Ime Druge Osobe");
  
  var lovePercentage = calculateLovePercentage(name1, name2);
  
  // Display the love percentage won the web page
  document.getElementById("result").innerHTML = name1 + ' - ' + lovePercentage + "%" + ' - ' + name2;

  function DarkMode() {
    try {
    var white = document.querySelector('.white');
    var className = white.className;
    }catch(e){
  
    }
    if (className == 'white'){
      document.getElementById("body").classList.remove('white');
      document.getElementById("body").classList.add('Dark-mode');
      document.getElementById("github-logo").src = "github_logo_dark.png";
    }
    else {
      document.getElementById("body").classList.remove('Dark-mode');
      document.getElementById("body").classList.add('white');
      document.getElementById("github-logo").src = "github_logo.png";
    }
  }
  