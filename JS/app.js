const app = document.getElementById('app');

// Sidebar
const sidebar = `
  <aside class="fixed top-0 left-0 h-full w-48 bg-black text-white flex flex-col p-4 space-y-6 shadow-lg z-50">
    <h1 class="text-2xl font-bold mb-4">Tayyaba Iqbal</h1>
    <nav class="flex flex-col space-y-4">
      <a href="#hero" class="hover:text-green-400">Home</a>
      <a href="#about" class="hover:text-green-400">About</a>
      <a href="#skills" class="hover:text-green-400">Skills</a>
      <a href="#projects" class="hover:text-green-400">Projects</a>
      <a href="#contact" class="hover:text-green-400">Contact</a>
    </nav>
    <a href="#" download="#"
       class="bg-green-500 p-2 rounded hover:bg-green-600 mt-2 text-center text-white">
      Download CV
    </a>
  </aside>
`;

// Main content
const content = `
  <main class="ml-52 space-y-16 p-8 bg-[#0e0e0e] text-white">
    
    <!-- Hero -->
    <section id="hero" class="min-h-screen flex flex-col justify-center items-center text-center">
      <h2 class="text-5xl font-light mb-4 tracking-wide"><b>Tayyaba Iqbal</b></b></h2>
      <p class="text-lg text-gray-300 italic">World’s Okayest Coder! 👩🏻‍💻</p>
      <p class="mt-2 text-md text-gray-400"> Software Engr| Content Writer ✍🏻</p>
      <button id="learnMoreBtn" class="mt-8 px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition">
        Explore My Work
      </button>
    </section>

    <!-- About -->
    <section id="about" class="flex flex-col-reverse md:flex-row items-center gap-12 px-6 py-16 bg-[#0f172a]">
      <div class="flex justify-center items-center w-full md:w-1/2">
        <img src="#" class="rounded-3xl shadow-2xl w-72 md:w-80 lg:w-96" />
      </div>
      <div class="w-full md:w-1/2 text-white text-center md:text-left">
        <h3 class="text-4xl font-bold mb-6">About Me</h3>
        <p class="text-lg text-gray-300 leading-8">
          I’m Tayyaba Iqbal — a passionate Software Engineering undergraduate at the Institute of Business Management (IoBM), Karachi, with over 5 years of experience in the freelance industry.

As a developing tech professional, I specialize in C/C++ programming and web development using HTML, CSS, and JavaScript, while also offering a wide range of freelance services. I'm currently focused on expanding my expertise in modern technologies and software development practices to build meaningful digital solutions.

Over the years, I’ve worked with both international and local clients through platforms like Fiverr, Upwork, and Freelancer, delivering high-quality results across various domains.
<br><br>
I’m actively learning, building, and seeking opportunities where I can apply my skills, gain experience, and grow as a professional.

If you're looking for a dedicated freelancer or an emerging software engineer with a strong foundation and creative mindset — let's connect!...
        </p>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="p-6 bg-[#1a1a1a] rounded-lg shadow-md">
      <h3 class="text-3xl font-semibold mb-6">Skills</h3>
      <div class="space-y-6">
        ${[
          { name: "HTML, CSS, JS (ES6+)", value: "90%" },
          { name: "C/C++", value: "80%" },
          { name: "Content Writting", value: "60%" },
          { name: "Vedio Editing", value: "85%" }
        ].map(skill => `
          <div>
            <div class="flex justify-between mb-1">
              <span class="text-base font-medium">${skill.name}</span>
              <span class="text-sm font-medium">${skill.value}</span>
            </div>
            <div class="w-full bg-gray-800 rounded-full h-4">
              <div class="bg-green-500 h-4 rounded-full" style="width: ${skill.value};"></div>
            </div>
          </div>
        `).join("")}
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="py-8">
      <h3 class="text-3xl font-semibold mb-8 text-center">Projects</h3>
      <div id="projectsContainer" class="grid md:grid-cols-2 gap-6 px-4">
        <!-- Cards injected here -->
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="bg-[#1a1a1a] p-6 rounded-lg shadow-md mt-10">
      <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        <div class="space-y-2 md:w-1/2">
          <h3 class="text-3xl font-semibold">Contact</h3>
          <p class="text-gray-300"><strong>Email:</strong> Email</p>
          <p class="text-gray-300"><strong>Phone:</strong> phone num</p>
          <p class="text-gray-300"><strong>Location:</strong> Karachi, Pakistan</p>
        </div>
        <div class="flex flex-col space-y-3 md:items-end md:w-1/2">
          <a href="#" class="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600 w-full md:w-auto text-center">
            WhatsApp Me
          </a>
          <a href="#" class="bg-black text-white px-5 py-2 rounded hover:bg-gray-800 w-full md:w-auto text-center">
            Visit LinkedIn
          </a>
        </div>
      </div>
    </section>

    <!-- Socials -->
    <section id="socials" class="bg-[#1a1a1a] p-6 rounded-lg shadow-md mt-10">
      <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
        <div class="space-y-2 md:w-1/2">
          <h3 class="text-3xl font-semibold text-white">Follow Us</h3>
          <p class="text-gray-300">Stay connected with us on our social platforms.</p>
        </div>
        <div class="flex space-x-4 md:w-1/2 md:justify-end">
          <a href="#" target="_blank" class="text-blue-400 hover:text-blue-500 text-2xl"><i class="fab fa-behance"></i></a>
          <a href="#" target="_blank" class="text-blue-700 hover:text-blue-800 text-2xl"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" target="_blank" class="text-gray-300 hover:text-white text-2xl"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </section>

    <footer class="mt-16 text-center text-gray-400 py-4 border-t border-gray-800">
      &copy; 2025 Tayyaba Iqbal
    </footer>
  </main>
`;

// Inject sidebar and content
app.innerHTML = sidebar + content;

// Now inject projects after DOM is ready
const projects = [
  {
    img: "#",
    desc: "An elegant wedding planning platform for modern couples.",
    link: "#"
  },
  {
    img: "#",
    desc: "A mobile health tracking app that helps monitor your fitness and wellness goals.",
    link: "#"
  },
  {
    img: "#",
    desc: "An e-learning platform that provides interactive lessons and live classes.",
    link: "https://example.com/eduplatform"
  },
  {
    img: "#",
    desc: "A secure fintech application for managing transactions and budgeting easily.",
    link: "https://example.com/fintechapp"
  }
];

const container = document.getElementById("projectsContainer");

if (container) {
  container.innerHTML = projects.map((project, index) => `
    <div class="bg-[#1a1a1a] p-4 rounded shadow flex flex-col items-center">
      <img src="${project.img}" alt="Project ${index + 1}" class="rounded mb-4 w-full h-48 object-cover bg-gray-700">
      <p class="text-center mb-4">${project.desc}</p>
      <a href="${project.link}" target="_blank" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">View Project</a>
    </div>
  `).join("");
}
