##BFC 定义
BFC，即Block Formatting Contexts（块级格式化上下文），它属于上述定位方案的普通流。
具有BFC特性的元素可以看做是隔离了的独立容器，容器里面的元素不会再布局上影响到外面的元素，并且BFC具有普通容器所没有的一些特性。
通俗一点来讲，可以把BFC，理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。

##BFC 布局规则
1. 内部的box会在垂直方向摆放
2. box垂直方向由margin决定，相邻box之间会发生margin合并
3. BFC区域不会与浮动元素重叠（文字环绕效果）
4. 计算BFC高度的时候，浮动元素也会参与计算
5. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素

##触发BFC

1. body根元素
2. 浮动元素：float除none以外的值
3. 绝对定位元素：position（absolute、fixed）
4. display为inline-block、table-cells、flex
5. overflow除了visible以外的值（hidden、auto、scroll）
