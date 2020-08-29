
const mentors = [
  {
    name: "Abed Sujan",
    subjects: ["JS", "HTML", "CSS", "NODEJS"],
    yearOfExperience: 4,
  },
  {
    name: "Ahmed Magdy",
    subjects: ["JS", "Database", "CSS"],
    yearOfExperience: 1,
  },
  {
    name: "Alicia Gonzales",
    subjects: ["DB", "HTML", "NODEJS"],
    yearOfExperience: 8,
  },
  {
    name: "allan Thraen",
    subjects: ["REACT", "HTML", "CSS"],
    yearOfExperience: 3,
  },
  {
    name: "Anders Ravn",
    subjects: ["JS", "HTML", "NODEJS"],
    yearOfExperience: 2,
  },
  {
    name: "Daniel Fernandes",
    subjects: ["Database", "HTML", "CSS"],
    yearOfExperience: 9,
  },
];

//console.log(mentors);

// Daniel Fernandes has 9 years of experiences and is expert in 3 topics revelant to HackYourFuture, i.e. Database, HTML and CSS

function getSubjectString(subjects) {
  if (subjects.length >= 2) {
    return `${subjects.slice(0, subjects.length - 1).join(", ")} and ${
      subjects[subjects.length - 1]
    }`;
  }
}

function getMentorBio(mentor) {
  return (
    `${mentor.name} has ${mentor.yearOfExperience} ${
      mentor.yearOfExperience > 1 ? "years" : "year"
    } of experience and is expert in ${mentor.subjects.length} ` +
    `
      topics revelant to HackYourFuture, i.e. ${getSubjectString(
        mentor.subjects
      )} `
  );
}

// write bio for all members

mentors.forEach((mentor) => console.log(getMentorBio(mentor)));

// get names for all mentors

console.log(mentors.map((m) => m.name));

// get names for all mentors

console.log(mentors.map((m) => {
    return {
        [m.name]: m.subjects,
    }
}));


//

const moreExperienceMentors = mentors.filter((m) => m.yearOfExperience > 5); 

moreExperienceMentors.forEach((mentor) => console.log(getMentorBio(mentor)));


///

const sumOfExperiencs = mentors.reduce(
    (sum, m) => sum + m.yearOfExperience, 0
);
console.log(`sumOfExperience`, sumOfExperiencs);

const averageExperience = sumOfExperiencs / mentors.length;

console.log(`averageExperience`, averageExperience);





