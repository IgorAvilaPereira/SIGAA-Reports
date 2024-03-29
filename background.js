function script() {
// function script(area) {
  var i = 0;
  var output =  "";
  while (true) {
      try {
          output += document.querySelectorAll(".tablsc td:nth-child(4)")[i].innerText+";"+document.querySelectorAll(".tablsc td:nth-child(3)")[i].innerText+";"+document.querySelectorAll(".tablsc td:nth-child(4)")[i].innerText+"@aluno.riogrande.ifrs.edu.br;<br>";    
          i++;
       } catch  {
          break;     
       }
  }
  newpopupWindow = window.open('', 'pagina', "width=400 height=400");
  newpopupWindow.document.write("");
  newpopupWindow.document.write(output);  
  // area.value = "";
  // area.value = output;
}

function script2() {
  // function script(area) {
    var i = 0;
    var output =  "";
    while (true) {
        try {
            output += document.querySelectorAll(".tablsc td:nth-child(4)")[i].innerText+"@aluno.riogrande.ifrs.edu.br<br>";    
            i++;
         } catch  {
            break;     
         }
    }
    newpopupWindow = window.open('', 'pagina', "width=400 height=400");
    newpopupWindow.document.write("");
    newpopupWindow.document.write(output);  
    // area.value = "";
    // area.value = output;
  }

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#btn1").addEventListener("click", function () {
    // var area = document.querySelector("#area");
    (async () => {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: script/*,
        args: [area]*/
      });
    })()
  });
  document.querySelector("#btn2").addEventListener("click", function () {
    (async () => {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: script2
      });
    })()
  });
});   