
$('.hamburger').on('click', function(){
      $('.menu').toggleClass('open');
  });
/***************************** BIO SECTION ******************************/
var bio = {
    "name": "Natalie Serruya-Cyreus",
    "role": "webDeveloper",
    "contacts": {
        "mobile": "+12016582233",
        "email": " nataliecyreus@gmail.com",
        "github": "github/",
        "twitter": "twitter",
        "location": " New York, NY US",
        "linkedIn" : " linkedIn/"
    },
    "skills": ["HTML", "CSS", "JavaScript"],
    "biopic": "images/natalie.jpg",

    display: function() {
      /*
      for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $(".menu").prepend(formattedSkill);
      }
*/
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
        var HTMLHeaderMenu = formattedLocation + formattedLinkedIn + formattedGithub  + formattedTwitter + formattedEmail ;


        $(".menu").prepend(formattedRole);
        $(".navbar").prepend(formattedName);
        $(".menu").append(HTMLHeaderMenu);
        $(".hamburger").append(HTMLhamburgerMenu);
        $(".navbar").prepend(formattedImage);



    }
};

bio.display();


/***************************** WORK SECTION ******************************/
var work = {
    jobs: [{
            employer: "Spinview",
            title: "Co-founder",
            location: "Stockholm, Sweden",
            dates: "2015-2017 ",
            description: "Tech and marketing driven b2b company focused in creating, storing and sharing augmented reality content.",
            workpic: "images/spinviewVr.jpg"

        }
    ],

    display: function() {
        for (var i = 0; i < work.jobs.length; i++) {

            $("#workExperience").append(HTMLworkStart);
            var EmployerFormatted = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var TitleFormatted = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            var formattedWorkpic = HTMLworkPic.replace("%data%",work.jobs[i].workpic);

            var formattedEmployerTitle =  EmployerFormatted + TitleFormatted + formattedWorkDates + formattedWorkLocation + formattedWorkDescription + formattedWorkpic;
            $(".work-entry:last").append(formattedEmployerTitle);

        }
    }
};

work.display();


/*************************** PROJECT SECTION ****************************/


var projects = {
    "projects": [
      /*{
            "title": "Arcade Game",
            "link": "https://github.com/NatalieCyreus/frontend-nanodegree-arcade-game",
            "dates": "August 2017",
            "description": "The fourth project in the Udacity Nanodegree Program. Created with Object Oriented javascript. The game is built with Canvas, js. Html5, Css and Bootstrap for UX.",
            "images": ["images/arcade.jpg"]
        },*/
        {
            "title": "The Cooking Swede",
            "link": "http://thecookingswede.com/",
            "dates": "june 2017",
            "description": "I use this project to improve my front-end, photography and cooking skills!",
            "images": ["images/thecookingSwedeProject.jpg"]
        }
        /*,
        {
                "title": "Nanodegree Resume",
                "link": "https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fnataliecyreus.github.io%2F&tab=desktop",
                "dates": "june 2017",
                "description": "This was the project for the third part of the Udacity Nanodegree progarm.",
                "images": ["images/resume2017.jpg"]
            }*/
    ],


    // Encapsulation - holding the display function inside the "projects" object.
    display: function() {
        for (var y = 0; y < projects.projects.length; y++) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[y].title);
            var formattedProjectTitleLink = formattedProjectTitle.replace("%#%", projects.projects[y].link);
            $(".project-entry:last").append(formattedProjectTitleLink);

            formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[y].dates);
            $(".project-entry:last").append(formattedProjectDates);

            formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[y].description);
            $(".project-entry:last").append(formattedProjectDescription);

            for (var x = 0; x < projects.projects[y].images.length; x++) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[y].images[x]);
                $(".project-entry:last").append(formattedProjectImage);
            }
        }
    }
};

projects.display();

var education = {
    "schools": [{
        "name": "Udacity " ,
        "location": "online",
        "degree":"Front-End Web Developer Nanodegree Program",
        "majors": [""],
        "dates": "May 2017 - present",
        "url": "udacity.com",
        "schoolpic" : "images/udacity.png",
        "link" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"

    } ,
        {
            "name": "Fullstack Academy",
            "location": "New York",
            "degree": "JavaScript JumpStart Online",
            "majors": [""],
            "dates": "April-May 2017",
            "schoolpic": "images/fullstack.png",
            "link" : "https://www.fullstackacademy.com/bootcamp-prep"
        },
        {
            "name": "Fullstack Academy",
            "location": "New York",
            "degree": "Bootcamp Prep",
            "majors": [""],
            "dates": "March - April 2017",
            "schoolpic": "images/fullstack.png",
            "link" : "https://www.fullstackacademy.com"
        },
        {
                "name": "Södertörn University",
                "location": "Stockholm",
                "degree": "Media and communication",
                "majors": [""],
                "dates": "2013-2015",
                "schoolpic": "images/sh-ny-logo.png",
                "link" : "http://www.sh.se/p3/ext/content.nsf/aget?openagent&key=startsideportal_engelsk_1308725461229"
            }
    ],

    display: function() {

        for (var n = 0; n < education.schools.length; n++) {

            $("#education").append(HTMLschoolStart);

            var formattedSchoolPic = HTMLschoolPic.replace("%data%", education.schools[n].schoolpic);
            //$(".education-entry:last").append(formattedSchoolPic);
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

education.display();


var volunteering = {
    "project": [{
            "title": "Leader Red Cross",
            "dates": "2014-2015",
            "role": "Red Cross",
            "description": "A language school for new arrived to Sweden. I re-opened and developed a meeting area in Flemingsberg with the goal to welcome and educate new arrived to learn about Swedish society and language."
        },
        {
            "title": "Board member Red Cross Flemingsberg",
            "dates": "2014-2015",
            "role": "Red Cross",
            "description": "Boardmember of the Flemingsberg division, as one of the most active members of the board I contributed with much knowledge of the needs from the language meetings."
        }
    ],

    // Encapsulation - holding the display function inside the "projects" object.
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

volunteering.display();
