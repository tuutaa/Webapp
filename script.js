// ตรวจสอบการล็อกอิน
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // ป้องกันการรีเฟรชหน้า

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // ตรวจสอบ username และ password
    if (username === "admin" && password === "123456") {
        // หากถูกต้อง ไปหน้า Home
        window.location.href = "home.html";
    } else {
        // หากไม่ถูกต้อง แสดงข้อความผิดพลาด
        document.getElementById("error-message").style.display = "block";
    }
});
