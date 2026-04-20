<script>
/* ===== モーダル操作 ===== */
const openBtn = document.getElementById('openLogin');
const closeBtn = document.getElementById('closeLogin');
const modal = document.getElementById('loginModal');

openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  openBtn.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  openBtn.style.display = 'block';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    openBtn.style.display = 'block';
  }
});

/* ===== ログイン処理 ===== */
document.getElementById('modalLoginBtn').addEventListener('click', () => {
  const user = document.getElementById('modal-user').value;
  const pass = document.getElementById('modal-pass').value;

  if (user === "union" && pass === "1234") {
    window.location.href = "member.html";
  } else {
    alert("IDまたはパスワードが違います");
  }
});
</script>
