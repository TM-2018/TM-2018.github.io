var skills = document.querySelectorAll('.skill_knowledge');

skills.forEach(element => {
    for (var i = 0; i < 5; i ++) {
        var knowledgeBall = document.createElement('span');
        if (i <= 2) {
            knowledgeBall.style.color = 'blue';
        }
    knowledgeBall.innerHTML = "&#8226";
    element.appendChild(knowledgeBall);
    }
});