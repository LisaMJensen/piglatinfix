
$(function(){
  $("form").submit(function(event) {

var vow =["a","e","i","o","u","A","E","I","O",'U', undefined];
var string =$("input#inputString").val();
var outPutWords= [];
var wordsArray = string.split(" ");
    debugger;
      // var smooshWord =function()
      {
       // string =($("input#inputString").val());
      // alert(string);
       //alert(wordsArray);
       var lettersArray = wordsArray[0].split('');
       var chopped = [];
       //alert(lettersArray);
       for (var index = 0; index < lettersArray.length; index++) {
         for(var i=0; i < vow.length; i++) {
           if (lettersArray[0] === vow[i]) {
            // index += lettersArray.length;
            console.log("first letter is a vowel");
            break wordsArray[index].join('') + "way";
          } else {
            chopped.push(lettersArray.shift());
          }
          alert(chopped);
        }
        if (chopped === undefined || chopped.length==0)
        {
          chopped.push("w");
        }
        var pigLatin = (lettersArray.join('') + chopped.join('') + "ay");
        //return pigLatin;

      }
    }
    console.log(pigLatin)
    //  for ( var index = 0; index < lettersArray.length; index++){ outPutWords.push(smooshWord(string[index]));

      $("#output").append(outPutWords.join(' '))

      event.preventDefault();
    });
     //wordsArray.forEach(function())

    // for (var index = 0; index <= wordsArray.length; index += 1) {
    //   if (wordsArray.length < 2){
    //     outputWords=(wordsArray +"ay");
    //   } else {
    //     outputWords=(wordsArray +"way");
    //   }

      // if( vow.includes(wordsArray[index])){
      //
      //   newStringArray[index]="-";
    // }
  });
  // $("#output").text(outPutWords);
