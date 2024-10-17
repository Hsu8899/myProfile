function openTab(evt, tabName) {
    // 隱藏所有的分頁內容
    var tabContents = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // 移除所有按鈕的 active 狀態
    var tabButtons = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // 顯示選定的分頁內容，並啟用按鈕的 active 狀態
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}
