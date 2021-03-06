## digitalDiceチュートリアルのリソース倉庫

* micro:bit用のdigitalDiceチュートリアルコンテンツのリソース倉庫です。
* 作成したチュートリアルは[ここから](https://makecode.microbit.org/#tutorial:51855-46406-68930-90031)アクセスできます。
* tinkering:mbitの、最初のコンテンツです^^

### ここにあるもの
* [main.ts](main.ts): 受講者が最終的に作るmicro:bitのメインルーチン
* [tutorial.md](tutorial.md) : チュートリアルのソース(作成方法と出版？方法は下記HowTo参照)
* その他、チュートリアルが引用する画像や動画(gif)など

### コンテンツ作成TIPS
* チュートリアル作成のHowTo [https://makecode.com/writing-docs/tutorials](https://makecode.com/writing-docs/tutorials)
  * 下記のツール(CMS)を使う(micro:bitモードにすることを忘れずに)
  * ツールのエディタ上でマークダウンを書く。上のドキュメント見る前に、まずここの[tutorial.md](tutorial.md)のソース眺めるとわかりやすくなるかも？
  * **Run**を押すと、右側にPreview(エミュレーション)が表示される
  * よさそうなら、**共有**を押すと公開用のURLが出てくる。
* 同CMS https://makecode.com/tutorial-tool
* [このリポジトリはgitHubPagesを設定](https://tinkering-mbit.github.io/digitalDice/)したので、投入した画像や動画などのリソースは上記CMSから、```https://tinkering-mbit.github.io/digitalDice/リソースのパス``` で参照可能になる。

* Hint(吹き出し)にクセあり
  * Hintの最初に文字を出すことができない
  * 実は```### @explicitHints true```　を設定すると、```#### ~ tutorialhint```　を認識し、以降は明示的にヒントに出す仕様になっていて、これを設定すればHintの冒頭を文字列にもできる。CMSのエミュレータではそのように表示される。
  * が、公開URLのほうではこれがまともに動かないみたい。そのため、**Hint - Default Syntax**で書くしかなさそう。Default SyntaxはHintの冒頭を文字列にすることができない(コードか画像が必ず冒頭になる)
  * ヒントの冒頭に文字を書きたいケースでは、```![null](https://tinkering-mbit.github.io/digitalDice/null.png)```　こんなnullイメージをその前に入れ、あたかも冒頭に文字があるかのように見せる裏技的なテクしかなさそう？ ここの[tutorial.md](tutorial.md)ではそれを使っている。(ちなみにnullなコードを入れると処理が破綻してしまう)

* ブロック一覧パネルのふるまい
  * 通常のmakecode環境では使える全てのブロックが一覧のパネルに出現しますが、tutorialでは(学習者が探すのが難しくなるため)必要な(というよりtutorialのmarkdownで言及した)パーツのみが現れます
  * markdown中のコードブロックに現れた関数などが自動的にパネルに出現するようです
  ```
  ```block  
  何かのコード(このコードで使われている関数などのブロックがパネルに出現)
  ``` (end of block)
  ```    
  * 明示的にパネルに出現させることもできるらしい
  * 先述のnullなコードによる処理の破綻は、この振る舞いがおかしくなる
