import {
  doc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const registerForm = document.getElementById('registerForm');
const errorMsg = document.getElementById('errorMsg');

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    try {
        // 1. Create user in Firebase Auth
        const userCredential = await
        if (
    !fullName.trim() ||
    !email.trim() ||
    !phone.trim() ||
    !password.trim()
){
    errorMsg.textContent = "Please fill in all fields.";
    return;
}
        createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // 2. Save user data to Firestore - Role = seller by default
        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            fullName: fullName,
            email: email,
            phone: phone,
            role: "seller", status: "active",
verified: false,//
            seller, admin, guest
          createdAt: serverTimestamp()
        });

        alert("Registration successful! Redirecting to Dashboard...");
        window.location.href = "dashboard.html";

    }switch (error.code) {
    case "auth/email-already-in-use":
        errorMsg.textContent = "This email is already registered.";
        break;

    case "auth/weak-password":
        errorMsg.textContent = "Password must be at least 6 characters.";
        break;

    case "auth/invalid-email":
        errorMsg.textContent = "Please enter a valid email address.";
        break;

    default:
        errorMsg.textContent = "Registration failed. Please try again.";
}
});