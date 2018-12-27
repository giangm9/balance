var phantan = new Vue({
    el : '#giaithoat',
    data : {
        sceneName: 'Giải thoát suy nghĩ tiêu cực',
        time: getParam('time'),
        selections : [
           "Đến một nơi riêng tư và thoải mái xả ra cơn giận dữ của bạn.",
           "Bóp một quả bóng cao su thật mạnh.",
           "Tìm một chiếc gối thật lớn và đấm mạnh vào nó. Hãy trút hết tất cả cảm xúc của bạn vào chiếc gối.",
           "Đến một nơi bí mật và hét lớn nhất bạn có thể.",
           "Vẽ một bức tranh về những gì bạn cảm thấy. Hít vào thật sâu mỗi khi bạn nâng bút vẽ một nét mới. Nếu bạn đang cảm thấy tức giận, hãy xé nát bức tranh sau khi vẽ.",
           "Chạy tại chỗ nhanh nhất bạn có thể. Hãy xem bạn có thể làm trong bao lâu.",
           "Đeo tai nghe và nghe một bài hát vui vẻ với âm lượng lớn.",
           "Vứt bỏ tất cả những thứ bạn đã không sử dụng trong một thời gian dài.",
           "Bóp 1 tấm xốp bong bóng một cách chậm rãi."
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
