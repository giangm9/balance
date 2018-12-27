var index = new Vue( {
    el: '#index',
    data : {
        sceneName : 'The Balance'
    },
    methods:  {
        start : function() {
            console.log('start');
            window.location.href = 'luachon.html'
        }
    }
})