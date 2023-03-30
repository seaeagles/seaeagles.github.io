// Generate skills in work experience 

function generateSkills(jobCardId) {
    const jobCard = document.getElementById(jobCardId);
    const skills = (jobCardId === "jobcard1") 
      ? ["", "TEM/MDM application support", "Microsoft SQL(SMSS)", "JIRA, Zendesk, Azure DevOps", "Product Implementation", "QA testing"]
      : ["", "SMTP, TCP/IP protocols", "DNS: SPF/DKIM/DMARC", "Firewalls, web security", "Network troubleshooting", "Linux (bash)/CLI"];

    if (jobCard.disabled) {
        alert("Hey now! Only one click per visit, please.");
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

// Shake animation when mouseover logos 

    const logos = document.querySelectorAll('.logo');

    logos.forEach((logo) => {
      logo.addEventListener('mouseover', () => {
        logo.classList.add('animate__animated', 'animate__tada');
      });
    
      logo.addEventListener('mouseout', () => {
        logo.classList.remove('animate__animated', 'animate__tada');
      });
    });

    