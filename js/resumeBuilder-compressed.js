function check_if_in_view(){var e=$window.height(),a=$window.scrollTop(),t=a+e;$.each($animation_elements,function(){var e=$(this),o=e.outerHeight(),r=e.offset().top;r+o>=a&&r<=t?e.addClass("in-view"):e.removeClass("in-view")})}$(".hamburger").on("click",function(){$(".menu").toggleClass("open")});var bio={name:"Natalie Serruya-Cyreus",role:"Web developer",contacts:{mobile:"+12016582233",email:" nataliecyreus@gmail.com",github:" github",twitter:"twitter",location:" New York",blog:" thecookingswede.com",skype:" skype",linkedIn:" LinkedIn"},welcomeMessage:"",skills:["HTML","CSS","JavaScript"],biopic:"images/natalie.jpg",display:function(){for(k=0;k<bio.skills.length;k++){var e=HTMLskills.replace("%data%",bio.skills[k]);$(".menu").prepend(e)}var a=HTMLheaderRole.replace("%data%",bio.role);$(".navbar").prepend(a);var t=HTMLheaderName.replace("%data%",bio.name);$(".navbar").prepend(t);var o=HTMLbioPic.replace("%data%",bio.biopic);$("#menu").prepend(HTMLskillsStart),$("#menu").append(HTMLskillsStart);var r=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);$("#header").append(r);var i=bio.contacts.email,n=HTMLemail.replace("%data%",i),s=HTMLgithub.replace("%data%",bio.contacts.github),c=HTMLtwitter.replace("%data%",bio.contacts.twitter),l=(HTMLblog.replace("%data%",bio.contacts.blog),HTMLmobile.replace("%data%",bio.contacts.mobile),HTMLskype.replace("%data%",bio.contacts.skype),bio.contacts.location),p=HTMLlocation.replace("%data%",l)+HTMLlinkedIn.replace("%data%",bio.contacts.linkedIn)+s+c+n;$(".menu").append(p),$(".hamburger").append('<div href="#" class="hamburger"><i class="right"></i></div>'),$(".navbar").append(o)}};bio.display();var work={jobs:[{employer:"Spinview",title:"Co-founder",location:"Stockholm, Sweden",dates:"2015-2017 ",description:"Tech and marketing driven b2b company focused in creating, storing and sharing augmented reality content.",workpic:""}],display:function(){for(var e=0;e<work.jobs.length;e++){$("#workExperience").append(HTMLworkStart);var a=HTMLworkEmployer.replace("%data%",work.jobs[e].employer),t=HTMLworkTitle.replace("%data%",work.jobs[e].title),o=HTMLworkDates.replace("%data%",work.jobs[e].dates),r=HTMLworkLocation.replace("%data%",work.jobs[e].location),i=HTMLworkDescription.replace("%data%",work.jobs[e].description),n=(HTMLworkPic.replace("%data%",work.jobs[e].workpic),a+t+o+r+i);$(".work-entry:last").append(n)}}};work.display();var projects={projects:[{title:"Arcade Game",link:"https://github.com/NatalieCyreus/frontend-nanodegree-arcade-game",dates:"August 2017",description:"The fourth project in the Udacity Nanodegree Program. Created with Object Oriented javascript. The game is built with Canvas, js. Html5, Css and Bootstrap for UX.",images:["images/Arcadegame.jpg"]},{title:"The Cooking Swede",link:"http://thecookingswede.com/",dates:"june 2017",description:"I use this project to improve my front-end and cooking skills!",images:["images/theCookingSwede.png"]},{title:"Nanodegree Resume",link:"https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fnataliecyreus.github.io%2F&tab=desktop",dates:"june 2017",description:"This was the project for the third part of the Udacity Nanodegree progarm.",images:["images/resume.001.jpg"]}],display:function(){for(var e=0;e<projects.projects.length;e++){$("#projects").append(HTMLprojectStart);var a=HTMLprojectTitle.replace("%data%",projects.projects[e].title).replace("%#%",projects.projects[e].link);$(".project-entry:last").append(a),formattedProjectDates=HTMLprojectDates.replace("%data%",projects.projects[e].dates),$(".project-entry:last").append(formattedProjectDates),formattedProjectDescription=HTMLprojectDescription.replace("%data%",projects.projects[e].description),$(".project-entry:last").append(formattedProjectDescription);for(var t=0;t<projects.projects[e].images.length;t++)HTMLprojectImage.replace("%data%",projects.projects[e].images[t])}}};projects.display();var education={schools:[{name:"Udacity",location:"",degree:"Nanodegree front end",majors:[""],dates:"May 2017 - present",url:"udacity.com",schoolpic:"images/udacity.png",link:"https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"},{name:"Fullstack Academy",location:"New York",degree:"JavaScript JumpStart Online",majors:[""],dates:"April-May 2017",schoolpic:"images/fullstack.png",link:"https://www.fullstackacademy.com/bootcamp-prep"},{name:"Fullstack Academy",location:"New York",degree:"Bootcamp Prep",majors:[""],dates:"March - April 2017",schoolpic:"images/fullstack.png",link:"https://www.fullstackacademy.com"},{name:"Södertörn University",location:"Stockholm",degree:"Media and communication",majors:[""],dates:"2013-2015",schoolpic:"images/sh-ny-logo.png",link:"http://www.sh.se/p3/ext/content.nsf/aget?openagent&key=startsideportal_engelsk_1308725461229"}],display:function(){for(var e=0;e<education.schools.length;e++){$("#education").append(HTMLschoolStart);HTMLschoolPic.replace("%data%",education.schools[e].schoolpic);var a=HTMLschoolName.replace("%data%",education.schools[e].name).replace("%#%",education.schools[e].link);$(".education-entry:last").append(a);var t=HTMLschoolDegree.replace("%data%",education.schools[e].degree);$(".education-entry:last").append(t);var o=HTMLschoolDates.replace("%data%",education.schools[e].dates);$(".education-entry:last").append(o);var r=HTMLschoolLocation.replace("%data%",education.schools[e].location);$(".education-entry:last").append(r)}}};education.display();var volunteering={project:[{title:"Leader Red Cross",dates:"2014-2015",role:"Red Cross",description:"A language school for new arrived to Sweden. I re-opened and developed a meeting area in Flemingsberg with the goal to welcome and educate new arrived to learn about Swedish society and language."},{title:"Board member Red Cross Flemingsberg.",dates:"2014-2015",role:"Red Cross",description:"Boardmember of the Flemingsberg division, as one of the most active members of the board I contributed with much knowledge of the needs from the language meetings."}],display:function(){for(var e=0;e<volunteering.project.length;e++){$("#volunteering").append(HTMLVolunteeringStart);var a=HTMLVolunteeringTitle.replace("%data%",volunteering.project[e].title);$(".volunteering-entry:last").append(a);var t=HTMLprojectDates.replace("%data%",volunteering.project[e].dates);$(".volunteering-entry:last").append(t);var o=HTMLprojectDescription.replace("%data%",volunteering.project[e].description);$(".volunteering-entry:last").append(o)}}};volunteering.display();var $animation_elements=$(".animation-element"),$window=$(window);$window.on("scroll resize",check_if_in_view),$window.trigger("scroll");