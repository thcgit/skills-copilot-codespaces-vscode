function skillsMember() {
  const member = document.querySelector('.member');
  const memberSkills = document.querySelector('.member-skills');

  if (member && memberSkills) {
    member.addEventListener('click', () => {
      memberSkills.classList.toggle('active');
    });
  }
}