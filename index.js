
function generateSkills1() {
    const jobCard1 = document.getElementById("jobcard1");
    const skills = ["", "TEM/MDM application support", "Microsoft SQL(SMSS)", "JIRA, Zendesk, Azure DevOps", "Product Implementation", "QA testing" ];

    if (jobCard1.disabled) {
        alert("Error! Only one click per visit, please.");
        return;
      }
    
      jobCard1.disabled = true;

    const skillsList = document.createElement("ul");

    skills.forEach((skill) => {
    const listItem = document.createElement("li");
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
    });

        jobCard1.appendChild(skillsList)
    }


function generateSkills2 () {
    const jobCard2 = document.getElementById("jobcard2");
    const skills = ["", "SMTP, TCP/IP protocols", "DNS: SPF/DKIM/DMARC", "Firewalls, web security", "Network troubleshooting", "Linux (bash)/CLI"];

    if (jobCard2.disabled) {
        alert("Error! Only one click per visit, please.");
        return;
      }
    
      jobCard2.disabled = true;

    const skillsList = document.createElement("ul");

    skills.forEach((skill) => {
        const listItem = document.createElement("li");
        listItem.textContent = skill;
        skillsList.appendChild(listItem);
    });

    jobCard2.appendChild(skillsList);
 }


