const urlParams = new URLSearchParams(window.location.search);
const time = urlParams.get('time');

var thugian = new Vue({
    el : '#thugian',
    data : {
        sceneName: 'Thư giãn',
        time: time,
        selections : [
            "Đứng vững chắc trên sàn và nhìn thẳng. Giờ hãy hít thở thật sâu và giữ cho tâm trí thật thư giãn.",
            "Nằm xuống và ôm một chiếc chăn. Nghĩ đến những điều mà bạn yêu.",
            "Ăn một món mà bạn thích một cách chậm rãi và thưởng thức mùi vị của nó.",
            "Nếu người bạn yêu thương cảm thấy buồn bã, hãy nói lớn hoặc tự suy nghĩ những gì bạn sẽ nói để khích lệ người đó. Giờ hãy nói những điều đó với chính bản thân.",
            "Ôm một ai đó thật chặt. Nếu bạn không có ai ở cạnh, hãy ôm một chiếc gối thật chặt và cuộn mình quanh nó.",
            "Hát lớn hoặc ngân nga bài hát yêu thích của bạn, bài hát mà làm bạn cảm thấy thoải mái khi nghe thấy.",
            "Đọc cuốn sách có những bức tranh hoặc những từ ngữ mà bạn vô cùng yêu thích.",
            "Nghĩ đến 1 địa điểm thư giãn trong tâm trí, tưởng tượng tất cả những điều thoải mái bạn sẽ làm khi ở nơi đó.",
            "Xem lại tất cả ảnh trong album của bạn. Sắp xếp lại chúng một cách cẩn thận."
        ]
    },
    methods: {
        count: function(title) {
            window.location.href = 'countdown.html?title=' + title + '&time=' + this.time;
        },
        random: function() {
            var title = randomElement(this.selections);
            this.count(title);
        }

    }
});
