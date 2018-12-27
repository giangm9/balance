Vue.component('selection', {
    props: ['title', 'count'],
    template:
    "   <div class='selection-wrapper'>"
    + "     <p>{{title}}</p>"
    + "     <button class='count-button' v-on:click='count(title)'> </button>"
    + " </div>"
})

