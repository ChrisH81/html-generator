var inquirer = require('inquirer');
var fs = require('fs');

var fileString ="";


var fileName = 'index.html';
var stream = fs.createWriteStream(fileName);

var employeeInfoString = "";


class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getRole() {
      return 'Employee';
  }
}

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
  }
  getRole() {
      return 'Manager';
  }
}

class Engineer extends Employee {
  constructor(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
  }
  getRole() {
      return 'Engineer';
  }
}

class Intern extends Employee {
  constructor(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
  }
  getRole() {
      return 'Intern';
  }
  getSchool() {
      return this.school;
  }
}



inquirer
  .prompt([
    {
        type: 'input',
        name: 'managerName',
        message: "What is the name of the manager of this project?",
        default: function() {
          return 'Manager Name';
        }
    },
        {
        type: 'input',
        name: 'managerEmployeeID',
        message: "What is the Employee ID of the manager?",
        default: function() {
          return '11111';
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the email address of the manager?",
        default: function() {
          return 'example@gmail.com';
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the office number?",
        default: function() {
          return '1234';
        }
    },
    {
      type: 'list',
      name: 'type',
      message: 'What type of Employee would you like to add?',
      choices: [
        'Engineer',
        'Intern',
      ]
    },
    {
        type: 'input',
        name: 'employeeName',
        message: "What is the name of the Employee of this project?",
        default: function() {
          return 'Name';
        }
    },
        {
        type: 'input',
        name: 'employeID',
        message: "What is the Employee ID?",
        default: function() {
          return '1111';
        }
    },
    {
        type: 'input',
        name: 'employeEmail',
        message: "What is the email address?",
        default: function() {
          return 'example@gmail.com';
        }
    },
    {
        type: 'input',
        name: 'githubschool',
        message: "What is the github profile or school",
        default: function() {
          return 'github';
        }
    },
  ])
  .then(answers => {
    employeeInfoString += `<p> Manager Name:   ${answers.managerName} </p> <br>`;
    employeeInfoString += `<p> Manager Employee ID:   ${answers.managerEmployeeID} </p> <br>`;
    employeeInfoString += `<p> Manager Email:  <a href="mailto:${answers.managerEmail}">${answers.managerEmail}</a> </p> <br>`;
    employeeInfoString += `<p> Manager Office Number:   ${answers.officeNumber} </p> <br>`;
    employeeInfoString += `<p> Employee Name:   ${answers.employeeName} </p> <br>`;
    employeeInfoString += `<p> Employee ID:   ${answers.employeeID} </p> <br>`;
    employeeInfoString += `<p> Employee Email: <a href="mailto:${answers.employeeEmail}">${answers.employeeEmail}</a> </p> <br>`;
    if (answers.type === "Engineer") {
        employeeInfoString += `<p> Employee github: <a href="github.com/${answers.githubschool}">github</a> </p> <br>`;
    }
    else{
        employeeInfoString += `<p> Intern School ${answers.githubschool} </p> <br>`;
    }
    var htmlToWrite = buildHtml();
    fs.writeFileSync('index.html', htmlToWrite);
  });



function buildHtml() {
  var header = '';
  var body = employeeInfoString;

  return '<!DOCTYPE html>'
       + '<html><head>' + header + '</head><body>' + body + '</body></html>';
};