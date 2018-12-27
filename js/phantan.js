var phantan = new Vue({
    el : '#phantan',
    data : {
        sceneName: 'Phân tán suy nghĩ',
        time: getParam('time'),
        selections : [
            "Kể tên các ca sĩ mà bạn biết. Nhiều nhất có thể.",
            "Đếm xem có bao nhiêu đồ vật trong căn phòng mà bạn đang ở.",
            "Kể tên tất cả những thứ bạn biết có màu xanh. (Bất cứ màu xanh nào)",
            "Đếm tất cả những vật có góc vuông 90 độ trong căn phòng bạn đang ở.",
            "Nghĩ đến lời một bài hát bạn biết rất rõ. Cố gắng đọc thuộc lòng lời bài hát.",
            "Đếm ngược từ 300, mỗi lần đếm ngược trừ đi 7 đơn vị. Ví dụ: 300, 293, 286,...",
            "Nghĩ tên tất cả các con vật ứng với bảng chữ cái. Ví dụ: A: chim Ác, B: con Bò, C: con Cá...",
            "Kể tên tất cả các bài hát bắt đầu bằng chữ “C” mà bạn biết.",
            "Kể tên tất cả các siêu anh hùng mà bạn biết."
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
