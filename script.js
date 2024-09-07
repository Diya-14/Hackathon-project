var skillsSection = document.getElementById("skills");
var toggleButton = document.getElementById("toggle-skills");
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener("click", function () {
    if ((skillsSection === null || skillsSection === void 0 ? void 0 : skillsSection.style.display) === "none") {
        skillsSection.style.display = "block";
    }
    else {
        skillsSection.style.display = "none";
    }
});
var form = document.getElementById("resume-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var resumeSection = document.createElement("div");
    resumeSection.innerHTML = "\n        <h2>".concat(name, "</h2>\n        <p>Email: ").concat(email, "</p>\n        <p>Education: ").concat(education, "</p>\n    ");
    document.body.appendChild(resumeSection);
});
resumeSection.setAttribute("contenteditable", "true");
