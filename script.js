let uploadedPhotoURL = '';

document.getElementById("photoInput").addEventListener("change", function(event){
    const file = event.target.files[0];
    if (file) {
        uploadedPhotoURL = URL.createObjectURL(file);
    }
});

function generatePortfolio() {
    const name = document.getElementById("nameInput").value;
    const bio = document.getElementById("bioInput").value;
    const about = document.getElementById("aboutInput").value;
    const skills = document.getElementById("skillsInput").value.split(',');
    const projects = document.getElementById("projectsInput").value.split(',');
    const experience = document.getElementById("experienceInput").value;
    const knowledge = document.getElementById("knowledgeInput").value;
    const email = document.getElementById("emailInput").value;
    const github = document.getElementById("githubInput").value;
    const linkedin = document.getElementById("linkedinInput").value;
    const theme = document.getElementById("themeSelect").value;

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${name}'s Portfolio</title>
    <style>
        body { font-family: Arial; margin:0; }
        header, footer { text-align:center; padding:15px; color:white; }
        nav { display:flex; justify-content:center; gap:20px; background:#333; padding:10px; }
        nav a { color:white; text-decoration:none; }
        nav a:hover { color:#00c6ff; }
        section { padding:30px; max-width:1000px; margin:auto; }
        img { width:120px; height:120px; border-radius:50%; margin:10px auto; display:block; }
        ul { list-style:none; padding:0; }
        li { padding:5px 0; }
        a { color:#00c6ff; text-decoration:none; }
        a:hover { text-decoration:underline; }

        body.theme1 { background:#0f3057; color:white; }
        header.theme1, footer.theme1 { background:#00587a; }
        nav.theme1 { background:#008891; }

        body.theme2 { background:#ff5f6d; color:white; }
        header.theme2, footer.theme2 { background:#ffc371; color:black; }
        nav.theme2 { background:#ff8c42; }

        body.theme3 { background:#1b5e20; color:white; }
        header.theme3, footer.theme3 { background:#4caf50; }
        nav.theme3 { background:#388e3c; }
    </style>
</head>
<body class="${theme}">

<header class="${theme}">
    <h1>${name}</h1>
    <p>${bio}</p>
</header>

<nav class="${theme}">
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#experience">Experience</a>
    <a href="#knowledge">Knowledge</a>
    <a href="#contact">Contact</a>
</nav>

<section>
    <img src="${uploadedPhotoURL}" alt="Profile Photo">
</section>

<section id="about">
    <h2>About Me</h2>
    <p>${about}</p>
</section>

<section id="projects">
    <h2>Projects</h2>
    <ul>${projects.map(p => `<li>${p.trim()}</li>`).join('')}</ul>
</section>

<section id="experience">
    <h2>Work Experience</h2>
    <p>${experience}</p>
</section>

<section id="knowledge">
    <h2>Knowledge</h2>
    <p>${knowledge}</p>
</section>

<section id="contact">
    <h2>Contact</h2>
    <p>Email: ${email}</p>
    <p><a href="${github}" target="_blank">GitHub</a> | <a href="${linkedin}" target="_blank">LinkedIn</a></p>
</section>

<footer class="${theme}">
    <p>&copy; ${name}'s Portfolio</p>
</footer>

</body>
</html>`;

    const iframe = document.getElementById("portfolioPreview");
    iframe.srcdoc = htmlContent;
    document.getElementById("previewSection").classList.remove("hidden");

    localStorage.setItem("portfolioHTML", htmlContent);
}

function downloadPortfolio() {
    const content = localStorage.getItem("portfolioHTML");
    const blob = new Blob([content], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = "MyPortfolio.html";
    a.click();
}
