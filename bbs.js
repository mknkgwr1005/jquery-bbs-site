"use strict";

$(function () {
  // 初投稿フラグ
  let articleFlag = false;
  let counter = 0;

  let articleTitle = "";
  let articleName = "";
  let articleContent = "";

  $("#iineButton").hide();
  $("#addArticle").on("click", function () {
    // textareaの値を取得する
    let newTitle = $("#title").val();
    let newName = $("#name").val();
    let newArticle = $("#newArticle").val();
    let articles = [];
    counter++;
    // 記事投稿欄に反映する
    for (let i = 1; i <= counter; i++) {
      articles.push({
        id: counter,
        title: newTitle,
        name: newName,
        content: newArticle,
      });
      $("#articleArea").clone();
    }

    for (let article of articles) {
      articleTitle = article.title;
      articleName = article.name;
      articleContent = article.content;
    }

    $("#articleArea").append(
      "<p>" + "タイトル：" + "<br/>" + "<br/>" + articleTitle + "</p>"
    );
    $("#articleArea").append(
      "<p>" + "投稿者名：" + "<br/>" + "<br/>" + articleName + "</p>"
    );
    $("#articleArea").append(
      "<p>" + "記事内容：" + "<br/>" + "<br/>" + articleContent + "</p>"
    );
    $("#articleArea").append(
      '<button type=button id="iineButton">' + "いいね！" + "</button>"
    );
  });

  $("#iineButton").on("click", function () {
    console.log("called");
    let countIine = 0;
    countIine++;
    console.log(countIine);
  });
  // end of function
});
