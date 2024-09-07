const skillsSection = document.getElementById("skills");
const toggleButton = document.getElementById("toggle-skills");

toggleButton?.addEventListener("click", () => {
    if (skillsSection?.style.display === "none") {
        skillsSection.style.display = "block";
    } else {
        skillsSection.style.display = "none";
    }
});
const form = document.getElementById("resume-form") as HTMLFormElement;
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;

    const resumeSection = document.createElement("div");
    resumeSection.innerHTML = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Education: ${education}</p>
    `;
    document.body.appendChild(resumeSection);
});
resumeSection.setAttribute("contenteditable", "true");

