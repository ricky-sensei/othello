window.onload = function(){
  // document: 対象となっているＨＴＭＬ
  // get element by Tag Name(~):  
  // ~という名前(name)のタグ（tag）の要素（element）をget=とってくるよ
  var $tableElements = document.getElementsByTagName("td");
  let order = true;
  let othelloWhite = "〇";
  let othelloBlack = "●";
  let othelloColor = othelloBlack;
 
  


  for (let $i = 0; $tableElements.length; $i++){
    // add Event Listener
    // イベントを聞き取る人を追加するよ！
    $tableElements[$i].addEventListener("click", function(){
      // クリックしたいときに実行する内容
      console.log(othelloColor);
      $tableElements[$i].innerText = othelloColor;
      
      if (othelloColor == othelloBlack) {
        othelloColor = othelloWhite;
      }else if (othelloColor == othelloWhite) {
        othelloColor = othelloBlack;
      }else{
        console.log("なんか変だよ");
      }
      
    });
  }
}
