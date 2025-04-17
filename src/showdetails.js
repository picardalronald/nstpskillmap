function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

function showFarmProfileFromCurrent() {
  if (!currentFarm) return;

  document.getElementById('farmImage').src = currentFarm.image;
  document.getElementById('farmName').textContent = "Name: " + currentFarm.name;
  document.getElementById('farmSize').textContent = "Size: " + currentFarm.size;
  document.getElementById('farmAge').textContent = "Age: " + currentFarm.age;
  document.getElementById('farmType').textContent = "Type: " + currentFarm.type;
  document.getElementById('farmAddress').textContent = "Address: " + currentFarm.address;
  document.getElementById('farmDescription').textContent = "Description: " + currentFarm.description;

  document.getElementById('directoryName').textContent = "Name: " + currentFarm.directory.name;
  document.getElementById('directoryPosition').textContent = "Position: " + currentFarm.directory.position;
  document.getElementById('directoryContact').textContent = "Contact No: " + currentFarm.directory.contact;

  showSection('farmProfile');
}

function showSkillMapFromCurrent() {
  if (!currentFarm || !currentFarm.skill) return;

  document.getElementById('skillName').textContent = "Name: " + currentFarm.skill.name;
  document.getElementById('skill').textContent = "Skill: " + currentFarm.skill.skill;
  document.getElementById('farmSkill').textContent = "Farm: " + currentFarm.name;
  document.getElementById('contactSkill').textContent = "Contact No: " + currentFarm.skill.contact;

  showSection('skillMap');
}

function showStatisticsFromCurrent() {
  if (!currentFarm || !currentFarm.analysis) return;

  document.getElementById('statisticsContent').textContent = currentFarm.analysis;
  showSection('statistics');
}
