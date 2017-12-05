
$(function() {

$('.hamburger').on('click', function() {
	$('.menu').toggleClass('open');
});

/***************************** BIO SECTION ******************************/
//The BioModel
var bio = {
	"name": "Natalie Serruya-Cyreus",
	"role": "webDeveloper",
	"contacts": {
		"mobile": "+12016582233",
		"email": " nataliecyreus@gmail.com",
		"github": "",
		"twitter": "",
		"location": "",
		"linkedIn": ""
	},
	"skills": ["HTML", "CSS", "JavaScript"],
	"biopic": ""
};

//the BioOctopus
var bioOctopus = {
	init: function() {
		bioView.display();
	}
};

//the BioView
var bioView = {
	display: function() {
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
		var email = bio.contacts.email;
		var formattedEmail = HTMLemail.replace("%data%", email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedSkype = HTMLskype.replace("%data%", bio.contacts.skype);
		var locationNY = bio.contacts.location;
		var formattedLocation = HTMLlocation.replace("%data%", locationNY);
		var formattedLinkedIn = HTMLlinkedIn.replace("%data%", bio.contacts.linkedIn);

		var HTMLhamburgerMenu = '<div href="#" class="hamburger"><span class="line1"></span><span class="line2"></span><span class="line3"></span></div>';
		var HTMLFooterMenu = formattedEmail;
		var FooterSocial = formattedLinkedIn + formattedGithub + formattedTwitter;
		var resumeMenu = '<ul class="nav nav-tabs navbar-static-top"><li class="active"><a data-toggle="tab" href="#aboutTab"><h4>about</h4></a></li><li><a data-toggle="tab" href="#projectTab"><h4>projects</h4></a></li><li><a data-toggle="tab" href="#educationTab"><h4>education</h4></a></li><li><a data-toggle="tab" href="#workTab"><h4>work</h4></a></li><li><a data-toggle="tab" href="#volunteeringTab"><h4>volunteering</h4></a></li></ul>'

		$(".footerContent").prepend(HTMLFooterMenu);
		$(".footerContent").prepend(formattedRole);
		$(".footerContent").prepend(FooterSocial);
		$(".navbar").prepend(formattedName);
		$(".menu").append(resumeMenu);
		$(".hamburger").append(HTMLhamburgerMenu);
		$(".navbar").prepend(formattedImage);
	}
};
bioOctopus.init();

/***************************** WORK SECTION ******************************/
//the WorkModel
var work = {
	jobs: [{
		employer: "Spinview",
		title: "Co-founder",
		location: "Stockholm, Sweden",
		dates: "2015-2017 ",
		description: "Tech and marketing b2b company focused on creating, storing and sharing augmented reality content. I managed the technical team, working together to create responsive virtual tours. I was working with layout, photography, customer contact, and technical issues. I also did sales, project managing, photography, while finding solutions how to scale and increase the production time and quality.",
		workpic: ""
	}]
};

//the WorkOctopus
var workOctopus = {
	init: function() {
		workView.display();
	}
};

//the WorkView
var workView = {
	display: function() {
		for (var i = 0; i < work.jobs.length; i++) {
			$("#workExperience").append(HTMLworkStart);
			var EmployerFormatted = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var TitleFormatted = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			var formattedWorkpic = HTMLworkPic.replace("%data%", work.jobs[i].workpic);
			var formattedEmployerTitle = EmployerFormatted + TitleFormatted + formattedWorkDates + formattedWorkLocation + formattedWorkDescription + formattedWorkpic;
			$(".work-entry:last").append(formattedEmployerTitle);
		}
	}
};

workOctopus.init();

/*************************** PROJECT SECTION ****************************/
//the ProjectModel
var projects = {
	"projects": [{
		"title": "The Cooking Swede",
		"link": "http://thecookingswede.com/",
		"dates": "june 2017",
		"description": "I use this project to improve my front-end, photography and cooking skills!",
		"images": ["images/thecookingSwede.png"]
	}]
};

//the ProjectOctopus
var projectOctopus = {
	init: function() {
		projectView.display();
	}
};

//the ProjectView
var projectView = {
	display: function() {
		for (var y = 0; y < projects.projects.length; y++) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[y].title);
			var formattedProjectTitleLink = formattedProjectTitle.replace("%#%", projects.projects[y].link);
			$(".project-entry:last").append(formattedProjectTitleLink);
			for (var x = 0; x < projects.projects[y].images.length; x++) {
				formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[y].images[x]);
				var formattedProjectImageLink = formattedProjectImage.replace("%link%", projects.projects[y].link);
				$(".project-entry:last").append(formattedProjectImageLink);
			}
			formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[y].description);
			$(".project-entry:last").append(formattedProjectDescription);
		}
	}
};
projectOctopus.init();

/*************************** EDUCATION SECTION ****************************/
//the educationModel
var education = {
	"schools": [{
			"name": "Udacity ",
			"location": "online",
			"degree": "Front-End Web Developer Nanodegree Program",
			"majors": [""],
			"dates": "May 2017 - present",
			"url": "udacity.com",
			"schoolpic": "images/udacity.png",
			"link": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		},
		{
			"name": "Fullstack Academy",
			"location": "New York",
			"degree": "JavaScript JumpStart Online",
			"majors": [""],
			"dates": "April-May 2017",
			"schoolpic": "images/fullstack.png",
			"link": "https://www.fullstackacademy.com/bootcamp-prep"
		},
		{
			"name": "Fullstack Academy",
			"location": "New York",
			"degree": "Bootcamp Prep",
			"majors": [""],
			"dates": "March - April 2017",
			"schoolpic": "images/fullstack.png",
			"link": "https://www.fullstackacademy.com"
		},
		{
			"name": "Södertörn University",
			"location": "Stockholm",
			"degree": "Media and communication",
			"majors": [""],
			"dates": "2013-2015",
			"schoolpic": "images/sh-ny-logo.png",
			"link": "http://www.sh.se/p3/ext/content.nsf/aget?openagent&key=startsideportal_engelsk_1308725461229"
		}
	]
};
//the educationOctopus
var educationOctopus = {
	init: function() {
		educationView.display();
	}
};
//the educationView
var educationView = {
	display: function() {
		for (var n = 0; n < education.schools.length; n++) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolPic = HTMLschoolPic.replace("%data%", education.schools[n].schoolpic);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[n].name);
			var formattedSchoolNameLink = formattedSchoolName.replace("%#%", education.schools[n].link);
			$(".education-entry:last").append(formattedSchoolNameLink);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[n].degree);
			$(".education-entry:last").append(formattedSchoolDegree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[n].dates);
			$(".education-entry:last").append(formattedSchoolDates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[n].location);
			$(".education-entry:last").append(formattedSchoolLocation);
		}
	}
};

educationOctopus.init();

/*************************** EDUCATION SECTION ****************************/
//the educationModel
var volunteering = {
	"project": [{
			"title": "Leader Red Cross",
			"dates": "2014-2015",
			"role": "Red Cross",
			"description": "A language school for newly arrived to Sweden. I re-opened and developed a meeting area in Flemingsberg, a socioeconomically exposed area. We had weekly meeting teaching swedish and about Sweden."
		},
		{
			"title": "Board member Red Cross Flemingsberg",
			"dates": "2014-2015",
			"role": "Red Cross",
			"description": "Board member of the Flemingsberg division."
		}
	]
};
//the volunteeringOctopus
var volunteeringOctopus = {
	init: function() {
		volunteeringView.display();
	}
};
//the volunteeringView
var volunteeringView = {
  display: function() {
    for (var w = 0; w < volunteering.project.length; w++) {
      $("#volunteering").append(HTMLVolunteeringStart);

      var formattedVolunteeringTitle = HTMLVolunteeringTitle.replace("%data%", volunteering.project[w].title);
      $(".volunteering-entry:last").append(formattedVolunteeringTitle);

      var formattedVolunteeringDates = HTMLprojectDates.replace("%data%", volunteering.project[w].dates);
      $(".volunteering-entry:last").append(formattedVolunteeringDates);

      var formattedVolunteeringDescription = HTMLVolunteeringDescription.replace("%data%", volunteering.project[w].description);
      $(".volunteering-entry:last").append(formattedVolunteeringDescription);
    }
  }
};
volunteeringOctopus.init();

});
