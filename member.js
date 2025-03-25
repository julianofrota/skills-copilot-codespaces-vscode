function skillsMember() {
  return {
    name: 'skillsMember',
    type: 'member',
    skills: ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js'],
    level: 'intermediate',
    yearsOfExperience: 3,
    contact: {
      email: 'member@skills.org',
      phone: '123-456-7890'
    },
    available: true,
    getInfo: function() {
      return `${this.name} is a ${this.level} developer with ${this.yearsOfExperience} years of experience.`;
    }
  };
}

module.exports = skillsMember;