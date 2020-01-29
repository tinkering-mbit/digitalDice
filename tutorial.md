### @explicitHints true

# 電子サイコロ

## Introduction @unplugged

電子サイコロを作ってみましょう！
(どんな風に動くのかって？ [ビデオを見ましょう](https://youtu.be/qqBmvHD5bCw)).

![サイコロの様子](/static/mb/projects/flashing-heart/sim.gif)

## Step 1 @fullscreen

``||input:ゆさぶられた時||`` ブロックを置きましょう

#### ~ tutorialhint
```blocks
input.onGesture(Gesture.Shake, () => {
    
})
```
![揺さぶられた時を作るアニメ](/static/mb/projects/rock-paper-scissors/newvar.gif)

## Step 2 @fullscreen

その中に、 ``||basic:表示を消す||`` ブロックを入れましょう

#### ~ tutorialhint
```blocks
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
```

## Step 3 @fullscreen

さらに、``||input:画面が上になった時||`` ブロックを置きましょう

#### ~ tutorialhint
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

#### ~ tutorialhint
```blocks
input.onGesture(Gesture.ScreenUp, function () {
    basic.showNumber()
})
```

## Step 5 @fullscreen

数字の部分に、``|||math:0から10までの乱数||``ブロックを置き、その数字を変更して``||math:1から6までの乱数||``のブロックを作ります。

#### ~ tutorialhint
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

#### ~ tutorialhint

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

#### ~ tutorialhint
![Shaking a @boardname@ simulator](/static/mb/projects/rock-paper-scissors/rpsshake.gif)


## Step 8 @fullscreen

 @boardname@ に、組んだプログラムを入れましょう。  ``|Download|`` をクリックし、説明に従って @boardname@ にプログラムを入れます。
これでプログラムの準備ができました！　次はこれをカプセルに入れてサイコロにしましょう！

#### ~ tutorialhint
![A @boardname@ in a hand](/static/mb/projects/rock-paper-scissors/hand.jpg)

## Step 9 @fullscreen
電池ボックスをつなぎます

## Step 10 @fullscreen
カプセルの透明なほうに @boardname@ の表示がある方を外向きにして置きます

## Step 11 @fullscreen
その上にプチプチを置き、電池ボックスを置いた後、色のついたカプセルをはめたら完成！

カプセルを転がすとサイコロがうごきます～
