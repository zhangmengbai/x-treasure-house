# x-treasure-house

包括但不限于Loading动画，静态图标，交互动画的Vue专用集合样式库，后面会根据所使用技术，使用场景及风格等进行区别分类。

## 初衷

很多富有创意的图标/动画会由于对一些主流框架没有添加支持而产生使用障碍，这里为一些图标/动画添加Vue.js支持，同时优化一些已有的Vue.js图标/动画库（主要还是为了自己用着方便）。

```
npm install --save x-treasure-house
```

## 使用方法

Vue.js 中使用

main.js中全局引入

```jsx
import xTreasureHouse from 'x-treasure-house'
Vue.use(xTreasureHouse)
```

## 以组件形式使用

传入大小，动画速度及颜色即可，个别动画会有特殊的属性。例如pixel-size,dot-size及dot-num。

```vue
<flower-spinner
  :animation-duration="2500"
  :size="70"
  :color="'#FFC51C'"
/>

<pixel-spinner
  :animation-duration="2000"
  :pixel-size="70"
  :color="'#FFC51C'"
/>

<hollow-dots-spinner
  :animation-duration="1000"
  :dot-size="15"
  :dots-num="3"
  :color="'#FFC51C'"
/>

<intersecting-circles-spinner
  :animation-duration="1200"
  :size="70"
  :color="'#FFC51C'"
/>

<orbit-spinner
  :animation-duration="1200"
  :size="55"
  :color="'#FFC51C'"
/>

<radar-spinner
  :animation-duration="2000"
  :size="60"
  :color="'#FFC51C'"
/>

<scaling-squares-spinner
  :animation-duration="1250"
  :size="65"
  :color="'#FFC51C'"
/>

<half-circle-spinner
  :animation-duration="1000"
  :size="60"
  :color="'#FFC51C'"
/>

<trinity-rings-spinner
  :animation-duration="1500"
  :size="66"
  :color="'#FFC51C'"
/>

<fulfilling-square-spinner
  :animation-duration="4000"
  :size="50"
  :color="'#FFC51C'"
/>

<circles-to-rhombuses-spinner
  :animation-duration="1200"
  :circles-num="3"
  :circle-size="15"
  :color="'#FFC51C'"
/>

<semipolar-spinner
  :animation-duration="2000"
  :size="65"
  :color="'#FFC51C'"
/>

<self-building-square-spinner
  :animation-duration="6000"
  :size="40"
  :color="'#FFC51C'"
/>

<swapping-squares-spinner
  :animation-duration="1000"
  :size="65"
  :color="'#FFC51C'"
/>

<fulfilling-bouncing-circle-spinner
  :animation-duration="4000"
  :size="60"
  :color="'#FFC51C'"
/>

<fingerprint-spinner
  :animation-duration="1500"
  :size="64"
  :color="'#FFC51C'"
/>

<spring-spinner
  :animation-duration="3000"
  :size="60"
  :color="'#FFC51C'"
/>

<atom-spinner
  :animation-duration="1000"
  :size="60"
  :color="'#FFC51C'"
/>

<looping-rhombuses-spinner
  :animation-duration="2500"
  :rhombus-size="15"
  :color="'#FFC51C'"
/>

<breeding-rhombus-spinner
  :animation-duration="2000"
  :size="65"
  :color="'#FFC51C'"
/>
```

## 对于其他框架如React.js及Angular.js目前暂时不做支持，后续可能添加。

## 您可以这样支持我

- 为该存储库点个关注:star:
- 在Issues提交问题 :wrench:

## 来源

特别感谢

[@epicmaxco](https://github.com/epicmaxco) 的[epic-spinners](https://github.com/epicmaxco/epic-spinners)

## 许可

[MIT](https://github.com/epicmaxco/vuestic-admin/blob/master/LICENSE) license.
