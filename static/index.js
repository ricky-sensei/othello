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

      if ($tableElements[$i].innerText == "") {
        // とりあえず石を置く
        $tableElements[$i].innerText = turn;
        // 連石の数：後に置けるかどうかの判定に使う
        right_chain = right($tableElements, $i, turn);
        left_chain = left($tableElements, $i, turn);
        
      
        if (turn == Black) {
          turn = White;
        }else if (turn == White) {
          turn = Black;
        }
      }
    });
  }
}


function right(table, i, turn){
  var count = 1;
  var stone = ""
  if (turn == "●"){
    stone = "〇";
  }else{
    stone = "●";
  }
  while(table[i + count].innerText == stone){
    // table[i + count].innerText = turn;
    count += 1;
  }
  if (table[i + count].innerText == turn){
    for (let j = 1; j < count; j++) {
      table[i + j].innerText = turn;
    }
  }else{
    return 0;
  }
}
function left(table, i, turn){
  var count = 1;
  var stone = ""
  if (turn == "●"){
    stone = "〇";
  }else{
    stone = "●";
  }
  while(table[i - count].innerText == stone){
    // table[i + count].innerText = turn;
    count += 1;
  }
  if (table[i - count].innerText == turn){
    for (let j = 1; j < count; j++) {
      table[i - j].innerText = turn;
    }
  }else{
    return 0;
  }
}

