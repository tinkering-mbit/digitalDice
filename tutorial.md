
# 電子サイコロ

## Introduction @unplugged

電子サイコロを作ってみましょう！
(どんな風に動くのかって？ [ビデオを見ましょう](https://youtu.be/qqBmvHD5bCw)).

![サイコロの様子](/static/mb/projects/flashing-heart/sim.gif)

## Step 1 @fullscreen

``||input:ゆさぶられた時||`` ブロックを置きましょう

```blocks
input.onGesture(Gesture.Shake, () => {
    
})
```
![揺さぶられた時を作るアニメ](/static/mb/projects/rock-paper-scissors/newvar.gif)

## Step 2 @fullscreen

その中に、 ``||basic:表示を消す||`` ブロックを入れましょう

```blocks
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
```

## Step 3 @fullscreen

さらに、``||input:画面が上になった時||`` ブロックを置きましょう


![null](https://tinkering-mbit.github.io/digitalDice/imgs/null.png)
最初に、これを置いた後に
```blocks
input.onGesture(Gesture.Shake, () => {  
})
```
このようにします。
```blocks
input.onGesture(Gesture.ScreenUp, function () {
})
```
全体はこのようにします。
```blocks
input.onGesture(Gesture.ScreenUp, function () {
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
```

![画面が上になった時を作るアニメ](/static/mb/projects/rock-paper-scissors/newvar.gif)


## Step 4 @fullscreen

その中に、``||basic:数を表示||``ブロックを置きましょう

```blocks
input.onGesture(Gesture.ScreenUp, function () {
    basic.showNumber()
})
```

## Step 5 @fullscreen

数字の部分に、``|||math:0から10までの乱数||``ブロックを置き、その数字を変更して``||math:1から6までの乱数||``のブロックを作ります。

![null](https://tinkering-mbit.github.io/digitalDice/imgs/null.png)
まずこのようにして、
```blocks
input.onGesture(Gesture.ScreenUp, function () {
    basic.showNumber(Math.randomRange(0,10))
})
```
次にこうする。
```blocks
input.onGesture(Gesture.ScreenUp, function () {
    basic.showNumber(Math.randomRange(1, 6))
})
```

## Step 6 @fullscreen

プログラムは、こうなれば完成です。

```blocks
input.onGesture(Gesture.ScreenUp, function () {
    basic.showNumber(Math.randomRange(1, 6))
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
```

## Step 7 @fullscreen

シミュレータの **〇SHAKE** を押した後、シミュレータの外にカーソルを持っていきましょう。
すると、数字が表示されるはずです。

![Shaking a @boardname@ simulator](/static/mb/projects/rock-paper-scissors/rpsshake.gif)


## Step 8 @fullscreen

 @boardname@ に、組んだプログラムを入れましょう。  ``|Download|`` をクリックし、説明に従って @boardname@ にプログラムを入れます。
これでプログラムの準備ができました！　次はこれをカプセルに入れてサイコロにしましょう！

![A @boardname@ in a hand](/static/mb/projects/rock-paper-scissors/hand.jpg)

## Step 9 @fullscreen
必要なパーツは以下の通りです。
![parts](https://tinkering-mbit.github.io/digitalDice/imgs/parts.jpg)


## Step 10 @fullscreen
電池ボックスに電池を入れ、色のついたカプセルの片割れに入れます

![null](https://tinkering-mbit.github.io/digitalDice/imgs/null.png)
電池ボックスをカプセルに入れて
![s1](https://tinkering-mbit.github.io/digitalDice/imgs/step1.jpg)

プチプチ(緩衝材)で覆います
![s2](https://tinkering-mbit.github.io/digitalDice/imgs/step2.jpg)


## Step 11 @fullscreen
@boardname@の電源端子に、電池ボックスのケーブルを差し込みます

![null](https://tinkering-mbit.github.io/digitalDice/imgs/null.png)
差し込んだ様子
![b2](https://tinkering-mbit.github.io/digitalDice/imgs/power4.jpg)

端子の向きに注意。(この向きじゃないと差し込めない)
![b1](https://tinkering-mbit.github.io/digitalDice/imgs/power2.jpg)

電池ボックスをつなぐとすぐにmicro:bitには数字が表示されます

## Step 12 @fullscreen
いよいよ完成です！

![null](https://tinkering-mbit.github.io/digitalDice/imgs/null.png)
@boardname@ の表示がある方を外向きにして電池ボックスの上に置きます
![s3](https://tinkering-mbit.github.io/digitalDice/imgs/step3.jpg)

カプセルをはめたら完成！
![s3](https://tinkering-mbit.github.io/digitalDice/imgs/step4.jpg)


## Step 11 @fullscreen

![s3](https://tinkering-mbit.github.io/digitalDice/imgs/dice.mp4)

カプセルを転がすとサイコロがうごきます！
