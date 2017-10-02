

module.exports = function () {
return {
queries: [
		{id: 1, firstTable:"Related Guidelines",
				secondTable: "Related Security Principles",
				relantionship: "Many-to-Many",
				description: "Tab.  Related Guidelines <-> Related Security Principles (M:M)",
				firstSelected: "GuideLine",
				secondSelected: "Principle ",
				sql:"SELECT GuideLine, Principle "+
						"FROM mydb.related_guideline_has_attack "+
						"INNER JOIN mydb.related_security_principles_has_attack "+
							"ON mydb.related_guideline_has_attack.Attack_Capec_Id = mydb.related_security_principles_has_attack.Attack_Capec_Id "+
					    "INNER JOIN mydb.related_guideline "+
							"ON mydb.related_guideline_has_attack.Related_Guideline_Id = mydb.related_guideline.Id "+
						"INNER JOIN mydb.related_security_principles "+
							"ON mydb.related_security_principles_has_attack.Related_Security_Principles_Id = mydb.related_security_principles.Id"},
	   
		{id: 2, firstTable:"Solutions or Mitigations",
				secondTable: "Related Security Principles",
				relantionship: "Many-to-Many",
				description: "Tab. Solutions or Mitigations <-> Probing Techniques (M:M) ", 
				firstSelected:"mydb.solutions_or_mitigations.Mitigation",
				secondSelected: "mydb.probing_techniques.Technique",
			    	sql:"SELECT mydb.solutions_or_mitigations.Mitigation , mydb.probing_techniques.Technique "+
					"FROM mydb.attack_has_solutions_or_mitigations "+
						"INNER JOIN mydb.attack_has_probing_techniques "+
							"ON mydb.attack_has_solutions_or_mitigations.Attack_Capec_Id = mydb.attack_has_probing_techniques.Attack_Capec_Id "+
						"INNER JOIN mydb.solutions_or_mitigations "+
							"ON mydb.attack_has_solutions_or_mitigations.Solutions_or_Mitigations_Id = mydb.solutions_or_mitigations.Id "+
						"INNER JOIN mydb.probing_techniques "+
							"ON mydb.attack_has_probing_techniques.Probing_Techniques_id = mydb.probing_techniques.id "+
							"ORDER BY mydb.solutions_or_mitigations.Mitigation ASC "},
			
	    {id: 3, firstTable:"Obfuscation Techniques",
				secondTable: "Indicators",
				relantionship: "Many-to-Many",
				description: "Tab. Obfuscation Techniques <-> Indicators (M:M)", 
				firstSelected: "mydb.indicators.Indicator",
				secondSelected: "mydb.obfuscation.Techinique_Obfuscation ",
				sql:"SELECT mydb.indicators.Indicator, mydb.obfuscation.Techinique_Obfuscation "+
					"FROM mydb.attack_has_obfuscation "+
						"INNER JOIN mydb.attack_has_indicators "+
							"ON mydb.attack_has_indicators.Attack_Capec_Id = mydb.attack_has_obfuscation.Attack_Capec_Id "+
					    "INNER JOIN mydb.indicators "+
							"ON mydb.attack_has_indicators.Indicators_Id = mydb.indicators.Id "+
						"INNER JOIN mydb.obfuscation "+
							"ON mydb.attack_has_obfuscation.Obfuscation_Id = mydb.obfuscation.Id "+
							"ORDER By mydb.indicators.Indicator asc"},
							
		{id: 4, firstTable:"Motivation and Consequence",
				secondTable: "Attacker Knowledge Required",
				relantionship: "Many-to-Many",
				description: "Motivation and Consequence <-> Attacker Knowledge Required (M:M)",
				firstSelected: "mydb.motivations_and_consequences.Technical_Impact",
				secondSelected: "mydb.attacker_knowledge_required.Knowledge_Type ",
				sql: "SELECT mydb.motivations_and_consequences.Technical_Impact , mydb.attacker_knowledge_required.Knowledge_Type "+
					  "FROM mydb.attacker_knowledge_required_has_attack "+
							"INNER JOIN mydb.motivations_and_consequences_has_attack "+
								"ON mydb.motivations_and_consequences_has_attack.Attack_Capec_Id = mydb.attacker_knowledge_required_has_attack.Attack_Capec_Id "+
							"INNER JOIN mydb.attacker_knowledge_required "+
								"ON mydb.attacker_knowledge_required_has_attack.Attacker_Knowledge_Required_Id = mydb.attacker_knowledge_required.Id "+
							"INNER JOIN mydb.motivations_and_consequences "+
								"on mydb.motivations_and_consequences_has_attack.Motivations_and_Consequences_Id = mydb.motivations_and_consequences.Id "+
						"ORDER BY mydb.motivations_and_consequences.Technical_Impact ASC"}
		 ]
	}
}