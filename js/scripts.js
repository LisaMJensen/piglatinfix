var vow =["a","e","i","o","u","A","E","I","O",'U'];
var string;
var newReplaced;
$(function(){
  $("form").submit(function(event) {
    event.preventDefault();
       string =($("input#inputString").val());
       // alert(string);
       var wordsArray = string.split(" ");
       // alert(newStringArray);
      for (var index = 0; index <= wordsArray.length; index += 1) {
        if (wordsArray.legth == 1){
          wordsArray=(wordsArray + 'ay');

        }
        console.log("hi test")
        // if( vow.includes(wordsArray[index])){
        //
        //   newStringArray[index]="-";
        // }
      }
      alert(wordsArray.join(''));
    });
  });
