import { db } from './firebase.js';
import { collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Dark Mode Toggle
const darkToggle = document.getElementById('darkModeToggle');
darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
});

// Load markets from Firestore - scalable for future states
async function loadMarkets() {
    const marketGrid = document.getElementById('marketGrid');
    const q = query(collection(db, "markets"));
    const snapshot = await getDocs(q);
    
    snapshot.forEach(doc => {
        const market = doc.data();
        marketGrid.innerHTML += `
            <div class="category-card">
                <h3>${market.name}</h3>
                <p>${market.state}, ${market.country}</p>
            </div>
        `;
    });
}

// Init
document.addEventListener('DOMContentLoaded', loadMarkets);