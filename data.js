/**
 * 
 */

module.exports = function () {
return {
queries: [
		{id: 1, description: "Tab.  Related Guidelines <-> Related Security Principles (1:M)", sql: "SELECT Related_Guidelines, Related_Security_Principles FROM t1000 order by Related_Guidelines desc"},
	    {id: 2, description: "Tab. Solutions or Mitigations <-> Probing Techniques ", sql: " Select Probing_Techniques, Solution_or_Mitigation from t1000 order by Probing_Techniques desc"},
	    {id: 3, description: "Tab. Obfuscation Techniques <-> Indicators (1:1)", sql: " Select Indicators, Obfuscation_Technique from t1000 order by Indicators desc"}
			]
	}
}