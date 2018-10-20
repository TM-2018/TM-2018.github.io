var skills = document.querySelectorAll('.skill_knowledge');
var skillsArray = [4,4,5,4,4,4,4]
    
skills.forEach((element, index) => {
    for (var i = 0; i < 5; i ++) {
        var knowledgeBall = document.createElement('span');
        if (i < skillsArray[index]) {
            knowledgeBall.innerHTML = "&#8226";
        } else {
            knowledgeBall.innerHTML = "&#9702";
            knowledgeBall.style.fontSize = "65px";
        }
    element.appendChild(knowledgeBall);
    }
});