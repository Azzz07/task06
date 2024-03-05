sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'app/test/integration/FirstJourney',
		'app/test/integration/pages/tableList',
		'app/test/integration/pages/tableObjectPage'
    ],
    function(JourneyRunner, opaJourney, tableList, tableObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('app') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThetableList: tableList,
					onThetableObjectPage: tableObjectPage
                }
            },
            opaJourney.run
        );
    }
);