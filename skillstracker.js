const showSkillForm = document.getElementById("addSkill")
const skillFormContainer = document.getElementById("skillFormContainer")
const skillsList = document.getElementById("skillsList")

showSkillForm.addEventListener("click", () => {
  skillFormContainer.style.display = "block"
})

const skillForm = document.getElementById("skillForm")
skillForm.addEventListener("submit", (event) => {
  event.preventDefault()
  const skillInput = document.getElementById("skill")
  const dateStatedInput = document.getElementById("dateStarted")

  const skillValue = skillInput.value
  const dateStatedValue = dateStatedInput.value

  if (skillValue && dateStatedValue) {
    const listItem = document.createElement("li")
    listItem.textContent = `Skill: ${skillValue}, Date Started: ${dateStatedValue}`
    skillsList.appendChild(listItem)
  }
  skillFormContainer.style.display = "none"
})