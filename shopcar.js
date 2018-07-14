var goods= {
    data_: [{
        id: 1,
        name: '小吃1',
        img: 'img/0.jpg',
        price: '26.00',
        num: 0,
        checked: false
    }, {
        id: 2,
        name: '小吃2',
        img: 'img/1.jpg',
        price: '25.00',
        num: 0,
        checked: false
    }, {
        id: 3,
        name: '小吃3',
        img: 'img/2.jpg',
        price: '20.00',
        num: 0,
        checked: false
    }, {
        id: 4,
        name: '小吃4',
        img: 'img/3.jpg',
        price: '18.00',
        num: 0,
        checked: false
    }, {
        id: 5,
        name: '小吃5',
        img: 'img/4.jpg',
        price: '16.00',
        num: 1,
        checked: false
    }]
};
// 使用localstorage保存当前页面的选择，保证在下一次进入或者刷新页面选择按钮和选择数量不变
var goodObj=localStorage.goods?JSON.parse(localStorage.goods):goods;
var vm=new Vue({
    el:'#app',
    data:goodObj,
    mounted:function(){
      this.check_isAll();
    },
    methods:{
        update:function(){
          localStorage.setItem('goods',JSON.stringify(this.$data));//更新函数，在每次有变化都需要调用并修改localstroage
        },
        // 判断是否页面所有单选按钮是不是被选中，如果均选中则全选按钮默认被选中
        check_isAll(){
            var check_el=document.getElementById('none');
            if(this.isAllselect()){ 
                check_el.checked=true;
            }else{
                check_el.checked=false;
            }
            this.update();
        },
        checked(){
            // 获取当前全选按钮状态，并给单选按钮赋相对应的值
            var el=event.target;
            var check_=el.checked;
            // debugger;
            for(var i = 0;i < this.data_.length;i++){
                this.data_[i].checked=check_;
            }
            this.update();
        }
        ,
        // 使用数组every方法判断是否全选中单选按钮
        isAllselect:function(){
            return this.data_.every(function(item){
                // console.log(index);
                return item.checked==true;
            })
        },
        // 计算相关的总数量个总金额
        calc:function(){
            var pro=this.data_.filter(function(item){
                return item.checked==true;
            });
            var totalPrice=0;
            for(var i = 0; i < pro.length;i++){
                totalPrice+=pro[i].price*pro[i].num;
            }
            return {cnt:pro.length,totalPrice:totalPrice}
        }
    }
})
