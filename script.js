function back() {
    window.location.href = "index.html"
}

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            back()
        }
    })