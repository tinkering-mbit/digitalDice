## digitalDiceチュートリアルのリソース倉庫

* micro:bit用のdigitalDiceチュートリアルコンテンツのリソース倉庫です。
* 作成したチュートリアルは[ここから](https://makecode.microbit.org/#tutorial:57120-89742-08917-48452)アクセスできます。
* tinkering:mbitの、最初のコンテンツです^^

### ここにあるもの
* [main.ts](main.ts): 受講者が最終的に作るmicro:bitのメインルーチン
* [tutorial.md](tutorial.md) : チュートリアルのソース(作成方法と出版？方法は下記HowTo参照)
* その他、チュートリアルが引用する画像や動画(gif)など

### コンテンツ作成TIPS
* チュートリアル作成のHowTo [https://makecode.com/writing-docs/tutorials](https://makecode.com/writing-docs/tutorials)
  * 下記のツール(CMS)を使う
  * ツールのエディタ上でマークダウンを書く。上のドキュメント見る前に、まずここの[tutorial.md](tutorial.md)のソース眺めるとわかりやすくなるかも？
  * **Run**を押すと、右側にPreview(エミュレーション)が表示される
  * よさそうなら、**共有**を押すと公開用のURLが出てくる。
* 同CMS https://makecode.com/tutorial-tool
* [このリポジトリはgitHubPagesを設定](https://tinkering-mbit.github.io/digitalDice/)したので、投入した画像や動画などのリソースは上記CMSから、```https://tinkering-mbit.github.io/digitalDice/リソースのパス``` で参照可能になる。

* Hint(吹き出し)にクセあり
  * Hintの最初に文字を出すことができない
  * 実は```### @explicitHints true```　を設定すると、それが効いて、```#### ~ tutorialhint```　を認識し、以降はヒントに出してしてくれる仕様になっていて、これを設定すればHintの冒頭を文字列にもできる。で、CMSのエミュレータではそのように表示される。
  * が、公開URLのほうではこれがまともに動かないみたい。そのため、**Hint - Default Syntax**で書くしかなさそう。Default SyntaxはHintの冒頭を文字列にすることができない(コードか画像が必ず冒頭になる)
  * で、ヒントの冒頭に文字を書きたいケースでは、```![null](https://tinkering-mbit.github.io/digitalDice/null.png)```　こんなnullイメージをその前に入れ、あたかも冒頭に文字があるかのように見せる裏技的なテクしかなさそう？ ここの[tutorial.md](tutorial.md)ではそれを使っている。
