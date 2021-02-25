// Future JavaScript will go here


console.log('Hi there');
let urls = []
launch();
download_csv_file();


 //function to grab the urn needed from web 
function launch() {
document.querySelectorAll('[data-urn]').forEach(elem=>urls.push('https://www.linkedin.com/feed/update/'+elem.getAttribute("data-urn")));
console.log(urls);
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
     //hiddenElement.target = '_blank';
    

     //provide the name for the CSV file to be downloaded
     hiddenElement.download = 'Famous Personalities.csv';
     hiddenElement.click();
 }