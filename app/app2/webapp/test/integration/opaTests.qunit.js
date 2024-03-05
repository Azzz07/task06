sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'app2/test/integration/FirstJourney',
		'app2/test/integration/pages/tableList',
		'app2/test/integration/pages/tableObjectPage'
    ],
    function(JourneyRunner, opaJourney, tableList, tableObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('app2') + '/index.html'
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