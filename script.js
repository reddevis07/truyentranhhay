document.querySelectorAll('.comic h3').forEach(title => {
    title.addEventListener('click', () => {
        alert(`Bạn đã chọn: ${title.textContent}`);
    });
});
