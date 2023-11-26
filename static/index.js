window.onload = function(){
  // document: 対象となっているＨＴＭＬ
  // get element by Tag Name(~):  
  // ~という名前(name)のタグ（tag）の要素（element）をget=とってくるよ
  var $tableElements = document.getElementsByTagName("td");
  let order = true;
  let White = "〇";
  let Black = "●";
  let turn = Black;
 
  


  for (let $i = 0; $tableElements.length; $i++){
    // add Event Listener
    // イベントを聞き取る人を追加するよ！
    $tableElements[$i].addEventListener("click", function(){
      // クリックしたいときに実行する内容
      
      $tableElements[$i].innerText = turn;
      if ($tableElements[$i + 1].innerText != "" ){
        if ($tableElements[$i + 1].innerText != turn){
          console.log("右隣に相手の石があるよ");
          console.log(right($tableElements, $i, turn));
        }
      }
      
      if (turn == Black) {
        turn = White;
      }else if (turn == White) {
        turn = Black;
      }else{
        console.log("なんか変だよ");
      }
      
    });
  }
}

function right(table, i, turn){
  var count = 1;
  stone = ""
  if (turn == "●"){
    stone = "〇";
  }else{
    stone = "●";
  }
  while(table[i + count].innerText == stone){
    table[i + count].innerText = turn;
    count += 1;
    
  }
  if (table[i + count].innerText == turn){
    return count - 1;
  }else{
    return 0;
  }
}
