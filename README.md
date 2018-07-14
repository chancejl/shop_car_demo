# shop_car_demo
this is a shop_car demo writed by Vue where in a market project

购物车是电商必备的功能，可以展示出用户购买的多个商品以及价格信息。

最近在做一个电商的项目，使用了vue.框架，一个轻量级的mvvm，数据变化视图一起变化；为了响应式布局，使用了bootstrap。

该购物车的主要功能有，增加购买数量，价格实时变化，可以单选，全选，不选。

页面全选按钮，如果下方按钮均选中则默认选中，有一个没选中就不选

html

单个商品金额使用{{good.price*good.num}}

数量框中加减的数字使用{{good.num}} 并且使用三元运算符，保证在数量大于0时可以点+ @click="good.num>0?good.num--:0"，其他情况下-按钮不可以点

-.在实现全选按钮时使用了两种该方法：

1.使用v-if指令来决定全选按钮的状态
2.methods函数中判断全选按钮状态
// 判断是否页面所有单选按钮是不是被选中，如果均选中则全选按钮默认被选中
				check_isAll(){
					var check_el=document.getElementById('none');
					if(this.isAllselect()){ 
						check_el.checked=true;
					}else{
						check_el.checked=false;
					}
					this.update();
				}
-. 使用localstorage保存当前页面的选择，保证在下一次进入或者刷新页面选择按钮和选择数量不变
		var goodObj=localStorage.goods?JSON.parse(localStorage.goods):goods;
