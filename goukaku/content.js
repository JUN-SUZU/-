window.onload = function () {
  console.log("content.js is loaded");
  var elements = document.getElementsByTagName('*');
  // 全ての要素を調べて、"不合格"を"合格"に変換する
  // 6ケタの数字が複数含まれている要素を取得し、619017に置換する
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    element.innerHTML = element.innerHTML.replace(/不合格/g, '合格');
    element.innerHTML = element.innerHTML.replace(/([0-9]{6})/g, '619017');
  }
};
