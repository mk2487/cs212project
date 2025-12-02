console.log("app.js loaded!");

//this shows an alert just one time when user clicks the downlaod resume button
const button = document.getElementById('buttonResume');

let hasDownloadedResume = false;
let count = 0;
const resumeDisplay = document.getElementById("downloadNumber");

button.addEventListener('click', function(event) {
    count += 1;
    resumeDisplay.textContent = "Resume has been downloaded " + count + " times."

    if(hasDownloadedResume == false) {
        setTimeout(() => {
             alert("Your resume is downloaded successfully!");
        }, 2000);
        hasDownloadedResume = true;
    }
});

//this function creates a greeting message and updtaes on the html side
function showGreeting(name, greeting) {
    return greeting + ", my name is " + name + "! Welcome to my portfolio"
}

const today = new Date();
const hours = today.getHours();

function greetingTime(time) {
    if(time >= 11 && time <= 16 ) {
        return "Good afternoon";
    } else if(time >= 17 && time <= 23) {
        return "Good Evening"
    } else {
        return "Good Morning"
    }
}

const greetingDiv = document.querySelector('.greetings')

const greetingMessage = showGreeting('Ethan Senger', greetingTime(hours));

greetingDiv.textContent = greetingMessage;

const deadline = new Date('2025-12-12');

//converts to miliseconds, takes difference, converts back to days
function daysUntilDeadline(today, deadline) {
    const difference = deadline - today;
    const milisecondsInDay = 1000 * 60 * 60 * 24;
    const numberOfDays = Math.ceil(difference / milisecondsInDay);
    return "There are " + numberOfDays + " days until this portfolio is due";
}

const projectDateUpdate= document.querySelector('.portfolio-project')

// projectDateUpdate.textContent = daysUntilDeadline(today, deadline);

// document.getElementById("addSkillBtn").addEventListener("click", function() {
//     const skillInput = document.getElementById("skillInput");
//     const skill = skillInput.value.trim();


//     if(skill !== "") {
//         const li = document.createElement("li");
//         li.textContent = skill;
//         li.className = "skill-item";

//         document.getElementById("skillAdded").appendChild(li);

//         skillInput.value = "";
//     } else {
//         alert("Please enter a skill");
//     }
// });

// Wait for the document to fully load before running code
$(document).ready(function() {
      console.log("Document ready, JS loaded");

  // Array to store all skills dynamically
  let skills = [];

  //uses callback to refresh the page for the new list of skills
  const renderSkills = (callback) => {
     console.log("renderSkills called", skills);
    // Clear existing list
    $("#skillsList").empty();

    // Loop through skills array and create <li> elements
    //also creatinf the buttoin for deleting and edditing the skills
    skills.forEach((skill, index) => {
      const li = $(`
        <li>
          <span class="skill-name">${skill}</span>
          <div class="buttons">
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
          </div>
        </li>
      `);

      // Smooth fade-in animation for new skills
      li.hide().appendTo("#skillsList").fadeIn(200);

      // Attach event handlers for edit and delete
      li.find(".edit-btn").click(() => editSkill(index));
      li.find(".delete-btn").click(() => removeSkill(index));
    });

    // Run callback if provided (used to clear input box)
    if (callback) callback();
  };

 
   //checks to make sure the skill is valid (not empty or duplicate) and uses higher order functions to 
  const validateSkill = (skill, onValid, onInvalid) => {
    if (skill === "") { 
        onInvalid("Enter a skill");
        return;
    }

    if (skills.includes(skill)) {
        onInvalid("Skill already exists");
        return;
    } 

    onValid();
  };

  //allows the user to add a skill to the list 
  $("#addSkillBtn").off("click").on("click", () => {


    const skill = $("#skillInput").val().trim();
     console.log("Skill entered:", skill);

    // Validate before adding
    validateSkill(
      skill,
      () => {
        // Add to array and re-render list
        skills.push(skill);
        renderSkills(() => $("#skillInput").val(""));
      },
      (msg) => alert(msg)
    );
  });

  //function allows the user to edit a pre existing skill 
  const editSkill = (index) => {
    const currentSkill = skills[index];
    const newSkill = prompt("Edit skill:", currentSkill);

    if (newSkill && newSkill.trim() !== "") {
      const trimmed = newSkill.trim();

      // Prevent duplicates
      if (skills.includes(trimmed) && trimmed !== currentSkill) {
        alert("Skill is already on list");
        return;
      }

      // Update array and refresh
      skills[index] = trimmed;
      renderSkills();
    }
  };

  //removes skill from list 
  const removeSkill = (index) => {
    const item = $("#skillsList li").eq(index);

    // Animate removal
    item.slideUp(300, function() {
      // Remove from array after animation
      skills.splice(index, 1);
      renderSkills();
    });
  };

   $("#skillInput").keydown(function(event) {
        if(event.key === "Enter") {
            // Enter adds the skill
            $("#addSkillBtn").click();
          } else if(event.key === "Escape") {
            // Escape key clears the input field
            $(this).val("");
        }
    });
});

//smooth scrolling nav 
$(document).ready(function() {

  //array of the id for navigation
  const navItems = ["introduction", "skills", "experience", "resume", "contact"];

  //before rendering deletes anything in list to prevent duplicates
  const renderNavMenu = () => {
    $("#navMenu").empty(); 

    //this loops over the array and creates the li elements for each id 
    //removes spacing and adds it to the navMenu
    navItems.forEach(item => {
      const li = $(`
        <li class="nav-item">
          <a class="nav-link" href="#${item.replace(/\s+/g,'')}">${item}</a>
        </li>
      `);
      li.appendTo("#navMenu");
    });

    // Smooth scrolling
    //waits for the on click function to occur, prevent the default behavior of jumping straight to the point on page
    //gets the link to href
    //target offset calcualtes how far from the top of the page the section is
    //it then will always get there in 600 ms 
    $(".nav-link").on("click", function(e) {
      e.preventDefault();
      const targetId = $(this).attr("href");
      const targetOffset = $(targetId).offset().top;

      $("html, body").animate({ scrollTop: targetOffset }, 600);
    });
  };

  renderNavMenu();
});

$(document).ready(function() {
  const projects = [
      {
          title: "CS-212 Portfolio",
          description: "Website about myself and my work. Updating throughout the semester.",
          deadline: new Date("2025-11-22"),
          imageURL: "https://via.placeholder.com/150"
      },
      {
          title: "CS-386 Health Website",
          description: "Creating a health tracker website. Tracks fitness and caloric intake.",
          deadline: new Date("2025-12-22"),
          imageURL: "https://via.placeholder.com/150"
      }
  ];


function renderProjects(projectArray) {
    const projectSection = $("#portfolio-project");
    projectSection.empty(); // clear existing projects

    projectArray.forEach(project => {
        const today = new Date();
        const status = project.deadline > today ? "Currently Ongoing" : "Completed";

        const card = $(`
            <div class="project-card">
                <img src="${project.imageURL}" alt="${project.title}" class="project-image">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <p class="project-deadline">Deadline: ${project.deadline.toLocaleDateString()}</p>
                <p class="project-status">${status}</p>
            </div>
        `);

        projectSection.append(card);
    });
  }

  renderProjects(projects);

  // Sort ascending (earliest first)
  $("#sortAsc").on("click", function() {
      const sorted = projects.slice().sort((a, b) => a.deadline - b.deadline);
      renderProjects(sorted);
  });

  // Sort descending (latest first)
  $("#sortDesc").on("click", function() {
      const sorted = projects.slice().sort((a, b) => b.deadline - a.deadline);
      renderProjects(sorted);
  });
});
// const projectSection = document.getElementById("portfolio-project");

// for(let i = 0; i < projectTitle.length; i++) {
//     const title = document.createElement("li");
//     title.className = "titleName"
//     title.textContent = projectTitle[i];
//     projectSection.appendChild(title);

//     const description = document.createElement("li");
//     description.className = "descriptionName"
//     description.textContent = projectDescription[i];
//     projectSection.appendChild(description);

//     const deadline = document.createElement("li");
//     deadline.className = "deadlineName"
//     deadline.textContent = projectDeadline[i];
//     projectSection.appendChild(deadline);

//     const deadlineDate = new Date(projectDeadline[i]);

//     const deadlineDisplay = document.createElement("li");
//     if(deadlineDate > today) {
//         deadlineDisplay.textContent = "Currently Ongoing";
//     } else {
//         deadlineDisplay.textContent = "Completed"
//     }

//     projectSection.appendChild(deadlineDisplay);
// }

const experienceTable = document.getElementById("experience");

const tableHeader = ["#", "Institution", "Position", "Duration"];
const experience1 = ["1", "Tabue Shabu", "Server", "2 Year"]
const experience2 = ["2", "AirCare Ambulance", "EMT", "1 Year"]


function createTable(data1, data2, headers) {
    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.border = "1";
    
    const thead = document.createElement("thead")
    const headerRow = document.createElement("tr");

    for(let i = 0; i < headers.length; i++) {
        const th = document.createElement("th");
        th.textContent = headers[i];
        headerRow.appendChild(th);

        
    }
    
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const rowOne = document.createElement("tr");

    for(let i = 0; i < data1.length; i++) {
        const td = document.createElement("td");
        td.textContent = data1[i];
        rowOne.appendChild(td);
    }

    table.appendChild(rowOne);

    const rowTwo = document.createElement("tr");

    for(let i = 0; i < data2.length; i++) {
        const td = document.createElement("td");
        td.textContent = data2[i];
        rowTwo.appendChild(td);
    }

    table.appendChild(rowTwo);

    return table;
}

experienceTable.appendChild(createTable(experience1, experience2, tableHeader));