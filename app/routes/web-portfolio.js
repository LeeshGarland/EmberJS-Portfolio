import Ember from 'ember';

var picadmin = ['PICadmin -  Client DB and Monthly Traffic/PPC Reporting','images/picadmin.png','This is the client database and reporting software built for internal use. Consultants can log in, associate clients with their accounts and store all service, contact, and login data in a secured, private web portal. Reporting system features integration with JSON, XML, and CSV-based reports downloaded through Analytics API as well as Adwords and Bing AdCenter. Google Charts allows for easily digestible, interactive graphs for clients to review their year-over-year and month-over-month statistics.','https://picadmin.com/'];
var apogee = ['Apogee IT Services - IT Pain Calculator','images/apogee.png','The result of a coffee and determination-fueled all-nighter. Circumvents the frustratingly walled-off nature of the Hubspot COS, which does not allow developer access to anything in the backend. Makes use of the Hubspot COS \'Personalization Tokens\' as makeshift GET variables, using vanilla Javascript and JQuery to calculate a user\'s questionnaire result and funnel them in to the appropriate grade result. Fully responsive. In addition to the questionnaire applet itself, the stylesheet, template, installation of all jQuery plugins such as sliders etc and responsive design work was done by me.' ,'http://www.apogeeitservices.com/it-pain-calculator'];
var bcartman = ['BC Artman Real Estate - MLS-enabled Advanced Search Interface','images/bcartman.png','The task at hand was to work directly with the developer of WP RETS PRO to take several unfinished or beta features to finished, fully functional components. Development work includes the entirety of the advanced search function, all instances of listing embeds, dynamic fields based on existing user searches, and much of the home detail and neighborhood templating functionality. As well, taking the design from mockup to fully responsive theme was my responsibility.','http://www.bcartmanrealestate.com/'];
var mbs = ['Mechanical Bull Sales - WPML-Ready Custom Quote Request System','images/mbs.png','To help the client go from a frame-based static HTML site to something feature-rich and rewarding for users, the mission was to create and implement a design based on a pre-selected them and outfit it with a custom installation of WooCommerce that allows for quote requests that integrate with Salesforce Web-to-Lead. As well, the functionality to add WPML/Multilingual content in the future was a must.','http://www.mechanicalbullsales.com/'];
var blacks = ['Black\'s Home Sales - Fully-featured Custom CMS for Modular Homes','images/blacks.png','What could have been a perfect storm of bad design sensibility coupled with the sudden departure of the client\'s developer mid-project... The mission was simple: with a very restricted budget and time frame, take an undocumented, non-functioning custom CMS from frustratingly broken to fully operable. Allows for advanced search of mobile and modular homes for sale and for order, as well as a WYSIWYG-enabled backend for clients to administrate their vast inventory with relative ease.','http://www.blackshomesales.com/'];
var stmaryscarbon = ['St. Mary\'s Carbon - Complete Backend Overhaul for Ease of Use','images/stmarys.png','A classic tale of a hired freelancer gone bad. Once the site\'s original incarnation was handed over to the client by their hired help, it was immediately available that the backend was needlessly complicated, too heavily reliant on hard-coded raw HTML and on the whole terribly bloated with features and plugins that only half-worked at best. What they needed was a developer to tame the wild beast that was their backend and completely revamp it with several quality of life and ease-of-use improvements such as custom post types and taxonomies that smartly redirect users based on post count. Other features include WYSIWYG taxonomies and widgets such that the client can edit any aspect of the site as easily as they would a Word document.','http://www.stmaryscarbon.com/'];
var mutualbenefit = ['Mutual Benefit Group - Customized Build of Agent Locator','images/mutualbenefit.png','As an aggregator of sorts for various insurance agencies over a vast geographical area, the client needed an extremely usable solution not only for organizing their various agent locations, but also a custom template that allows the third-party agents to apply for a location with ease. Once approved, the agents can even select one of four custom templates for displaying their pertinent info and company bios. Also features a customized build of a Google Maps-enabled agent locator.','http://www.mutualbenefitgroup.com/'];


export default Ember.Route.extend({
    model(){ return [picadmin, apogee, bcartman, mbs, stmaryscarbon, mutualbenefit]}
});
