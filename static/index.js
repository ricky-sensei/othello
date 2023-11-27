window.onload = function(){
  // document: 対象となっているＨＴＭＬ
  // get element by Tag Name(~):  
  // ~という名前(name)のタグ（tag）の要素（element）をget=とってくるよ
  var $tableElements = document.getElementsByTagName("td");
  let order = true;
  var White = "〇";
  var Black = "●";
  var turn = Black;

  for (let $i = 0; $tableElements.length; $i++){
    // add Event Listener
    // イベントを聞き取る人を追加するよ！
    $tableElements[$i].addEventListener("click", function(){
      // クリックしたいときに実行する内容

      if ($tableElements[$i].innerText == "") {
        // とりあえず石を置く
        $tableElements[$i].innerText = turn;
        // 連石の数：後に置けるかどうかの判定に使う

        // 第三引数は方向（右：１、左：－１、上：－８、下：８）
        right_chain = flip($tableElements, $i, turn, 1);
        left_chain = flip($tableElements, $i, turn, -1);
        up_chain = flip($tableElements, $i, turn, -8);
        down_chain = flip($tableElements, $i, turn, 8);

        if([right_chain, left_chain, up_chain, down_chain].toString() === [0, 0, 0, 0].toString()){
          console.log("おけないよ");
          // ここでbreakしたい
        }
      
        if (turn == Black) {
          turn = White;
        }else if (turn == White) {
          turn = Black;
        }
      }
    });
  }
}

function flip(table, i, turn, direction){
  var count = 1;
  var stone = ""
  if (turn == "●"){
    stone = "〇";
  }else{
    stone = "●";
  }
  while(table[i + (count* direction)].innerText == stone){
    // table[i + count].innerText = turn;
    count += 1;
  }
  if (table[i + (count*direction)].innerText == turn){
    for (let j = 1; j < count; j++) {
      table[i +(j*direction)].innerText = turn;
    }
  }else{
    return 0;
  }
}
