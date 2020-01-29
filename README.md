## digitalDiceチュートリアルのリソース倉庫

* micro:bit用のdigitalDiceチュートリアルコンテンツのリソース倉庫です。
* チュートリアルは[ここから](https://makecode.microbit.org/#tutorial:57120-89742-08917-48452)でアクセスできます。

### ここにあるもの
* main.ts : 受講者が最終的に作るmicro:bitのメインルーチン
* tutorial.md : チュートリアルのソース(作成方法と出版？方法は下記HowTo参照)
* その他、チュートリアルが引用する画像や動画(gif)など

### コンテンツ作成TIPS
* チュートリアル作成のHowTo https://makecode.com/writing-docs/tutorials
* 同CMS https://makecode.com/tutorial-tool
* gitHubPagesを設定したので、投入したリソースは上記CMSから、https://tinkering-mbit.github.io/digitalDice/ で参照可能になる。

* CMSのエミュレータでは、```### @explicitHints true```　が効いて、```#### ~ tutorialhint```　を認識して以降はヒントに出してしてくれるが、公開URLのほうではこれがまともに動かないみたい。そのため、**Hint - Default Syntax**で書くしかなさそうで、ヒントの冒頭に文字を書きたいケースでは、```![null](https://tinkering-mbit.github.io/digitalDice/null.png)```　こんなnullイメージをその前に入れる裏技的なテクしかなさそう？
