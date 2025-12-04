// Add new skills to list
function addSkill() {
  // Get input and category
  const skillInput = document.getElementById("skillInput");
  const skillCategory = document.getElementById("skillCategory").value;

  // Remove whitespace so random spaces don't mess up formatting
  const skill = skillInput.value.trim();

  // Make sure its not an empty input with add skill being clicked
  if (skill === "") {
    alert("Please enter a skill before adding!");
    return;
  }

  // Find list
  const list = document.getElementById(skillCategory);

  // Create new list item
  const li = document.createElement("li");
  li.textContent = skill;
  li.classList.add("list-group-item");

  // Add to list
  list.appendChild(li);

  // Clear input box after adding for responiveness and cleanliness
  skillInput.value = "";

}

// Array of project details
const projectTitles = [
  "Custom Marketable Landing Pages",
  "SQL Data Management",
  "Custom UI Design",
  "Animative & Interactive Websites",
  "Webstore Project",
  "Christmas Project"
];

const projectDescriptions = [
  "Creating appealing and interesting home pages to keep interest.",
  "Storing and sorting data.",
  "Intuitive and useful interfaces.",
  "Animations and responsive feedback by using the site.",
  "Easy and simple to use store.",
  "Private Christmas Project"
];

// Just used random dates
const projectDeadlines = [
  "2023-12-01",
  "2025-11-15",
  "2023-12-10",
  "2023-12-05",
  "2024-11-20",
  "2025-12-20"
];

// Images (keep paths as in your assets folder)
const projectImages = [
  "./assets/images/gen_land_page.jpg",
  "./assets/images/gen_sql.png",
  "./assets/images/gen_ui_design.jpg",
  "./assets/images/gen_interactive.jpg",
  "./assets/images/gen_web_store.jpg",
  "./assets/images/christmas_project.jpg"
];

// new container as removed from html
const projectsContainer = document.getElementById("projects-container");

// todays date
const today = new Date();

for (let i = 0; i < projectTitles.length; i++) {
  // column
  const colDiv = document.createElement("div");
  colDiv.className = "col-md-4 col-sm-6";

  // card
  const cardDiv = document.createElement("div");
  cardDiv.className = "card h-100 shadow-sm";

  // Add image
  const img = document.createElement("img");
  img.src = projectImages[i];
  img.className = "card-img-top";
  img.alt = projectTitles[i];
  cardDiv.appendChild(img);

  // Create card body
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  // Add title
  const title = document.createElement("h4");
  title.className = "card-title";
  title.innerHTML = `<em>${projectTitles[i]}</em>`; // Italicized so you can distinguish title and desc better
  cardBody.appendChild(title);

  // Add description
  const desc = document.createElement("p");
  desc.className = "card-text";
  desc.textContent = projectDescriptions[i];
  cardBody.appendChild(desc);

  // Add deadline & status
  const deadlinePara = document.createElement("p");
  const projectDate = new Date(projectDeadlines[i]);

  if (projectDate > today) {
    deadlinePara.innerHTML = `Status: <span style="color:orange;">Ongoing</span> (Deadline: ${projectDeadlines[i]})`;
  } else {
    deadlinePara.innerHTML = `Status: <span style="color:green;">Completed</span> (Deadline: ${projectDeadlines[i]})`;
  }

  cardBody.appendChild(deadlinePara);

  // add to section
  cardDiv.appendChild(cardBody);
  colDiv.appendChild(cardDiv);
  projectsContainer.appendChild(colDiv);

}


// New Education and Experience Section
const educationData = [
  ["GED Diploma", "Arizona GED", "Class of 2022"],
  ["Bachelor's Degree", "Northern Arizona University", "Class of 2025"],
  ["Master's Degree", "Northern Arizona University", "Class of 2027"],
];

const experienceData = [
  ["Intern UI Designer", "Spectrum", "2021–2022"],
  ["Intern Front-End Developer", "Spectrum Web", "2022–2023"],
  ["IT Developer and Advertiser", "Magma Technologies", "2023–Present"],
  ["Freelance Web Developer", "N/A", "2023–Present"]
];

function createTable(title, headers, data) {
  const container = document.getElementById("tables-container");

  // Add table title
  const tableTitle = document.createElement("h4");
  tableTitle.textContent = title;
  tableTitle.className = "mb-3";
  container.appendChild(tableTitle);

  // Create table
  const table = document.createElement("table");
  table.className = "table table-striped table-bordered align-middle";

  // Create thead
  const thead = document.createElement("thead");
  thead.className = "table-dark";
  const headRow = document.createElement("tr");
  headers.forEach(headerText => {
    const th = document.createElement("th");
    th.scope = "col";
    th.textContent = headerText;
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);
  table.appendChild(thead);

  // Create tbody
  const tbody = document.createElement("tbody");
  data.forEach(row => {
    const tr = document.createElement("tr");
    row.forEach(cell => {
      const td = document.createElement("td");
      td.textContent = cell;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  container.appendChild(table);
}

createTable("Education", ["Degree/Certificate", "School/University", "Graduation/Completion"], educationData);
createTable("Experience", ["Position", "Company", "Duration"], experienceData);