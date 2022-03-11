"use strict";

$(function () {
  // 初投稿フラグ
  let articleFlag = false;
  let counter = 0;

  let articleTitle = "";
  let articleName = "";
  let articleContent = "";
  let articleIine = 0;

  $("#iineButton").hide();
  /**
   * 投稿ボタンをあらわす.
   */
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
        articleIine: 0,
      });
    }

    // articleの内容を1つ1つ取り出す
    for (let article of articles) {
      articleTitle = article.title;
      articleName = article.name;
      articleContent = article.content;
      articleIine = article.articleIine;
    }

    // 記事の追加
    $("#articleArea").append(
      "<p>" + "タイトル：" + "<br/>" + "<br/>" + articleTitle + "</p>"
    );
    $("#articleArea").append(
      "<p>" + "投稿者名：" + "<br/>" + "<br/>" + articleName + "</p>"
    );
    $("#articleArea").append(
      "<p>" + "記事内容：" + "<br/>" + "<br/>" + articleContent + "</p>"
    );
    // 記事の追加のたびにiineボタンを呼ぶ
    $("#articleArea").append(
      '<button type=button class="iineButton">' +
        "いいね！" +
        "</button>" +
        ` <span class="iineCount" value="${articleIine}">` +
        articleIine +
        "</span>"
    );
    $(".iineButton").on("click", function () {
      let totalIine = ++articleIine;
      $(".iineCount").val(totalIine);
      console.log(articleIine);
    });
    // end of 投稿ボタン処理
  });

  // end of function
});
