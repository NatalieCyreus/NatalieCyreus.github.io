function logClicks(a,t){clickLocations.push({x:a,y:t}),console.log("x location: "+a+"; y location: "+t)}function initializeMap(){function a(a){var t=a.geometry.location.lat(),e=a.geometry.location.lng(),i=a.formatted_address,o=window.mapBounds,n=new google.maps.Marker({map:map,position:a.geometry.location,title:i});new google.maps.InfoWindow({content:i});google.maps.event.addListener(n,"click",function(){}),o.extend(new google.maps.LatLng(t,e)),map.fitBounds(o),map.setCenter(o.getCenter())}function t(t,e){e==google.maps.places.PlacesServiceStatus.OK&&a(t[0])}var e={disableDefaultUI:!0};map=new google.maps.Map(document.querySelector("#map"),e),window.mapBounds=new google.maps.LatLngBounds,function(a){var e=new google.maps.places.PlacesService(map);a.forEach(function(a){var i={query:a};e.textSearch(i,t)})}(function(){var a=[];return a.push(bio.contacts.location),education.schools.forEach(function(t){a.push(t.location)}),work.jobs.forEach(function(t){a.push(t.location)}),a}())}var HTMLheaderName='<div id="name"><h1 >%data%</h1></div>',HTMLheaderRole='<div id="titleHeader">%data%</div><br>',HTMLcontactGeneric='<div class="flex-item"><span class="contact-text">%contact%</span><span class="contact-text">%data%</span></div>',HTMLmobile='<a href="#"><li class="flex-item"><span class="contact-text">phone</span><span class="contact-text">%data%</span></li></a>',HTMLemail='<a href="mailto:nataliecyreus@gmail.com"><li class="contact-text zocial-email">%data%</li></a>',HTMLtwitter='<a target="blank" href="https://twitter.com/CyreusNatalie"><li class="flex-item"><span class="contact-text"><span class="contact-text">%data%</span></li></a>',HTMLlinkedIn='<a href="https://www.linkedin.com/in/natalie-cyreus"><li class="contact-text zocial-linkedin">%data%</li></a>',HTMLgithub='<a href="https://github.com/NatalieCyreus"><li class="contact-text zocial-github">%data%</li></a>',HTMLblog='<a href="https://thecookingswede.com"><li class="flex-item"><span class="contact-text">Blog</span><span class="contact-text">%data%</span></li></a>',HTMLlocation='<a href="#"><li class="contact-text">%data%</li></a>',HTMLskype='<a href="#"><li class="flex-item"><span class="contact-text">Skype</span></span><span class="contact-text">%data%</span></li><a>',HTMLbioPic='<img src="%data%" class="bioPic ">',HTMLwelcomeMsg='<span class="welcome-message">%data%</span>',HTMLskillsStart='<div class="skills-entry"></div>',HTMLskills='<div class="role-text">%data%</div>',HTMLworkStart='<div class="work-entry"></div>',HTMLworkEmployer='<a href="https://spinviewglobal.com/">%data%</a>',HTMLworkTitle='<div id="titleHeader"> %data%</div>',HTMLworkDates='<div class="date-text">%data%</div>',HTMLworkLocation='<div class="location-text">%data%</div>',HTMLworkDescription="<p><br>%data%</p>",HTMLworkPic='<img src="%data%" class="img-responsive">',HTMLprojectStart='<div class="project-entry"></div>',HTMLprojectTitle='<a target="_blank" href="%#%">%data%</a>',HTMLprojectDates='<div class="date-text">%data%</div>',HTMLprojectDescription='<p><br>%data%</p><hr id="hrSoft">',HTMLprojectImage='<img class="img-responsive" src="%data%"><br>',HTMLVolunteeringStart='<div class="volunteering-entry"></div>',HTMLVolunteeringTitle='<div id="titleHeader">%data%</div>',HTMLVolunteeringDates='<div class="date-text">%data%</div>',HTMLVolunteeringDescription="<p><br>%data%</p><br><hr>",HTMLschoolStart='<div class="education-entry"></div>',HTMLschoolName='<a href="%#%">%data%</a>',HTMLschoolDegree='<a href="#" id="titleHeader">%data%</a>',HTMLschoolDates='<div class="date-text">%data%</div>',HTMLschoolLocation='<div class="location-text">%data%</div><br><hr>',HTMLschoolMajor='<em class="school"><br>Major: %data%</em>',HTMLschoolPic='<img src="%data%" class="img-responsive animation-element slide-left">',HTMLonlineClasses='<h3 class="h3onlineSchool">Online Classes</h3>',HTMLonlineTitle='<a href="#" id="titleHeader">%data%</a>',HTMLonlineSchool=' <a href="#">%data%</a>',HTMLonlineDates='<div class="date-text">%data%</div><br><hr>',HTMLonlineURL='<br><a href="#" class="online-link">%data%</a>',HTMLonlinePic='<img src="%data%" class="img-responsive animation-element slide-left">',internationalizeButton='<button class="interButton">Internationalize</button>',googleMap='<div id="map"></div>';$(document).ready(function(){$("button").click(function(){var a=$("#name"),t=inName(a.text())||function(){};a.html(t)})});var clickLocations=[];$(document).click(function(a){logClicks(event.pageX,event.pageY)});var map;window.addEventListener("load",initializeMap),window.addEventListener("resize",function(a){map.fitBounds(mapBounds)});