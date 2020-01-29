## digitalDiceチュートリアルのリソース倉庫

* micro:bit用のdigitalDiceチュートリアルコンテンツのリソース倉庫です。
* チュートリアルは[ここから](https://makecode.microbit.org/#tutorial:57120-89742-08917-48452)アクセスできます。
* tinkering:mbitの、最初のコンテンツです^^

### ここにあるもの
* main.ts : 受講者が最終的に作るmicro:bitのメインルーチン
* tutorial.md : チュートリアルのソース(作成方法と出版？方法は下記HowTo参照)
* その他、チュートリアルが引用する画像や動画(gif)など

### コンテンツ作成TIPS
* チュートリアル作成のHowTo https://makecode.com/writing-docs/tutorials
  * 下記のツール(CMS)を使う
  * ツールのエディタ上でマークダウンを書く。上のドキュメント見る前に、まずここのtutorial.md眺めるとわかりやすくなるかも？
  * Runを押すと、右側にPreview(エミュレーション)が表示される
  * よさそうなら、共有を押すと公開用のURLが出てくる。
* 同CMS https://makecode.com/tutorial-tool
* gitHubPagesを設定したので、投入した画像や動画などのリソースは上記CMSから、https://tinkering-mbit.github.io/digitalDice/ で参照可能になる。

* Hint(吹き出し)にクセあり
  * Hintの最初に文字を出すことができない
  * 実はCMSのエミュレータでは、```### @explicitHints true```　を設定すると、それが効いて、```#### ~ tutorialhint```　を認識し、以降はヒントに出してしてくれる
  * が、公開URLのほうではこれがまともに動かないみたい。そのため、**Hint - Default Syntax**で書くしかなさそう。
  * で、ヒントの冒頭に文字を書きたいケースでは、```![null](https://tinkering-mbit.github.io/digitalDice/null.png)```　こんなnullイメージをその前に入れ、あたかも冒頭に文字があるかのように見せる裏技的なテクしかなさそう？
