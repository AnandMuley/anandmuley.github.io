app.controller('ProjectsController',['$scope','$route','$location',
    function($scope,$route,$location){

    $scope.title = "Projects";

    $scope.projects = [
        {
            id:1,
            name:'LeanCRM',
            duration:'Aug 2016 - Till Today',
            technologies:'Spring REST,Hibernate,Spock,Groovy',
            teamSize:12,
            role:'Technology Lead',
            description:'LeanCRM is a micro service which manages customer details. The system is developed over RESTful architecture.',
            contributions:[
                'Technology selection and decision making',
                'Managing team and helping them resolving complex technical issues',
                'Design, Develop and Review the code'
            ]
        },
        {
            id:2,
            name:'Central View Of Stock',
            duration : 'April 2014 - Feb 2016',
            technologies : 'Gradle, Jersey, Spring, TestNG, Groovy, Git, HTML5,Bootstrap, Angular JS',
            teamSize:14,
            role:'Developer',
            description:'Central view of stock gives the live status of the stocks available in stores for online purchases for click and collect now. A customer visits online stores for purchasing a product. Once the list of products are selected, customer searches nearby stores based on his current location (i.e. postal code). CVoS gives current availability of stocks before a customer places an order for click and collect now',
            contributions:[
                'Participate in the requirement gathering phase',
                'Designing and documentation of the Technical implementations',
                'Coding rest endpoint using Jersey Rest framework and Spring',
                'Unit Testing the Code using TestNG, Groovy and Gmock',
                'Developing UI for Admin user using Angular JS'
            ]
        },
        {
            id:3,
            name:'Accenture Health and Benefits Exchange (AHBX)',
            duration : 'April 2013 – April 2014',
            technologies : 'Portlets, Spring, Java/J2EE, Web Services, MySQL, Web Logic Portal',
            teamSize:200,
            role:'Senior Developer',
            description:'Portal Product Development for Health Care Industry. The product is for Individual and Employer enrollment for Health Care and Insurance Plans. The Product follows a Service Oriented Architecture(SOA). The product analyzes the eligibility of the Enrollee for plans and displays the list of plans. The customer can compare plans and select the one best suited as per his need',
            contributions:[
                'Participate in the requirement gathering phase',
                'Designing and documentation of the Technical implementations using the Unified Modeling Language (UML) and Sequence Diagrams',
                'Writing the Code in Java and Spring Portlet MVC and Web Service for Interfacing with the external services',
                'Unit Testing the Code using JUnit and JMock',
                'Fixing the defects to ensure the defect free product is delivered to the customer'
            ]
        },
        {
            id:4,
            name:'Selfcare Portal Product Development',
            duration: 'Feb 2012 – April 2013',
            technologies: 'Portlets, Spring, Java/J2EE, Web Services, MySQL, Liferay Portal',
            teamSize:12,
            role:'Developer',
            description:'SelfCare Portal is a CRM solution for the existing Telecom Billing Product. The modules of the portal are created as Portlets which are assembled to create a final SelfCare Portal',
            contributions:[
                'Develop a Bill View and Usage portlet using the Spring Portlet MVC',
                'Develop   a   Business   Logic   for   the   same   using   the   Hibernate   implementation   of JPA using Spring',
                'Develop a Payment module which interfaces with the Payment Gateway',
                'Design and develop the logic to Export bills to standard formats like PDF',
                'Generate Charts and Graphs using EXT­JS Charting',
                'UI Development using the EXT­JS Grid and Panels'
            ]
        },
        {
            id:5,
            name:'Telecom Billing Dashboard',
            duration:'May 2011 – Jan 2012',
            technologies:'Java/J2EE, Struts 2, DOJO, Web Services, Oracle 11g',
            teamSize:4,
            role:'Developer',
            description:'Telecom Billing Dashboard System is a web application used by TBMS to display various details. It displays details on the Products, Total Revenue, Sales Data, Usage Data and Popularity Data of different plans and schemes offered by the Telecom Company. The system allows for “What if” analysis for the new and existing campaigns, whereby Business Managers have better understanding and forecast of the offer campaigns. The application has a 3­tier architecture – JSP and Javascript for front­end, Java as the business layer and Oracle as backend',
            contributions:[
                'Created JSP pages to create and update the Dashboard',
                'Used Javascript functions for UI development and also some client side validations',
                'Struts2 was used to execute required actions and render appropriate results',
                'Oracle 11g database querying for graphs generation',
                'DOJO was used to create the XY graphs, Pie Charts, Bar graphs and Line graphs for the Dashboard data',
                'JQuery and Javascript were used to create widgets within the dashboard homepage'
            ]

        },
        {
            id:6,
            name:'Design of Centrifugal Pump',
            duration:'Oct 2009 – Feb 2010',
            technologies:'C Programming, PRO­E, Pro Programming, Parametric Technology',
            teamSize:4,
            role:'Undergraduate Student',
            description:'Automating the Design Process of Centrifugal Pump using the Pro­Programming feature of PRO­E Software. Explored the parametric approach in the Design and reduced the input parameters to a minimum possible i.e. three. Precisely, the application developed a 3D­assembly model of a PUMP by taking minimum three essential inputs like Suction Head (H), Speed (N), and Power Input (P).',
            contributions:[
                'Transforming the Conventional Design process to a Parametric Design Process',
                'Creating 3D models of the components of a Centrifugal Pump and assembling them',
                'Business Logic Development for automating the design process of a Centrifugal Pump',
                'Developing the API for accepting the user inputs and generating the output file for the PRO­E Software'
            ]
        }
    ];

    function getSelectedProject(projectId){
        var selectedProj = null;
        angular.forEach($scope.projects,function(value,key){
            if(value.id == projectId){
                selectedProj = value;
                return true;
            }
        });
        return selectedProj;
    }

    $scope.selectedProject = getSelectedProject($route.current.params.projectId);

    $scope.viewDetails = function(projectId){
        $location.path('/details/'+projectId);
    }

}]);