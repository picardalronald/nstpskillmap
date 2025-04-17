// Function to show the clicked section and hide others
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
  
    // Show the clicked section
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
      sectionToShow.style.display = 'block';
    }
  }

  //  Function to populate Farm Profile details
   function showFarmProfile(name, size, age, type, address, description, directoryName, position, contact, imgSrc) {
    document.getElementById('farmName').innerText = `Name: ${name}`;
    document.getElementById('farmSize').innerText = `Size: ${size}`;
    document.getElementById('farmAge').innerText = `Age: ${age}`;
    document.getElementById('farmType').innerText = `Type: ${type}`;
    document.getElementById('farmAddress').innerText = `Address: ${address}`;
    document.getElementById('farmDescription').innerText = `Description: ${description}`;
    document.getElementById('directoryName').innerText = `Name: ${directoryName}`;
    document.getElementById('directoryPosition').innerText = `Position: ${position}`;
    document.getElementById('directoryContact').innerText = `Contact No: ${contact}`;
    
    // Update the farm image dynamically
     document.getElementById('farmImage').src = imgSrc;

  }

  // Function to populate Skill Map details
  function showSkillMap(name, skill, farm, contact) {
    document.getElementById('skillName').innerText = `Name: ${name}`;
    document.getElementById('skill').innerText = `Skill: ${skill}`;
    document.getElementById('farmSkill').innerText = `Farm: ${farm}`;
    document.getElementById('contactSkill').innerText = `Contact No: ${contact}`;
  }

  // Function to show Analysis details
  function showAnalysis(analysis) {
    document.getElementById('analysisText').innerText = analysis;
  }