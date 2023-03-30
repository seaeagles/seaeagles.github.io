// Generate skills in work experience 

function generateSkills(jobCardId) {
    const jobCard = document.getElementById(jobCardId);
    const skills = (jobCardId === "jobcard1") 
      ? ["", "TEM/MDM application support", "Microsoft SQL(SMSS)", "JIRA, Zendesk, Azure DevOps", "Product Implementation", "QA testing"]
      : ["", "SMTP, TCP/IP protocols", "DNS: SPF/DKIM/DMARC", "Firewalls, web security", "Network troubleshooting", "Linux (bash)/CLI"];

    if (jobCard.disabled) {
        alert("Error! Only one click per visit, please.");
        return;
      }
    
      jobCard.disabled = true;

    const skillsList = document.createElement("ul");

    skills.forEach((skill) => {
    const listItem = document.createElement("li");
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
    });

        jobCard.appendChild(skillsList)
    }


