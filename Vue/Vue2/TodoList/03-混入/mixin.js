
//混入数据可供多个组件进行使用
export const mixin = {
    methods: {
        appearName(){
            alert(this.name);
        }
    },
    mounted() {
        console.log('555');
    },
    data(){
        return {
            x: 20,
            y: 30
        }
    }
}