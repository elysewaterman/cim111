(function($) {
  $.fn.shufflestring = function() {
    return this.each(function(){
      $(this).text(ShuffleString($ (this).txt()));

      function shuffleString(str) {
        var array = str.split("");
        for(var index= array.length -1; index > 0; index --){
          var val = Math.floor(Math.random() * (index + 1));
          var temp = array[text];
          array[index] = array[val];
          array [val] = temp;
        }
        return array.join("");

      }

    })

  }
}(index.html));
