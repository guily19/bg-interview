
  function clickToSearch(){
    var text = document.getElementById("textSearch").value
    if(text === ''){
      alert("There is no text in the box");      
    } else {
      var req = new XMLHttpRequest();
      req.open('GET', 'https://boiling-sands-23849.herokuapp.com/search?q=' + text, true);
      req.onreadystatechange = function (aEvt) {
        if (req.readyState == 4) {
          if(req.status == 200)
            window.location.href = req.responseText;
          else
            console.error("Error loading page\n");
        }
      };
      req.send();
    }
  }
