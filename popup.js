
console.log('Today chrome extension go ');
chrome.runtime.onMessage.addListener(gotMessage);
let urls = []


//function to grab the message from background script when the extension get clicked. 
function gotMessage(message,sender,sendResponse){
   console.log("gotMessage:= popup.js");


      console.log("message:="+ message.txt);


 //  if (message.txt == 'Today Hello Hi Hi'){
      console.log('gotMessage');
 
let paragraph = document.getElementsByTagName('p');

for (elt of paragraph){
   console.log('elt');
   console.log(elt);
   elt.innerHTML = message.txt;
}

//if ((message.txt=="launch") || (message.txt=="Launch") || (message.txt=="LAUNCH") ){

     launch();
     download_csv_file();
  }
//}



//function to grab the urn needed from web 

function launch() {
console.log('Hi Popup Launch');
document.querySelectorAll('[data-urn]').forEach(elem=>urls.push('https://www.linkedin.com/feed/update/'+elem.getAttribute("data-urn")));
console.log(urls);
/*
var file_path = 'Fam.csv';
if (file_path.exists()){
   file_path.remove();
}*/

}
 //create a user-defined function to download CSV file 
 function download_csv_file() {
  /*  var csvFileData = [
        ['Alan Walker', 'Singer'],
        ['Cristiano Ronaldo', 'Footballer'],
        ['Saina Nehwal', 'Badminton Player'],
        ['Arijit Singh', 'Singer'],
        ['Terence Lewis', 'Dancer']
     ];*/
    console.log(urls);

     //define the heading for each row of the data
     var csv = 'Name\n';
     //merge the data with CSV 
     urls.forEach(function(row) {
          //   csv += row.join(',');\
             csv=csv+row;
             csv += "\n";
     });

     //display the created CSV data on the web browser 
     document.write(csv);
     var hiddenElement = document.createElement('a');
     hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
     hiddenElement.target = '_blank';  
     //provide the name for the CSV file to be downloaded



     hiddenElement.download = 'SalesflagsPost.csv';
     document.body.appendChild(hiddenElement);
     hiddenElement.click();


      
 }