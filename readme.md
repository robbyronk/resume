# Robby Ronk

I'm interested in joining a dynamic team to mentor developers of all skill levels
and deliver quality user experiences.
I can work at all layers of the stack and thrive in front-end.
I've led two major technology changes on the front-end, 
bringing AngularJS to my team in 2012 and React/Redux/Sagas to my team in 2016.
In addition to personal and professional growth, I value open communication and making
the world a better place.

## Employment History

### [Ackama Consulting](https://www.ackama.com)
#### On-site with [InternetNZ](https://internetnz.nz)

Oct 2019 - Apr 2020

### [Weta Digital](https://www.wetafx.co.nz)

Jan 2016 - Sep 2019

### [Showroom Logic](https://www.purecars.com/showroomlogic-acquisition/)

Sep 2013 - Dec 2015 (remote)

### [Cru](https://www.cru.org)

Jan 2011 - Sep 2013

### [YachtCloser](https://www.yachtcloser.com)

Aug 2012 - Dec 2012 (remote, part-time)

## Skills

- Top Languages: JavaScript, Ruby, Python, PHP, Elixir
- Other Languages: Java, Lisp, C
- Frameworks: React/Redux, AngularJS, Laravel, Rails
- Libraries: Lodash, Redux Sagas, Styled Components, Bootstrap, React Router, Webpack, Babel
- Editors: Vim, IntelliJ/IDEA
- Operating Systems: Linux, Windows, MacOS
- Databases: Postgres, PostGIS, MySQL
- Services: AWS, GitLab, GitHub, CAS SSO
- Automation: Ansible, Vagrant, AutoHotKey, Selenium, Emmet
- Topics: UX, HTTP, DNS, REST, CORS, AuthN/AuthZ, MVC, Concurrency, Asynchronous Programming, Functional Programming,
Continuous Integration, OWASP, GIS
- Interests: Interface Design, Data Visualization, Statistics, Motorsports

## Education

Bachelor of Science in Computer Science from the University of Central Florida, Dec 2010

## Internet NZ
- Lead a team of 3 through a time of transition
- Encouraged learning and enhancing security and coding standards
- Deployed a prototype Digital Identity platform and digital wallet

## Weta Digital
- Deployed 5 significant projects, 3 as technical lead (under NDA)
- Negotiated the introduction of React within a large team
- Mentored peer developers with training sessions, pairing and code reviews
- Developed front end coding standards and enforced them with CI

## Significant Projects

### [BroadbandMap.NZ](https://broadbandmap.nz/availability) - Internet NZ
- Solved layout issues leading to better usability on a wider variety of devices
- Solved GIS data pipeline artifacts which decreased bandwidth used, decreased render times and produced correct results
- Documented the details of the GIS data pipeline, allowing any developer to tackle issues in it

### Data Display for Sim Racing - Personal Project
- Used Elixir server to accept and process binary UDP packets from a racing video game
- Sent binary messages over serial to Arduino to display speed and RPM
- Sent JSON using websockets to React app to display weather and timing information
- https://github.com/robbyronk/race-control

### Vehicle Web Crawler - Showroom Logic
- Migrated web crawler out of monolithic code base to its own service. 
- Designed distributed throttle to not overwhelm web servers with requests. 
- Decreased the time to crawl a new dealership. 

### Third Party Data Access Service - Showroom Logic 
- Heavily refactored for performance and ease of maintenance. 
- Added features to enhance the precision and aggregation of data. 
- Added a secure HTTP API.

### Ministry Partner Giving Analysis - Cru 
Initially tasked with implementing a monthly report to be delivered to 9,000 Cru staff, integration issues arose in the 
analytics platform that was going to deliver the report. A co-worker and I designed a new platform using the Javascript 
Client-Side View paradigm. The new version of the report uses Java (JAX-RS, JBoss App Server) on the server, fetching 
data from an Oracle Answers (BI Analytics tool) SQL query I wrote via SOAP. I wrote most of the JavaScript and worked 
with a designer on the HTML and CSS. I used Bootstrap and HTML5 Boilerplate, Angular.js to manage communication with 
the server via REST and the D3.js library to generate SVG charts. To prepare the HTML, CSS and JS for production 
deployments, I used H5BP's Ant Build. GitHub and Trello were used to collaborate.

### Google Apps Password Sync - Cru 
Used Google API documentation and extended an existing Java system to update a user's Google Apps for Business 
password when their Single Sign-On (JASIG CAS) password changed including an exponential backoff algorithm to prevent 
Denial of Service. Migrated 5000+ passwords from our SSO system to Google using Quartz thread pools and a thread safe 
wrapper around GData libraries from Google.

### Visualization of Simulated Ecosystem - University of Central Florida 
Wrote ecosystem simulation for Concepts of Parallel and Distributed Processing class, designed to run on 64 node 
beowulf cluster. Programmed in C, using the OpenMPI library for parallelization. For extra credit in the class, I 
created a visualization of the ecosystem over time by processing the output of the C program with a CLI PHP script 
which produced PNG images using the GD Library. I then used MPlayer to turn the PNGs into a video.
