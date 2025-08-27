function Clicker(click) {
    // Lấy tất cả element có class booking-topic-item 
    const items = document.querySelectorAll(".booking-topic-item")
    // Xoá tất cả class active trong element chứa booking-topic-item
    items.forEach(i => i.classList.remove("active"))
    // Thêm class active vào element mà mình click
    click.classList.add("active")
}