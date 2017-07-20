/***************************** BIO SECTION ******************************/
var bio = {
    "name": "Natalie Serruya-Cyreus",
    "role": "Web developer",
    "contacts": {
        "mobile": "+1-201-658-2233",
        "email": "nataliecyreus@gmail.com",
        "github": "/NatalieCyreus",
        "twitter": "xxxx.twitter.com",
        "location": "New York",
        "blog": "thecookingswede.com",
        "skype" : "natalie.cyreus"
    },
    "welcomeMessage": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
    "skills": ["HTML", "CSS", "JavaScript"],
    "biopic": "images/IMG_2922.JPG",

    display: function() {

        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

        var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedImage);

        $("#header").append(HTMLskillsStart);

        for (k = 0; k < bio.skills.length; k++) {
          var formattedSkill = HTMLskills.replace("%data%", bio.skills[k]);
          $("#skills").prepend(formattedSkill);
        }


        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcome);

        var email = bio.contacts.email;
        var formattedEmail = HTMLemail.replace("%data%", email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
        var formattedPhone = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedSkype = HTMLmobile.replace("%data%", bio.contacts.skype);
        var locationNY = bio.contacts.location;
        var formattedLocation = HTMLlocation.replace("%data%", locationNY);
        $("#footerContacts , #topContacts").append(formattedEmail, formattedGithub, formattedBlog, formattedPhone, formattedSkype, formattedLocation);

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
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."

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

            var formattedEmployerTitle = EmployerFormatted + TitleFormatted + formattedWorkDates + formattedWorkLocation + formattedWorkDescription;
            $(".work-entry:last").append(formattedEmployerTitle);

        }
    }
};

work.display();


/*************************** PROJECT SECTION ****************************/


var projects = {
    "projects": [{
            "title": "First project",
            "dates": "june 2017",
            "description": "Learned javascript whiledoing it.",
            "images": ["images/computerNotes.jpeg"]
        },
        {
            "title": "Second project",
            "dates": "june 2017",
            "description": "Learned javascript whiledoing it.",
            "images": ["images/desk-photo.jpeg"]
        }
    ],


    // Encapsulation - holding the display function inside the "projects" object.
    display: function() {
        for (var y = 0; y < projects.projects.length; y++) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[y].title);
            $(".project-entry:last").append(formattedProjectTitle);

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




/*************************** EDUCATION SECTION ****************************/

var education = {
    "schools": [{
            "name": "Södertörn University",
            "location": "Stockholm",
            "degree": "Media and communication",
            "majors": ["#", "#"],
            "dates": "2013-2015",
        },

        {
            "name": "Fullstack Academy",
            "location": "New York",
            "degree": "Bootcamp Prep",
            "majors": ["#"],
            "dates": "April-May 2017"

        },
        {
            "name": "Spanish Course",
            "location": "Buenos Aires",
            "degree": "Spanish",
            "majors": ["#"],
            "dates": "August-September 2016"

        }
    ],

    "onlineCourses": [{
        "title": "Nanodegree front end",
        "school": "Udacity",
        "dates": "May 2017 - present",
        "url": "udacity.com"
    } ,
    {
        "title": "JavaScript JumpStart Online",
        "school": "Fullstack Academy",
        "dates": "March - April 2017",
        "url": "https://www.fullstackacademy.com/"
    }],

    display: function() {

        $("#education").append(HTMLschoolStart);

        for (var n = 0; n < education.schools.length; n++) {



            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[n].name);
            $(".education-entry:last").append(formattedSchoolName);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[n].degree);
            $(".education-entry:last").append(formattedSchoolDegree);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[n].dates);
            $(".education-entry:last").append(formattedSchoolDates);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[n].location);
            $(".education-entry:last").append(formattedSchoolLocation);




            for (var h = 0; h < education.schools[n].majors.length; h++) {
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[n].majors[h]);
                $(".education-entry:last").append(formattedSchoolMajor);

            }

        }
            $("#education").append(HTMLonlineClasses);
        for (var t = 0; t < education.onlineCourses.length; t++) {
            $("#education").append(HTMLschoolStart);

            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[t].school);
            $(".education-entry:last").append(formattedOnlineSchool);

            var formattedOnlineSchoolTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[t].title);
            $(".education-entry:last").append(formattedOnlineSchoolTitle);

            var formattedOnlineSchoolDates = HTMLonlineDates.replace("%data%", education.onlineCourses[t].dates);
            $(".education-entry:last").append(formattedOnlineSchoolDates);

            var formattedOnlineSchoolUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[t].url);
            $(".education-entry:last").append(formattedOnlineSchoolUrl);

        }

    }

};

education.display();


/*************************** VOLUNTEERING SECTION ****************************/
var volunteering = {
    "project": [{
            "title": "Leader Red Cross",
            "dates": "2014-2015",
            "role": "Red Cross",
            "description": "A language school for new arrived to Sweden. I re-opened and developed a meeting area in Flemingsberg with the goal to welcome and educate new arrived to learn about Swedish society and language."
        },
        {
            "title": "Board member Red Cross Flemingsberg.",
            "dates": "2014-2015",
            "role": "Red Cross",
            "description": "I was in the board of the Flemingsberg division, as one of the most active members of the board I contributed with much knowledge of the needs from the language meetings."
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

            var formattedVolunteeringDescription = HTMLprojectDescription.replace("%data%", volunteering.project[w].description);
            $(".volunteering-entry:last").append(formattedVolunteeringDescription);
        }
    }
};

volunteering.display();



/*************************** MAP SECTION ****************************/

$("#mapDiv").append(googleMap);

/******************** INTERNATIONALIZE SECTION **************************/

/*
$("#main").append(internationalizeButton);

function inName() {
  var splitName = bio.name.split(" ");
   splitName[0]= splitName[0].toLowerCase();
   var internationalizedName = splitName.join(" ");
   return internationalizedName;
}

inName();

*/

/******************** ANIMATION SECTION **************************/

//code from https://www.sitepoint.com/scroll-based-animations-jquery-css3/ , https://codepen.io/SitePoint/pen/yNzYqm

var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
