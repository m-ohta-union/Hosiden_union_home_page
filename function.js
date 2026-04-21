const openBtn = document.getElementById('openLogin');
const modal = document.getElementById('loginModal');
const closeBtn = document.getElementById('closeLogin');

const userInput = document.getElementById('modal-user');

openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  openBtn.style.display = 'none';

  // ✅ bodyスクロールを止める
  document.body.style.overflow = 'hidden';

  // ✅ 少し遅らせてフォーカス（スマホ必須）
  setTimeout(() => {
    userInput.focus();
  }, 100);
});

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

function closeModal() {
  modal.style.display = 'none';
  openBtn.style.display = 'block';

  // ✅ 元に戻す
  document.body.style.overflow = '';
}

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