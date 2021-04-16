addOption = false;
var num = 1000, timer;
new Vue({
  el: '#app',
  data: {
    myText:'',
    optionShow:false,
    inputShow:true,
    colorD:'#000000',
    numberD:null
  },
  methods: {
    textUpload: function(){
      if(!(document.getElementById("inputText").value == '')){
        this.inputShow = false;
        text = document.getElementById("inputText").value;
        document.getElementById("outputP").innerHTML = text;
        document.getElementById("span").innerHTML = text;
        document.getElementById("input").style = 'z-index: 0';
        document.getElementById("div").style = 'z-index: 0';
        timer = setInterval("text_left()", eval(num));
      }
    },
    spanUpload: function(){
      alert("성공");
    },
    optionButton: function(){
      if(!addOption){
        document.getElementById("optionButton").innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
        addOption=true;
        this.optionShow=true;
        document.getElementById("addOption").style.zIndex = "25";
      }
      else{
        document.getElementById("optionButton").innerHTML = '<i class="fa fa-plus" aria-hidden="true"></i>';
        addOption=false;
        this.optionShow=false;
        if(document.getElementById("numberInput").value!='')
          num = document.getElementById("numberInput").value;
        document.getElementById("output").style.color = this.colorD;
        document.getElementById("addOption").style.zIndex = "0";
      }
    },
    inputBack: function(){
      clearInterval(timer)
      document.getElementById("outputP").innerHTML = '';
      document.getElementById("input").style = 'z-index: 15';
      document.getElementById("div").style = 'z-index: 15';
      this.inputShow = true;
    }
  }
})
var div = document.getElementById("outputP");
function text_left() {
    var str = div.innerHTML;
    var first = str.substr(0, 1);
    var last = str.substr(1, str.length - 1);
    str = last + first;
    div.innerHTML = str;
}