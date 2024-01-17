const funnyEncouragements = [
    "tak ada kata lelah untuk mencintaimu ><",
    "aku sayang kamu selamanya",
    "dari taufik untuk jijel ><",
    "semangattt terus yaa",
    
];

function showEncouragement() {
    const randomIndex = Math.floor(Math.random() * funnyEncouragements.length);
    const encouragementMessageContainer = document.getElementById('encouragementMessage');
    
    encouragementMessageContainer.innerHTML = '<p>' + funnyEncouragements[randomIndex] + '</p>';
}

