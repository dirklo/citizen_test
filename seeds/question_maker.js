const questionObjects = []

class Question {
    constructor (question, correctAnswers, wrongAnswers, category){
        this.question = question
        this.correctAnswers = correctAnswers
        this.wrongAnswers = wrongAnswers
        this.category = category
        this.answered = false
        this.correct = false
        questionObjects.push(this)
    }

    randomCorrectAnswer(){
        const randomIndex = Math.floor(Math.random() * this.correctAnswers.length)
        return this.correctAnswers[randomIndex]
    }

    randomWrongAnswers(){
        let shuffled = this.wrongAnswers.sort(() => Math.random() - 0.5)
        return shuffled
    }

    randomFour(){
        let wrong = this.randomWrongAnswers() 
        let options = [wrong[0], wrong[1], wrong[2], this.randomCorrectAnswer()]
        let shuffled = options.sort(() => Math.random() - 0.5)
        return shuffled
    }

    markAnswered(){
        this.answered = true
    }
}

// Principles of American Government
new Question(
    "What is the form of Government of the United States?", 
    ["Republic","Constitution-based Federal Republic","Representative Democracy"],
    ["Communist", "Monarchy", "Anarchy", "Confederation", "Unitary State", "Federation", "Oligarchy", "Autocracy"],
    "principlesQuestions"
    );

new Question(
    "What is the supreme law of the land?", 
    ["The (U.S.) Constitution"],
    ["The Declaration of Independance", "The Emancipation Proclamation", "The Bill of Rights", "The Federalist Papers", "The Articles of Confederation", "The Federal Judiciary Act"],
    "principlesQuestions"
    );

new Question(
    'Name one thing the U.S. Constitution does.', 
    ["Forms the government", "Defines the powers of government", "Defines the parts of government", "Protects the rights of the people"],
    ["Declares independance from England", "Guarantees a right to privacy", "Defines the size of the Supreme Court", "Guarantees the pursuit of happiness", "Defines political parties", "Guarantees separation of church and state"],
    "principlesQuestions"
    );

new Question(
    'The U.S. Constitution starts with the words "We the People" What does "We the People" mean?', 
    ["Self-Government", "Popular Sovereignty", "Consent of the governed", "People should govern themselves", "(Example of) social contract"],
    ["Right to a trial", "Freedom of speech", "Only men can vote", "Protection against unlawful searches"],
    "principlesQuestions"
    );

new Question(
    "How are changes made to the Constitution?", 
    ["Amendments","The amendment process"],
    ["Executive Order", "Popular vote", "Supreme Court vote", "Congressional vote"],
    "principlesQuestions"
    );

new Question(
    "What does the Bill of Rights protect?", 
    ["(The basic) rights of Americans", "(The basic) rights of people living in the United States"],
    ["The right to privacy", "The right to employment", "The right to an education", "The rights of African Americans to vote"],
    "principlesQuestions"
    );

new Question(
    'How many amendments does the U.S. Constitution have?', 
    ["27"],
    ["28", "29", "26", "22", "25", "24"],
    "principlesQuestions"
    );

new Question(
    'Why is the Declaration of Independace important?', 
    ["It says America is free from British control", "It says all people are created equal", "It identifies inherent rights", "It identifies individual freedoms"],
    ["It freed the slaves", "It formed the idea of political parties", "It includes the Bill of Rights", "It gives power to the state governments"],
    "principlesQuestions"
    );

new Question(
    'What founding document said the American colonies were free from Britain?', 
    ["The Declaration of Independance"],
    ["The U.S. Constitution", "The Bill of Rights", "The Articles of Confederation", "The Federalist Papers"],
    "principlesQuestions"
    );

new Question(
    "Which of these is an important idea from the Declaration of Independance AND the U.S. Constitution?", 
    ["Equality","Liberty","Social contract", "Natural rights", "Limited government", "Self-government"],
    ["Religion", "Privacy", "Elections", "Taxation", "Environment", "State Rights"],
    "principlesQuestions"
    );

new Question(
    'The words "Life, Liberty, and the pursuit of Happiness" are in what foinding document?',
    ["The Declaration of Independance"],
    ["The U.S. Constitution", "The Federalist Papers", "The Bill of Rights", "The Articles of Confederation", "The Federal Judiciary Act"],
    "principlesQuestions"
    );

new Question(
    "What is the economic system of the United States?", 
    ["Capitalism", "Free market economy"],
    ["Socialism", "Communism", "Feudalism", "Mercantilism", "Palace Economy", "Statism"],
    "principlesQuestions"
    );

new Question(
    "What is the rule of law?", 
    ["Everyone must follow the law", "Leaders must obey the law", "Government must obey the law", "No one is above the law"],
    ["The law only applies to certain citizens", "The law does not apply to the President", "The law is what the government decides", "State governments are not bound by national law"],
    "principlesQuestions"
    );

new Question(
    "Which of these is a document that influenced the U.S. Constitution?", 
    ["The Declaration of Independance","The Articles of Confederation", "The Federalist Papers", "The Anti-Federalist Papers", "The Virginia Declaration of Rights", "The Fundamental Orders of Connecticut", "The Mayflower Compact", "The Iroquois Great Law of Peace"],
    ["The Gutenberg Bible", "The Magna Carta", "The Emancipation Proclamation", "The Treaty of Versailles", "The Monroe Doctrine", "The Gettysburg Address", "The Congressional Directory", "The Rolls of Parliament"],
    "principlesQuestions"
    );

new Question(
    "There are three branches of government.  Why?", 
    ["So one part does not become too powerful", "Checks and balances", "Separation of powers"],
    ["To ensure separation of church and state", "So the president can take vacations", "To give more power to the courts", "To allow states to make their own laws", "To allow the people to govern themselves"],
    "principlesQuestions"
    );

new Question(
    "Which of these is one of the three branches of government?", 
    ["Legistaltive", "Judicial", "Executive", "Congress", "The Courts", "The President"],
    ["The Supreme Court", "Lobbyists", "State Capitols", "The Central Intelligence Agency", "The National Rifle Association", "The Federal Beaurau of Investigation", "The Federal Trade Comission", "The Federal Election Commission", "The Environmental Protection Agency"],
    "systemQuestions"
    );

new Question(
    "The President of the United States is in charge of which branch of government", 
    ["The Executive Branch"],
    ["The Supreme Court", "The Judicial Branch", "The Legislative Branch", "The Golf Branch", "Congress", "The Courts"],
    "systemQuestions"
    );

new Question(
    "Which part of the government writes laws?", 
    ["Congress", "U.S. or National Legislature", "The Legislative Branch"],
    ["The President", "The Executive Branch", "The Supreme Court", "The Judicial Branch", "State Assembly"],
    "systemQuestions"
    );

new Question(
    "Which of these is part of the U.S. Congress?", 
    ["The House of Representatives", "The Senate"],
    ["The White House", "The Supreme Court", "The Library of Congress", "The Pentagon", "The Department of State"],
    "systemQuestions"
    );

new Question(
    "Which of these is a power of the U.S. Congress?", 
    ["Writes Laws", "Declares War", "Makes the federal budget"],
    ["Appoints heads of federal agencies", "Vetos bills", "Leads the conversation on foreign policy", "Interprets state laws", "Hears civil cases", "Punishes violators of the law"],
    "systemQuestions"
    );
    
new Question(
    "How many U.S. Senators are there?", 
    ["100"],
    ["272", "50", "102", "72", "435", "200"],
    "systemQuestions"
    );

new Question(
    "How long is a term for a U.S. senator?", 
    ["6 Years"],
    ["2 Years", "4 Years", "3 Years", "5 Years"],
    "systemQuestions"
    );

new Question(
    "How many voting members are in the House of Representatives?", 
    ["435"],
    ["100", "348", "272", "534", "345"],
    "systemQuestions"
    );

new Question(
    "How long is a term for a member of the House of Representatives?", 
    ["2 Years"],
    ["6 Years", "4 Years", "3 Years", "5 Years"],
    "systemQuestions"
    );

new Question(
    "Why do U.S. Representatives serve shorter terms then U.S Senators?", 
    ["To more closely follow public opinion"],
    ["To save taxpayer dollars", "To allow more laws to pass through the house", "Because there are more representatives than senators", "To make The Senate more powerful"],
    "systemQuestions"
    );

new Question(
    "How many senators does each state have?", 
    ["2"],
    ["3", "5", "It depends on the population of the state", "1"],
    "systemQuestions"
    );

new Question(
    "Why does each state have two senators?", 
    ["Equal representation (for small states)", "The Great Comprimise (Connecticut Compromise)"],
    ["Only one needs to be present to represent the state", "To streamline the voting process", "To equally represent their districts", "To represent states based on their land"],
    "systemQuestions"
    );

new Question(
    "Who does a U.S. senator represent?", 
    ["Citizens of their state"],
    ["All United States citizens", "Residents of the United States", "Congress", "The President"],
    "systemQuestions"
    );

new Question(
    "Who elects U.S. senators?", 
    ["Citizens from their state"],
    ["The President", "The Senate", "State legislatures", "All United States citizens", "The Russians"],
    "systemQuestions"
    );

new Question(
    "Who does a member of the House of Representatives represent?", 
    ["Citizens in their congressional district"],
    ["Citizens of their state", "Their state's governor", "All United States Citizens", "Corporate interests", "Antifa"],
    "systemQuestions"
    );

new Question(
    "Who elects members of the House of Representatives?", 
    ["Citizens from their congressional district"],
    ["Citizens of their state", "State legislatures", "All United States Citizens", "The President"],
    "systemQuestions"
    );

new Question(
    "The president of the United States is elected for how many years?", 
    ["4"],
    ["3", "6", "2", "As many as he feels like"],
    "systemQuestions"
    );

new Question(
    "The president of the United States can only serve two terms. Why?", 
    ["The 22nd Amendment", "To keep the president from becoming too powerful"],
    ["So elections coincide with congressional elections", "To increase power to congress", "Seperation of powers", "Who says only two terms? That's a liberal scam! SAD!"],
    "systemQuestions"
    );

new Question(
    "If the president can no longer serve, who becomes president?", 
    ["The Vice-president"],
    ["The Speaker of the House", "The Chief Justice", "The Secretary of State", "Donald J. Trump"],
    "systemQuestions"
    );

new Question(
    "Which of these is a power of the president?", 
    ["Signs bills into law", "Vetos bills", "Enforces laws", "Commander in Chief (of the military)", "Chief Diplomat"],
    ["Interprets state laws", "Settles legal disputes", "Hears civil cases", "Declares War", "Regulates spending policy"],
    "systemQuestions"
    );

new Question(
    "Who is the commander in chief of the U.S. military?", 
    ["The President"],
    ["The Speaker of the House", "The Vice-president", "The Chief of Staff", "The Secretary of Defense", "The Chief Justice"],
    "systemQuestions"
    );

new Question(
    "Who signs bills to become laws?", 
    ["The President"],
    ["The Speaker of the House", "The President of the Senate", "The Chief of Staff", "The Secretary of Defense", "The Chief Justice"],
    "systemQuestions"
    );
    
new Question(
    "Who vetoes bills?", 
    ["The President"],
    ["The Speaker of the House", "The President of the Senate", "The Director of National Intelligence", "The Attorney General", "Secretary of the Treasury"],
    "systemQuestions"
    );

new Question(
    "Who appoints federal judges?", 
    ["The President"],
    ["The Vice-president", "Congress", "The Chief Justice", "The Attorney General", "Secretary of State"],
    "systemQuestions"
    );

new Question(
    "Which of these is a part of the executive branch?", 
    ["The President", "Cabinet", "Federal departments and agencies"],
    ["The Supreme Court", "Congress", "The U.S. Capitol", "The Central Intelligence Agency", "The National Security Administration"],
    "systemQuestions"
    );

new Question(
    "What does the President's Cabinet do?", 
    ["Advises the President"],
    ["Signs bills to become laws", "Vetoes bills", "Controls spending policies", "Appoints federal judges"],
    "systemQuestions"
    );

new Question(
    "Which of these is a Cabinet-level position?", 
    ["Attorney General", "Secretary of Agriculture", "Secretary of Commerce", "Secretary of Defense", "Secretary of Education", "Secretary of Energy", "Secretary of Health and Human Services", "Secretary of Homeland Security", "Secretary of Housing and Urban Development", "Secretary of the Interior", "Secretary of Labor", "Secretary of State", "Secretary of Transportation", "Secretary of the Treasury", "Secretary of Veterans Affairs", "Vice-President"],
    ["Chief Justice", "Speaker of the House", "First Lady", "State governor", "Supreme Court Justice", "Senator", "Member of the House of Representatives"],
    "systemQuestions"
    );

new Question(
    "Why is the Electoral College important?", 
    ["It decides who is elected president", "It provides a compromise between the popular election of the president and congressional selection"],
    ["Without it, republicans would never win an election", "It creates fairness in elections", "It ensures that each vote is valued equally", "It allows for more than 2 political parties"],
    "systemQuestions"
    );

new Question(
    "Which of these is a part of the judicial branch?", 
    ["The Supreme Court", "Federal Courts"],
    ["Congress", "The Attorney General", "The President", "The Department of Justice"],
    "systemQuestions"
    );

new Question(
    "What does the Judicial branch do?", 
    ["Reviews laws", "Explains laws", "Resolves disputes (disagreements)", "Decides if a law goes against the U.S. Constitution"],
    ["Vetoes bills", "Declares war", "Impeaches and tries federal officers", "Raise public money and oversee its expenditure", "Makes laws"],
    "systemQuestions"
    );

new Question(
    "What is the highest court in the United States?", 
    ["The Supreme Court"],
    ["Patent Trial and Appeal Board", "United States Court of Federal Claims", "United States Court of Appeals for the Eleventh Circuit", "United States Tax Court"],
    "systemQuestions"
    );

new Question(
    "How many seats are on the Supreme Court?", 
    ["9"],
    ["10", "8", "11", "7", "6"],
    "systemQuestions"
    );

new Question(
    "How many Supreme Court justices are usually needed to decide a case?", 
    ["5"],
    ["6", "4", "9", "7", "6"],
    "systemQuestions"
    );

new Question(
    "How long do Supreme Court Justices serve?", 
    ["For life", "Lifetime appointment", "Until Retirement"],
    ["4 years", "6 years", "10 years", "Until dismissed by the President", "12 years"],
    "systemQuestions"
    );

new Question(
    "Supreme Court Justices serve for life. Why?", 
    ["To be independant of politics", "To limit outside political influence"],
    ["The is the standardwe see in other countries", "To ensure that decisions are consitent", "To gather political power in the courts"],
    "systemQuestions"
    );

new Question(
    "Which of these is a power ONLY for the federal government?", 
    ["Print paper money", "Mint coins", "Declare war", "Create an army", "Make treaties", "Set foreign policy"],
    ["Provide schooling and education", "Provide protection (police)", "Provide safety (fire department)", "Issue drivers licenses", "Approve zoning and land use"],
    "systemQuestions"
    );

new Question(
    "Which of these is a power ONLY for the states?", 
    ["Provide schooling and education", "Provide protection (police)", "Provide safety (fire department)", "Issue drivers licenses", "Approve zoning and land use"],
    ["Print paper money", "Mint coins", "Declare war", "Create an army", "Make treaties", "Set foreign policy"],
    "systemQuestions"
    );

new Question(
    "What is the purpose of the 10th Amendment?", 
    ["It states that the powers not given to the federal government belong to the states or to the people", "It states that the federal government possesses only those powers delegated, or enumerated, to it through the Constitution"],
    ["It states that no state shall make or enforce any law which shall abridge the privileges or immunities of citizens of the United States", "It abolished slavery", "It prohibits the denial of the right to vote based on race, color or previous condition of servitude", "It prohibits the denial of the right to vote based on sex", "It grants the District of Columbia electors in the Electoral College"],
    "systemQuestions"
    );

new Question(
    "There are four amendments to the U.S. Constitution about who can vote.  Which of these describes one of those amendments?", 
    ["Citizens eighteen and older can vote", "You don't have to pay a poll tax to vote", "Any citizen can vote. (Women and men can vote)", "A male citizen of any race can vote"],
    ["Non-U.S. Citizens are allowed to vote", "Voting by mail is universally legal", "Only members of the candidate's political party my vote for that candidate", "Citizens of any religion can vote", "Only land owners my vote"],
    "rightsQuestions"
    );

new Question(
    "Who can vote in federal elections, run for federal office and serve on a jury in the United States?", 
    ["Citizens of the United States"],
    ["Convicted felons", "Foreign nationals", "Non-U.S. Citizens", "Russians"],
    "rightsQuestions"
    );

new Question(
    "Which of these is a right of everyone living in the United States?", 
    ["Freedom of expression", "Freedom of speech", "Freedom of assembly", "Freedom to petition the Government", "Freedom of Religion", "The right to bear arms"],
    ["Freedom to steal", "Freedom to defame/slander", "Freedom to plagerize", "Freedom to solicit to commit crimes"],
    "rightsQuestions"
    );

new Question(
    "What do we show loyalty to when we say the Pledge of Allegiance?", 
    ["The United States", "The flag"],
    ["God", "The President", "The catholic church", "The U.S. Constitution", "The education system"],
    "rightsQuestions"
    );

new Question(
    "Which of these is a promise that new citizens make in the Oath of Allegiance?", 
    ["Give up loyalty to other countries", "Defend the U.S. Constitution", "Obey the laws of the United States", "Serve in the military (if needed)", "Serve (help, do important work for) the nation (if needed)", "Be loyal to the United States"],
    ["Own property", "Only earn U.S. dollars", "Swear fealty to McDonalds", "Speak American English"],
    "rightsQuestions"
    );

new Question(
    "Which of these is a way a person can become a United States citizen", 
    ["Naturalize", "Derive citizenship", "Be born in the United States"],
    ["Own property", "Only earn U.S. dollars", "Swear fealty to McDonalds", "Speak American English"],
    "rightsQuestions"
    );

new Question(
    "Which of these is an example of civic participation in the United States?", 
    ["Vote", "Run for office", "Join a political party", "Help with a campaign", "Join a civic group", "Join a community group", "Give an elected official your opinion (on an issue)", "Contact elected officials", "Support or oppose an issue or policy", "Write to a newspaper"],
    ["Buy a car", "Watch the news", "Go to jail", "Attend college", "Work for a U.S. company"],
    "rightsQuestions"
    );

new Question(
    "Which of these is a way an American can serve their country?", 
    ["Vote", "Pay taxes", "Obey the law", "Serve in the military", "Run for office", "Work for local, state, or federal government"],
    ["Buy American products", "Buy property", "Work for a private corporation", "Attend college", "Travel to another state"],
    "rightsQuestions"
    );

new Question(
    "Why is it important to pay federal taxes?", 
    ["Required by law", "All people pay to fund the federal government", "Required by the U.S. Constitution (16th Amendment)", "Civic duty"],
    ["Citizens cannot be trusted with their own money", "It's required in the 10 commandments", "It is one of the 2 certainties in life, the other being death", "It's what Jesus would do", "Because Trump needs it"],
    "rightsQuestions"
    );
    
new Question(
    "It is important for all men age 18 through 25 to register for the Selective Service. Which of these is a reason why?", 
    ["Required by law", "Civic Duty", "Makes the draft fair if needed"],
    ["Wars won't fight themselves", "If you don't die for your country, who will?", "War is a multi-billion dollar industry, and you need to make that money for your ruling class", "It's the right things to do", "It's what Jesus would do"],
    "rightsQuestions"
    );

new Question(
    "Which of these is a reason the colonists came to America?", 
    ["Freedom", "Political liberty", "Religious freedom", "Economic opportunity", "Escape persecution"],
    ["The thrill of genocide", "The love of long boat rides", "To invent the cheeseburger", "Lost a bet"],
    "colonialQuestions"
    );

new Question(
    "Who lived in America before the colonists arrived?", 
    ["American Indians", "Native Americans"],
    ["The French", "Mormans", "Canadians", "African Americans"],
    "colonialQuestions"
    );

new Question(
    "What group of people was taken and sold as slaves?", 
    ["Africans", "People from Africa"],
    ["Jewish people", "Indians", "Australians", "Chinese"],
    "colonialQuestions"
    );

new Question(
    "What war did the Americans fight to win independence from Britain?", 
    ["American Revolution", "The American Revolutionary War", "War for American Independance"],
    ["The French and Indian War", "The War of 1812", "The Great War", "The Crusades", "World War II", "The Thirty-Years War"],
    "colonialQuestions"
    );

new Question(
    "Which of these is one of the original 13 colonies?", 
    ["New Hampshire", "Massachusetts", "Rhode Island", "Connecticut", "New York", "New Jersey", "Pennsylvania", "Delaware", "Maryland", "Virginia", "North Carolina", "South Carolina", "Georgia"],
    ["Florida", "Tennessee", "West Virginia", "Ohio", "Iowa", "Louisiana", "Vermont", "Maine", "Indiana", "Mississippi", "Kentucky"],
    "colonialQuestions"
    );

new Question(
    "What founding document was written in 1787?", 
    ["The U.S. Constitution"],
    ["The Articles of Confederation", "The Declaration of Independance", "The Federalist Papers", "The Monroe Doctrine"],
    "colonialQuestions"
    );

new Question(
    "The federalist Papers supported the passage of the U.S. Constitution.  Which of these was one of the writers?", 
    ["James Madison", "Alexander Hamilton", "John Jay", "Publius"],
    ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin", "Andrew Jackson", "John Quincy Adams"],
    "colonialQuestions"
    );

new Question(
    "Why were the Federalist Papers important?", 
    ["They helped people understand the U.S. Constitution", "They supported passing the U.S. Constitution"],
    ["They United the people of America", "They inspired the Boston Tea Party", "They included a draft of the Declaration of Independance", "They formed the Democratic party"],
    "colonialQuestions"
    );

new Question(
    "Which of these is something Benjamin Franklin is famous for?", 
    ["Founded the first free public libraries", "First Postmaster General of the United States", "Helped write the Declaration of Independance", "Inventor", "U.S. Diplomat"],
    ["Musician", "Became president", "Created the first $100 bill", "Discovered electricity", "Wanted the turkey to be the national bird"],
    "colonialQuestions"
    );

new Question(
    "Which of these is something George Washinton is famous for?", 
    ["Father of our country", "First President of the United States", "General of the continental army", "President of the Constitutional Convention"],
    ["Had dentures made of wood", "Wore a white wig", "Was the first to live in the White House", "Was always victorious in battle", "Was a Republican", "Had many children with Martha"],
    "colonialQuestions"
    );

new Question(
    "Which of these is something Thomas Jefferson is famous for?", 
    ["Writer of the Declaration of Independance", "Third President of the United States", "Doubled the side of the U.S. (Louisiana Purchase)", "First Secretary of State", "Founded the University of Virginia", "Writer of the Virginia Statute on Religious Freedom"],
    ["Writer of the Constitution", "Was a devout Christian", "Was a Freemason", "Introduced Ice Cream to the colonies", "Was a vegetarian", "Set off a waffle craze in the United States"],
    "colonialQuestions"
    );

new Question(
    "Which of these is something James Madison is famous for?", 
    ["Father of the Constitution", "Fourth President of the United States", "President during War of 1812", "One of the writers of the Federalist Papers"],
    ["Suffered from tuberculosis", "Had 8 younger siblings", "Was outspoken as a child", "Wrote the Articles of Confederation", "Supported Alexander Hamilton"],
    "colonialQuestions"
    );

new Question(
    "Which of these is something Alexander Hamilton is famous for?", 
    ["First Secretary of the Treasury", "One of the writers of the Federalist Papers", "Helped establish the First Bank of the United States", "Aide to General George Washington", "Member of the Continental Congress"],
    ["Fired by John Adams", "Was an abolitionist and an egalitarian", "Was born into a wealthy family", "Wrote the Declaration of Independance"],
    "colonialQuestions"
    );

new Question(
    "What territory did the United States buy from France in 1803?", 
    ["Louisiana", "Louisiana Territory"],
    ["Northwest Territory", "Alaska", "California", "Missouri Territory", "Mississippi Territory"],
    "eighteenQuestions"
    );

new Question(
    "Which of these was a war fought by the United States in the 1800's?", 
    ["War of 1812", "Mexican-American War", "Civil War", "Spanish-American War"],
    ["Revolutionary War", "The Great War", "French and Indian War", "War of Jenkins' Ear", "Queen Anne's War", "Pequot War"],
    "eighteenQuestions"
    );

new Question(
    "Name the U.S. war between the North and the South", 
    ["The Civil War"],
    ["Revolutionary War", "World War I", "French and Indian War", "The Cold War", "Spanish-American War", "Mexican-American War"],
    "eighteenQuestions"
    );

new Question(
    "Which of these was an important event of the Civil War", 
    ["Battle of Fort Sumter", "Emancipation Proclamation", "Battle of Vicksburg", "Battle of Gettysburg", "Sherman's March", "Surrender at Appomattox", "Battle of Antietam/Sharpsburg", "Lincoln was assassinated" ],
    ["Battle of Bunker Hill", "Battle of Block Island", "Battle of White Plains", "Battle of Trenton", "Battle of Fort Washington", "Battle of the Frontiers", "Battle of Charleroi", "Battle of Le Cateau"],
    "eighteenQuestions"
    );

new Question(
    "Which of these is something Abraham Lincoln is famous for?", 
    ["Freed the slaves (Emancipation Proclamation)", "Saved (or preserved) the union", "Led the United States during the Civil War", "16th president of the United States", "Delivered the Gettysburg Address"],
    ["Owned slaves", "Elected unanimously to the presidency", "Was an abolitionist", "Served in the U.S. Senate", "Founded the Democratic party"],
    "eighteenQuestions"
    );

new Question(
    "What did the Emancipation Proclamation do?", 
    ["Freed the slaves", "Freed slaves in the Confederacy", "Freed slaves in the Confederate states", "Freed slaves in most Southern states"],
    ["Formed the governemnt", "Ended racism", "Ended the Civil War", "Opened the door for foreign involvement in the Civil War", "Automatically passed the 13th Amendment"],
    "eighteenQuestions"
    );

new Question(
    "What U.S. war ended slavery?", 
    ["The Civil War"],
    ["World War I", "The French and Indian War", "The Revolutionary War", "The Cold War", "The War of 1812", "The Spanish-American War", "The Mexican-American War"],
    "eighteenQuestions"
    );

new Question(
    "What amendment gives citizenship to all persons born in the United States?", 
    ["The 14th Amendment"],
    ["The 13th Amendment", "The 12th Amendment", "The 15th Amendment", "The 16th Amendment", "The 11th Amendment"],
    "eighteenQuestions"
    );

new Question(
    "When did all men get the right to vote?", 
    ["After the Civil War", "During Reconstruction", "With the 15th Amendment", "1870"],
    ["During the Civil War", "1860", "With the 13th Amendment", "Immediately after the Revolutionary War", "During the War of 1812", "During Lincoln's presidency"],
    "eighteenQuestions"
    );

new Question(
    "Which of these was a leader of the women's rights movement in the 1800's?", 
    ["Susan B. Anthony", "Elizabeth Cady Stanton", "Sojourner Truth", "Harriet Tubman", "Lucretia Mott", "Lucy Stone"],
    ["Phillis Wheatley", "Phoebe Palmer", "Biddy Mason", "Clara Barton", "Mary Walton", "Hetty Green", "Annie Oakley"],
    "eighteenQuestions"
    );

new Question(
    "Which of these is a war fought by the United States in the 1900's?", 
    ["World War I", "World War II", "Korean War", "Vietnam War", "(Persian) Gulf War"],
    ["Mexican Revolution", "Six-Day War", "Acehnese War", "Russo-Japanese War", "War of 1,000 Days", "South African War", "Boxer Rebellion"],
    "recentQuestions"
    );

new Question(
    "Why did the United States enter World War I?", 
    ["Because Germany attacked U.S. (civilian) ships", "To support the Allied Powers (England, France, Italy and Russia)", "To oppose the Central Powers (Germany, Austria-Hungary, the Ottoman Empire, and Bulgaria)"],
    ["Because Britain placed trade restrictions on America", "Because of a dispute over the annexing of Texas", "Because of the explosion of the USS Maine in Cuba", "To prevent the spread of Communism in east Asia", "Because of the Japanese bombing at Pearl Harbor"],
    "recentQuestions"
    );

new Question(
    "When did all women gain the right to vote?", 
    ["1920", "After World War I", "With the 19th Amendment"],
    ["With the 20th Amendment", "1935", "1901", "With the 18th Amendment", "After World War II", "1910"],
    "recentQuestions"
    );

new Question(
    "What was the Great Depression?", 
    ["The longest economic recession in modern history"],
    ["A war", "A congressional bill", "A founding document", "A canyon in Arizona", "A political movement in the early 1900's"],
    "recentQuestions"
    );

new Question(
    "When did the Great Depression start?", 
    ["The Great Crash (1929)", "The stock market crash of 1929"],
    ["2020", "After World War I (1918)", "1910", "At the Start of World War II (1939)", "After World War II (1945)"],
    "recentQuestions"
    );

new Question(
    "Who was the president during the Great Depression and World War II?", 
    ["Franklin D. Roosevelt"],
    ["Herbert Hoover", "Harry S. Truman", "Dwight D. Eisenhower", "Calvin Coolidge"],
    "recentQuestions"
    );

new Question(
    "Why did the United States enter World War II?", 
    ["Bombing of Pearl Harbor", "Japanese attacked Pearl Harbor", "To support the Allied Powers (England, France and Russia)", "To oppose the Axis Powers (Germany, Italy and Japan)"],
    ["The assassination of John F. Kennedy", "To combat the spread of communism from North Korea into South Korea", "To oppose the spread of communism from Russia", "To establish military presence in Europe"],
    "recentQuestions"
    );
    
new Question(
    "Which of these is something Dwight Eisenhower is famous for?", 
    ["General during World War II", "President at the end of (during) the Korean War", "34th President of the United States", "Signed the Federal-Aid Highway Act of 1956 (Created the Interstate stystem)"],
    ["Former Republican Governor of Massachusetts", "The youngest person to become president", "Championed the 'Square Deal' economic policies", "Initiated the development of the atomic bomb", "Presided over the end of Prohibition"],
    "recentQuestions"
    );

new Question(
    "Who was the United States' main rival during the Cold War?", 
    ["Soviet Union", "USSR", "Russia"],
    ["Japan", "Germany", "Ukraine", "Hungary", "China", "Vietnam", "North Korea"],
    "recentQuestions"
    );

new Question(
    "During the Cold War, what was the ONE main concern of the United States?", 
    ["Communism", "Nuclear War"],
    ["Human atrocity", "World hunger", "Environmental concerns", "Fascism", "Trade embargos"],
    "recentQuestions"
    );

new Question(
    "Why did the United States enter the Korean War?", 
    ["To stop the spread of communism"],
    ["Response to an attack on America", "Korea's nuclear weapon develpment", "To stop the spead of fascism", "To prevent crimes against the Korean people", "To foster trust among nations"],
    "recentQuestions"
    );

new Question(
    "Why did the United States enter the Vietnam War?", 
    ["To stop the spread of communism"],
    ["Response to an attack on America", "Korea's nuclear weapon develpment", "To stop the spead of fascism", "To prevent crimes against the people of Vietnam", "To foster trust among nations"],
    "recentQuestions"
    );

new Question(
    "What did the civil rights movement do?", 
    ["Fought to end racial discrimination"],
    ["Gave women the right to vote", "Ended World War II", "Ended racism forever", "Ended slavery", "Paved the way for the 15th Amendment"],
    "recentQuestions"
    );

new Question(
    "Which of these is something Martin Luther King, Jr. is famous for?", 
    ["Fought for civil rights", "Worked for the equality of all Americans", "Worked to ensure that people would 'not be judged by the color of their skin, but by the content of their character'"],
    ["Was elected president", "Was a member of the Republican party", "Called for black Americans to protect themselves against white aggression 'by any mean necessary'", "Vocal spokesperson for the Nation of Islam", "Promoted violence to achieve his goals"],
    "recentQuestions"
    );

new Question(
    "Why did the United States enter the Persian Gulf War?", 
    ["To force the Iraqi military from Kuwait"],
    ["To take control of oil fields in the Middle East", "To combat atrocities by Saddam Hussein", "To oppose the spread of communism", "To establish a military presence in the Middle East"],
    "recentQuestions"
    );

new Question(
    "What major event happened on September 11th, 2001 in the United States?", 
    ["Terrorists attacked the United States", "Terrorists took over two planes and crashed them into the World Trade Center in New York City", "Terrorists took over two planes and crashed them into the Pentagon in Arlingron, Virginia", "Terrorists took over a plane originally aimed at Washington, D.C., and crashed in a field in Pennsylvania"],
    ["Barack Obama was elected president", "A suicide bomber killed Ahmed Shah Massoud, military commander of the Afghan Northern Alliance", "The U.S. invaded Afghanistan", "President Bush signed his first of several tax cuts"],
    "recentQuestions"
    );

new Question(
    "Which of these is an American Indian tribe in the United States?", 
    ["Apache", "Blackfeet", "Cayuga", "Cherokee", "Cheyenne", "Chippewa", "Choctaw", "Creek", "Crow", "Hopi", "Huron", "Inupiat", "Lakota", "Mohawk", "Mohegan", "Navajo", "Oneida", "Onondaga", "Pueblo", "Seminole", "Seneca", "Shawnee", "Sioux", "Teton", "Tuscarora"],
    ["Inuit", "Bindaas", "Jugaad", "Ghanta", "Pataka", "Dhinchak", "Tamarack", "Condor", "Sachem", "Mohave", "Terrapin"], 
    "recentQuestions"
    );

new Question(
    "Which of these is an American Innovation?", 
    ["Light Bulb", "Automobile", "Skyscrapers", "Airplane", "Assembly line", "Landing on the Moon", "Integrated Circuit"],
    ["Submarine", "Steam Engine", "Planetarium", "Wall plugs", "Power drill", "Thermos Flask", "Toothpaste", "Leyden Jar", "Telescope", "Microscope", "Pendulum Clock"], 
    "recentQuestions"
    );

new Question(
    "What is the capital of the United States?", 
    ["Washington D.C."],
    ["Philadelphia, PA", "New York, NY", "San Francisco, CA", "Charleston, WV", "Boston, MA", "Baltimore, MD"], 
    "symbolsQuestions"
    );

new Question(
    "Where is the Statue of Liberty", 
    ["New York (Harbor)", "On the Hudson River", "Near New York City"],
    ["Philadelphia, PA", "Brooklyn, NY", "Albany, NY", "Ocean City, NJ", "Boston, MA", "Baltimore, MD"], 
    "symbolsQuestions"
    );

new Question(
    "Why does the flag have 13 stripes?", 
    ["13 original colonies"],
    ["13 authors of the Constitution", "13 steps on the capitol building", "The Revolutionary War lasted 13 years", "There were 13 congressmen in the first Congressional meeting"], 
    "symbolsQuestions"
    );

new Question(
    "Why does the flag have 50 stars?", 
    ["One star for each state"],
    ["The Revolutionary war lasted 50 days", "The White House has 50 windows", "The Revolutionary War lasted 50 years", "There were 50 congressmen in the first Congressional meeting"], 
    "symbolsQuestions"
    );

new Question(
    "What is the name of the National Anthem?", 
    ["The Star Spangled Banner"],
    ["Freedom Isn't Free", "Grand Ol' Flag", "Big Green Tractor", "That Ain't My Truck", "The Stars and Stripes Forever"], 
    "symbolsQuestions"
    );

new Question(
    "The Nation's first motto was 'E Pluribus Unum.' What does that mean?", 
    ["Out of Many, one"],
    ["Plural means numerous", "Live Free or Die", "In God we trust", "Wisdom, Justice, Moderation", "United we Stand, divided we fall"], 
    "symbolsQuestions"
    );

new Question(
    "What is Independance Day?", 
    ["A holiday to celebrate U.S. independance (from Britain)"],
    ["The day aliens attacked Earth", "The day Bill Pullman became president", "A film starring Will Smith"], 
    "symbolsQuestions"
    );

new Question(
    "Which of these is a national U.S. Holiday?", 
    ["New Year's Day", "Martin Luther Kinf, Jr. Day", "Presidents Day (Washington's Birthday)", "Memorial Day", "Independance Day", "Labor Day", "Columbus Day", "Veterans Day", "Thanksgiving Day", "Christmas Day"],
    ["Easter", "Valentine's Day", "Saint Patrick's Day", "Mother's Day", "Halloween", "Father's Day"], 
    "symbolsQuestions"
    );

new Question(
    "What is Memorial Day?", 
    ["A holiday to honor soldiers who died in military service"],
    ["Celebration to commemorate the entry of Jesus into Jerusalem", "Marks the date that the Declaration of Independence was adopted in 1776", "The first day of a new year"], 
    "symbolsQuestions"
    );

new Question(
    "What is Veterans Day?", 
    ["A holiday to honor people who serve or have served in the military"],
    ["Celebration to commemorate the end of World War II", "Marks the date that the Declaration of Independence was adopted in 1776", "The first day of a new year"], 
    "symbolsQuestions"
    );


module.exports = questionObjects;
