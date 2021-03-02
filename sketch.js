function setup(){
   // createCanvas(640,360);

    let userinput = select('#userinput');

    userinput.input(changeText);

    function changeText(){

        let params= {
            active:true,
            currentWindow:true
        }       

        chrome.tabs.query(params,gotTabs);
        console.log('sketch');


        function gotTabs(tabs){

        console.log('gotTabs');

        let message = userinput.value();
        console.log('message');

        console.log(message);

        let msg = { txt : userinput.value() }

        chrome.tabs.sendMessage(tabs[0].id, msg);

        }

    }   


}

 