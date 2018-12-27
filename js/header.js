Vue.component('header-bar', {
    props : ['sceneName'],
    template : '<div class="header">'
    +'<p class="header-text"> {{sceneName}} </p>'
    +'</div>'
})
