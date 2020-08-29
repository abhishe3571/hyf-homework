// Creating a CV class
// The CV that we will be making uses three classes: Job, Education and CV. The CV class we have made
// for you (with some missing functionality). The Job and Education classes you need to create.

// Part 1:
// Create the classes Job and Education.

// Job has five properties: id, title, description, startDate and endDate (the dates can be strings
//   or actual Date objects).
// Education has six properties: id, title, school, address, startDate and endDate.

// Part 2:
// Now add the functionality for the methods in the CV class.

// Remember: jobs and educations are just arrays of class instances. So use your array manipulation
// knowledge for the add and remove methods.

// class CV {
//   constructor(email) {
//     this.jobs = [];
//     this.educations = [];
//     //this.email = ?
//   }

//   addJob(job) {
//     // add functionality here
//   }

//   removeJob(job) {
//     // add functionality here
//   }

//   addEducation(education) {
//     // add functionality here
//   }

//   removeEducation(education) {
//     // add functionality here
//   }
// }
// Part 3:
// Create a new CV instance using the new keyword, and save it in a variable called myCV.

// Apply the methods you have created on the myCV object. Create a few Job and Education objects and
// add them to your CV.

// Remove a job and an education from myCV.

// Log myCV to the console, again, and check that the objects were removed correctly.

// Part 4:
// Add a method to the CV class called renderCV(). This method should render out the CV using HTML.
// Use document.getElementById("<id>") and document.createElement("<element>"), as well as element.appendChild(<element>) to build your HTML using JavaScript.

class Job {
  constructor(id, title, description, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

class Education {
  constructor(id, title, school, address, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.school = school;
    this.address = address;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

class CV {
  constructor(email) {
    this.jobs = [];
    this.educations = [];
    this.email = email;
  }

  addJob(job) {
    // add functionality here
    this.jobs.push(job);
  }

  removeJob(job) {
    // add functionality here
    for (let i = 0; i < this.jobs.length; i++) {
      const j = this.jobs[i];
      if (j.id === job.id) {
        this.jobs.splice(i, 1);
        //return;
      }
    }
  }

  addEducation(education) {
    // add functionality here
    this.educations.push(education);
  }

  removeEducation(education) {
    // add functionality here

    for (let i = 0; i < this.educations.length; i++) {
      const e = this.educations[i];
      if (e.id === education.id) {
        this.educations.splice(i, 1);
        return;
      }
    }
  }

  renderCv() {
    const outputDiv = document.div;
    outputDiv = "";

    outputDiv.appendChild(this.renderJobs());
  }

  renderJobs() {
    const ul = document.createElement("ul");
    ul.innerHTML = `<h1>${this.email}</h1>`;

    for (const item of this.jobs) {
      console.log(item);
      const itemList = document.createElement("li");
      ul.appendChild(itemList).innerHTML = `<h3>ID: ${itme.id}</h3>`;
    }
    return ul;
  }
}

const myCv = new CV("abhi355@gmail.com");
console.log(myCv.renderCv());
console.log(myCv.renderJobs());

myCv.addJob(
  new Job(
    1,
    "front end developer",
    "design the webpage",
    "a couple of years ago",
    "still going"
  )
);
myCv.addJob(
  new Job(
    2,
    "full stack developer",
    "testings and debugging",
    "a couple of years ago",
    "before the fron end developer job"
  )
);
//console.log(myCv.Job)
myCv.addEducation(
  new Education(1, "High school", "Pt.R.K.U", "Kachhwa", "2010", "2012")
);
myCv.addEducation(
  new Education(2, "Inter", "S.B.P", "Varanasi", "2012", "2014")
);
myCv.addEducation(
  new Education(
    3,
    "fresher engineer",
    "pyfox",
    "gurugram",
    "2020",
    "still going"
  )
);

console.log(myCv);

myCv.removeJob(
  new Job(
    2,
    "full stack developer",
    "testings and debugging",
    "a couple of years ago",
    "before the fron end developer job"
  )
);

console.log(myCv.jobs);
