var phantan = new Vue({
    el : '#khichle',
    data : {
        sceneName: 'Khích lệ bản thân',
        time: getParam('time'),
        selections : [
            "Tạo nên một câu chuyện về 2 hoặc 3 nhân vật. Tạo cho những nhân vật ấy có tính cách chiều sâu.",
            "Viết và dán nhiều khẩu hiệu tích cực khắp nơi trong căn phòng của bạn.",
            "Gửi tin nhắn cho một người bạn đã lâu không liên lạc một cách bất ngờ.",
            "Cho ai đó biết bạn đánh giá cao người đó như thế nào. Nói chuyện với họ hoặc gửi cho họ một tin nhắn về suy nghĩ của bạn.",
            "Nhờ ai đó viết những lời nhận xét tích cực về bạn. Đọc nó thật cẩn thận.",
            "Gọi cho ai đó thấu hiểu bạn. Nói với họ những điều tiêu cực bạn đang nghĩ tới và xin những lời động viên tích cực.",
            "Làm 1 danh sách 10 điều bạn thích ở một ai đó.",
            "Viết một status tích cực và đăng nó lên những trang mạng xã hội mà bạn có.",
            "Đi dạo và tận hưởng thiên nhiên. Cố gắng cảm nhận, ngắm nhìn và hòa mình vào khung cảnh thiên nhiên đó."
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
