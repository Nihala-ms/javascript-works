
var jobs = [
  { id: 1, title: "Frontend Developer", companyName: "TCS", role: "Developer", skills: ["HTML", "CSS", "JavaScript"], noOfVacancy: 5 },
  { id: 2, title: "Backend Developer", companyName: "Infosys", role: "Developer", skills: ["Node.js", "Express", "MongoDB"], noOfVacancy: 4 },
  { id: 3, title: "Full Stack Developer", companyName: "Wipro", role: "Developer", skills: ["React", "Node.js", "MySQL"], noOfVacancy: 6 },
  { id: 4, title: "Python Developer", companyName: "Accenture", role: "Developer", skills: ["Python", "Django", "REST API"], noOfVacancy: 3 },
  { id: 5, title: "Java Developer", companyName: "Cognizant", role: "Developer", skills: ["Java", "Spring Boot", "MySQL"], noOfVacancy: 5 },

  { id: 6, title: "Data Analyst", companyName: "IBM", role: "Analyst", skills: ["Python", "SQL", "Excel"], noOfVacancy: 4 },
  { id: 7, title: "Data Scientist", companyName: "Amazon", role: "Scientist", skills: ["Python", "Machine Learning", "Pandas"], noOfVacancy: 3 },
  { id: 8, title: "AI Engineer", companyName: "Google", role: "Engineer", skills: ["Python", "TensorFlow", "Deep Learning"], noOfVacancy: 2 },
  { id: 9, title: "ML Engineer", companyName: "Microsoft", role: "Engineer", skills: ["Python", "Scikit-learn", "ML"], noOfVacancy: 3 },
  { id: 10, title: "Cloud Engineer", companyName: "AWS", role: "Engineer", skills: ["AWS", "Linux", "Networking"], noOfVacancy: 4 },

  { id: 11, title: "DevOps Engineer", companyName: "RedHat", role: "Engineer", skills: ["Docker", "Kubernetes", "CI/CD"], noOfVacancy: 3 },
  { id: 12, title: "System Administrator", companyName: "Oracle", role: "Administrator", skills: ["Linux", "Shell Scripting", "Networking"], noOfVacancy: 2 },
  { id: 13, title: "Database Administrator", companyName: "SAP", role: "Administrator", skills: ["MySQL", "Oracle", "Performance Tuning"], noOfVacancy: 2 },
  { id: 14, title: "Network Engineer", companyName: "Cisco", role: "Engineer", skills: ["Routing", "Switching", "Firewall"], noOfVacancy: 4 },
  { id: 15, title: "Cyber Security Analyst", companyName: "Palo Alto", role: "Analyst", skills: ["Security", "SIEM", "Ethical Hacking"], noOfVacancy: 3 },

  { id: 16, title: "UI Designer", companyName: "Zoho", role: "Designer", skills: ["Figma", "Adobe XD", "UI"], noOfVacancy: 2 },
  { id: 17, title: "UX Designer", companyName: "Freshworks", role: "Designer", skills: ["UX Research", "Wireframing", "Prototyping"], noOfVacancy: 2 },
  { id: 18, title: "Graphic Designer", companyName: "Byju’s", role: "Designer", skills: ["Photoshop", "Illustrator", "Creativity"], noOfVacancy: 3 },
  { id: 19, title: "Product Designer", companyName: "Flipkart", role: "Designer", skills: ["Design Thinking", "Figma", "UX"], noOfVacancy: 2 },
  { id: 20, title: "Motion Designer", companyName: "Swiggy", role: "Designer", skills: ["After Effects", "Animation", "Creativity"], noOfVacancy: 1 },

  { id: 21, title: "QA Tester", companyName: "HCL", role: "Tester", skills: ["Manual Testing", "Test Cases", "Bug Tracking"], noOfVacancy: 5 },
  { id: 22, title: "Automation Tester", companyName: "Tech Mahindra", role: "Tester", skills: ["Selenium", "Java", "Automation"], noOfVacancy: 4 },
  { id: 23, title: "Performance Tester", companyName: "Capgemini", role: "Tester", skills: ["JMeter", "Load Testing", "Analysis"], noOfVacancy: 2 },
  { id: 24, title: "API Tester", companyName: "Mindtree", role: "Tester", skills: ["Postman", "REST API", "Automation"], noOfVacancy: 3 },
  { id: 25, title: "Security Tester", companyName: "Deloitte", role: "Tester", skills: ["VAPT", "OWASP", "Security"], noOfVacancy: 2 },

  { id: 26, title: "HR Executive", companyName: "Reliance", role: "HR", skills: ["Recruitment", "Communication", "Onboarding"], noOfVacancy: 3 },
  { id: 27, title: "HR Manager", companyName: "Aditya Birla", role: "HR", skills: ["People Management", "Payroll", "Compliance"], noOfVacancy: 2 },
  { id: 28, title: "Technical Recruiter", companyName: "LinkedIn", role: "HR", skills: ["Hiring", "Screening", "Interviewing"], noOfVacancy: 4 },
  { id: 29, title: "Talent Acquisition", companyName: "Paytm", role: "HR", skills: ["Recruitment", "ATS", "Communication"], noOfVacancy: 3 },
  { id: 30, title: "HR Operations", companyName: "Infosys", role: "HR", skills: ["HRMS", "Documentation", "Policies"], noOfVacancy: 2 },

  { id: 31, title: "Business Analyst", companyName: "EY", role: "Analyst", skills: ["Requirement Analysis", "SQL", "Documentation"], noOfVacancy: 4 },
  { id: 32, title: "Financial Analyst", companyName: "Goldman Sachs", role: "Analyst", skills: ["Finance", "Excel", "Reporting"], noOfVacancy: 3 },
  { id: 33, title: "Marketing Analyst", companyName: "Unilever", role: "Analyst", skills: ["Market Research", "Data Analysis", "Presentation"], noOfVacancy: 2 },
  { id: 34, title: "Operations Analyst", companyName: "Uber", role: "Analyst", skills: ["Process Analysis", "Excel", "Reporting"], noOfVacancy: 3 },
  { id: 35, title: "Risk Analyst", companyName: "KPMG", role: "Analyst", skills: ["Risk Assessment", "Compliance", "Analytics"], noOfVacancy: 2 },

  { id: 36, title: "Project Manager", companyName: "Infosys", role: "Manager", skills: ["Project Planning", "Agile", "Leadership"], noOfVacancy: 3 },
  { id: 37, title: "Product Manager", companyName: "Google", role: "Manager", skills: ["Product Strategy", "Roadmap", "Stakeholders"], noOfVacancy: 2 },
  { id: 38, title: "Delivery Manager", companyName: "TCS", role: "Manager", skills: ["Delivery", "Client Handling", "Management"], noOfVacancy: 2 },
  { id: 39, title: "IT Manager", companyName: "HDFC", role: "Manager", skills: ["IT Operations", "Team Management", "Budgeting"], noOfVacancy: 1 },
  { id: 40, title: "Engineering Manager", companyName: "Meta", role: "Manager", skills: ["Leadership", "Architecture", "Mentoring"], noOfVacancy: 2 },

  { id: 41, title: "Content Writer", companyName: "Zomato", role: "Content", skills: ["Writing", "SEO", "Creativity"], noOfVacancy: 3 },
  { id: 42, title: "Technical Writer", companyName: "Atlassian", role: "Content", skills: ["Documentation", "API Docs", "Writing"], noOfVacancy: 2 },
  { id: 43, title: "Digital Marketing Executive", companyName: "Google", role: "Marketing", skills: ["SEO", "SEM", "Analytics"], noOfVacancy: 4 },
  { id: 44, title: "Social Media Manager", companyName: "Instagram", role: "Marketing", skills: ["Social Media", "Content Strategy", "Analytics"], noOfVacancy: 2 },
  { id: 45, title: "Brand Manager", companyName: "Nike", role: "Marketing", skills: ["Branding", "Campaigns", "Strategy"], noOfVacancy: 1 },

  { id: 46, title: "Sales Executive", companyName: "BYJU'S", role: "Sales", skills: ["Sales", "Communication", "Negotiation"], noOfVacancy: 6 },
  { id: 47, title: "Account Manager", companyName: "Salesforce", role: "Sales", skills: ["Client Handling", "CRM", "Sales"], noOfVacancy: 3 },
  { id: 48, title: "Business Development Executive", companyName: "Ola", role: "Sales", skills: ["Lead Generation", "Negotiation", "Sales"], noOfVacancy: 4 },
  { id: 49, title: "Inside Sales Executive", companyName: "HubSpot", role: "Sales", skills: ["CRM", "Communication", "Sales"], noOfVacancy: 5 },
  { id: 50, title: "Regional Sales Manager", companyName: "Amazon", role: "Sales", skills: ["Sales Strategy", "Leadership", "Targets"], noOfVacancy: 2 }
];

// 1. Create an array of job titles from the jobs dataset.
var newArray=jobs.map(j=>({Titles:j.title}));
console.log("1.Titles:");
console.log(newArray);

// 2. Create an array of company names in uppercase.
var newArrayNames=jobs.map(j=>({companyName:j.companyName.toUpperCase()}));
console.log("2.Company names in Uppercase:");
console.log(newArrayNames);

// 3. Create an array showing job title with company name in the format: Frontend Developer - TCS.
var newArrayFormat=jobs.map(j=>`${j.title}-${j.companyName}`);
console.log("3.company name in the format: Frontend Developer - TCS");
console.log(newArrayFormat);

// 4. Create an array of objects containing id and role only.
var newArrays=jobs.map(j=>({id:j.id,role:j.role}));
console.log("4.id and role :");
console.log(newArrays);

// 5. Create an array that shows only the number of vacancies for each job.
newArrayvaccancies=jobs.map(j=>({title:j.title,vaccancy:j.noOfVacancy}));
console.log("5.Number of vaccancies for each job:");
console.log(newArrayvaccancies);

// 6. List all jobs where the role is "Developer".
var Developerlist=jobs.filter(j=>j.role=="Developer");
console.log("6.Developer list:");
console.log(Developerlist);

// 7. List all jobs with more than 4 vacancies.
var moreVaccancy=jobs.filter(j=>j.noOfVacancy>4);
console.log("7.Morethan 4 vaccancies:");
console.log(moreVaccancy);

// 8. Find all jobs that require the skill "Python".
var pythonskills=jobs.filter(j=>j.skills.includes("Python"));
console.log("8.Python skills:");
console.log(pythonskills);

// 9. List all jobs from the company "Infosys".
var infosyscompany=jobs.filter(j=>j.companyName=="Infosys");
console.log("9.Infosys company");
console.log(infosyscompany);

// 10. Find all jobs where the skills array length is greater than 3.
var moreSkills=jobs.filter(j=>j.skills.length>3);
console.log("10.mores skills(more than 3):");
console.log(moreSkills);
    
// 11. List all Manager-level jobs.
var managerlevel=jobs.filter(j=>j.role=="Manager");
console.log("11.manager level jobs:");
console.log(managerlevel);

// 12. Find all jobs whose title contains the word "Engineer".
var engineerword=jobs.filter(j=>j.title.includes("Engineer"));
console.log("12.Engineer word jobs:");
console.log(engineerword);

// 13. Find the total number of vacancies across all jobs.
var totalVacancy=jobs.reduce((s,v)=>s+v.noOfVacancy,0);
console.log("13.Total vaccancies:");
console.log(totalVacancy);

// 14. Find the total number of Developer roles.
var totalDeveloper=jobs.filter(d=>d.role=="Developer").length;
console.log("14.Total no of developers:");
console.log(totalDeveloper);

// 15. Create an object that shows total vacancies by role. (Example: { Developer: 25, Manager: 10 })
var roleVaccancy={};
for(let j of jobs)
{
    let vaccancy=j.noOfVacancy;
    let role=j.role;
    if(role in roleVaccancy)
    {
        roleVaccancy[role]+=vaccancy
    }
    else
    {
        roleVaccancy[role]=vaccancy
    }

}
console.log("15.total vaccancy by roles:");
console.log(roleVaccancy);

// 16. Find the company with the highest total vacancies.
var highestVaccancy=jobs.reduce((v1,v2)=>v1.noOfVacancy>v2.noOfVacancy?v1:v2);
console.log("16.Highest vaccancy:");
console.log(highestVaccancy);

// 17. Count how many jobs are available per company.
var jobCount={};
for(let j of jobs)
{
    let companyName=j.companyName.toLowerCase();
    let vaccancy=j.noOfVacancy;
    if(companyName in jobCount)
    {
        jobCount[companyName]+=vaccancy;
    }
    else
    {
        jobCount[companyName]=vaccancy;
    }

}
console.log("17.Job count per company");
console.log(jobCount);

// 18. Create an object that groups jobs by role.
var jobRoles={};
for(let j of jobs)
{
    let role=j.role;
    if(role in jobRoles)
    {
        jobRoles[role].push(j);
    }
    else
    {
        jobRoles[role]=[j];
    }
}
console.log("18.groups jobs by role:");
console.log(jobRoles);

// 19. Sort jobs by number of vacancies (ascending order).
var soretedasc=jobs.sort((j1,j2)=>j1.noOfVacancy-j2.noOfVacancy);
console.log("19.Soreted no of vacancy asc");
console.log(soretedasc);

// 20. Sort jobs by number of vacancies (descending order).
var soreteddsc=jobs.sort((j1,j2)=>j2.noOfVacancy-j1.noOfVacancy);
console.log("20.Soreted no of vacancy dessc");
console.log(soreteddsc);

// 21. Sort jobs by job title alphabetically.
var sortalpha=jobs.sort((j1,j2)=>j1.title.localeCompare(j2.title));
console.log("21.Sorted jobs by title alphabetically:");
console.log(sortalpha);

// 22. Sort jobs by company name in reverse alphabetical order.
var sotrevalpha=jobs.sort((j1,j2)=>j2.companyName.localeCompare(j1.companyName));
console.log("22. company name in reverse alphabetical order");
console.log(sotrevalpha);

// 23. Check if any job requires the skill "Django".
var django=jobs.some(j=>j.skills.includes("Django"));
console.log("23.requires the skill Django:");
console.log(django);

// 24. Check if all jobs have at least 1 vacancy.
var vacancycheck=jobs.every(j=>j.noOfVacancy>0);
console.log("24.all jobs have at least 1 vacancy:");
console.log(vacancycheck);


// 25. Find the first job where the role is "Manager".
var managerfind=jobs.find(j=>j.role=="Manager");
console.log("25. first job where the role is Manager:");
console.log(managerfind);

