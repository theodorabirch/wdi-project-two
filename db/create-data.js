
const mongoose = require('mongoose');
const env = require('../config/environment');
mongoose.connect(env.dbUri);

const Post = require('../models/post');

Post.collection.drop();

const postData = [
  {
    title: 'The Battle of Hastings',
    text: 'Following the death of Edward the Confessor (King of Anglo-Saxon England), in January 1066, Harold Godwinson was named king. Edward had been childless and so Harold was chosen to succeed him but it wasn’t a popular decision with everyone. Across the Channel there was one man who felt he had more right to the English throne and so William Duke of Normandy, a distant blood relative of the dead king, gathered his troops and crossed the water to Britain. What ensued on 14 October 1066 was one of the bloodiest battles in British history – famously immortalised on the Bayeaux Tapestry – and saw the death of King Harold and the birth of a new ruling dynasty as the Anglo-Saxons made way for the Normans.',
    author: ['Theodora Birch'],
    shortSummary: 'Following the death of Edward the Confessor (King of Anglo-Saxon England), in January 1066, Harold Godwinson was named king.',
    image: ['https://ichef.bbci.co.uk/news/976/cpsprodpb/169BE/production/_99660629_d1c5f76d-1c25-457b-a59f-82b74f4fe773.jpg']
  },
  {
    title: 'How significant was the Battle of Waterloo',
    text: 'The Battle of Waterloo was fought on 18 June 1815 between Napoleon’s French Army and a coalition led by the Duke of Wellington and Marshal Blücher. The decisive battle of its age, it concluded a war that had raged for 23 years, ended French attempts to dominate Europe, and destroyed Napoleon’s imperial power forever.',
    author: ['Theodora Birch'],
    shortSummary: 'The Battle of Waterloo was fought on 18 June 1815 between Napoleon’s French Army and a coalition led by the Duke of Wellington and Marshal Blücher.',
    image: ['https://secure.i.telegraph.co.uk/multimedia/archive/03218/NUL-116877_3218528b.jpg']
  },
  {
    title: 'The Charge of the Light Brigade',
    text: 'The Charge of the Light Brigade was a disastrous British cavalry charge against heavily defended Russian troops at the Battle of Balaklava (1854) during the Crimean War (1853-56). The suicidal attack was made famous by Alfred, Lord Tennyson in his 1855 poem of the same name. Military historians and strategists continue to study the attack to underscore the importance of military intelligence and a clear chain of command and communication.',
    author: ['Theodora Birch'],
    shortSummary: 'The Charge of the Light Brigade was a disastrous British cavalry charge against heavily defended Russian troops at the Battle of Balaklava (1854) during the Crimean War (1853-56).',
    image: ['https://todayinhistorydotblog.files.wordpress.com/2017/10/chargeofthelightbrigade.jpg?w=1200']
  },
  {
    title: 'The Hundred Days Offensive – Whose Victory?',
    text: ' A century ago, between 8 August and 11 November 1918, after four years of trench stalemate, the Allied armies on the Western Front went onto the offensive, broke through the enemy line, and maintained their advance for three months until the German Army had been brought to final defeat. How was it done? Debate has raged ever since about the combination of factors that delivered Allied victory in the autumn of 1918. Al McCluskey argues that the Hundred Days was an operational masterpiece, largely attributable to Douglas Haig, one deliberately designed to draw down the all-important German reserves until none were available to block a new BEF thrust, in the Bellenglise sector, in late September 1918. The popular image of the First World War remains that of an unimaginative and incompetent military command, incapable of meeting the demands placed on on it by modern industrialised warfare. The autumn 1918 battles of the Hindenburg Line suggest an alternative view. Far from being an unimaginative application of attrition, these massive engagements highlight the increasingly effective employment of operational art by the Allied high command. An innovative campaign design had effectively neutralised the German Army’s operational reserves. In particular, during the critical period between 26-29 September, the German reserves were either isolated from the battle east of the River Meuse, or sucked into the major attacks in Flanders, Cambrai, Champagne, and the Argonne. As a consequence, there were few available to strike back at Bellenglise, leaving the 46th Division free to punch through the beleaguered defences.',
    author: ['Theodora Birch'],
    shortSummary: 'A century ago, between 8 August and 11 November 1918, after four years of trench stalemate, the Allied armies on the Western Front went onto the offensive.',
    image: ['https://i2.wp.com/www.military-history.org/wp-content/uploads/2018/10/German-prisoners-100-Days.jpg?w=1000&ssl=1']
  },
  {
    title: 'Why Alexander the Great is not history\'s greatest leader',
    text: 'Was Alexander of Macedon the greatest commander of all time? His uncle, Alexander of Epirus, certainly didn’t think so. When news of Alexander’s victories in Persia were brought to him, whilst he was campaigning in Italy, he remarked contemptuously ‘tell Alexander, whilst he fights women, I fight men!’. Shortly afterwards, in 331 BC, as if to reiterate the point, Alexander of Epirus was cut down and killed at Pandosia in Lucania.',
    author: ['Sophia Barclay', 'Femi Coker'],
    shortSummary: 'Former infantry officers and military historians Sophia Barclay and Femi Coker begs to differ with the result of the poll published in last month’s Pieces of History article.',
    image: ['https://i2.wp.com/www.military-history.org/wp-content/uploads/2011/01/BattleofIssus333BC-mosaic-detail1.jpg?zoom=2&resize=334%2C277']
  },
  {
    title: 'AD 937: Olaf’s Approach',
    text: 'Battle for Britain: the ferocious battle in the far north against 10th-century Viking invaders.  Olaf Guthfrithsson, King of Dublin, is reputed to have invaded Athelstan’s kingdom with a fleet of 600 ships in AD 937.  The subsequent confrontation between his confederate army of Welsh, Scots, and Norsemen and Athelstan’s Anglo-Saxon host was one of the biggest in Dark Age history.The map above shows the possible routes taken by this dangerous invader.',
    author: ['Rafa Ruiz'],
    shortSummary: 'Battle for Britain: the ferocious battle in the far north against 10th-century Viking invaders.',
    image: ['https://i1.wp.com/www.military-history.org/wp-content/uploads/2012/07/battlemap.jpg?w=1000&ssl=1']
  },
  {
    title: 'Pigeons at Passchendaele',
    text: 'For Major Alec Waley, the commanding officer of the British Expeditionary Force’s Carrier Pigeon Service, 31 July 1917 was a peculiarly tense day, but ultimately a very satisfying one. It was the first day of the Third Battle of Ypres – or ‘Passchendaele’, as it is more often remembered. The conduct of this offensive was facilitated by the most destructive technologies yet devised: modern artillery, machine-guns, tanks, aircraft, flamethrowers, and poison gas. Total casualties, Allied and German, were probably in excess of 500,000. What place, in the midst of industrialised slaughter on this scale, could there be for Waley’s fragile little birds, carried ‘up the line’ in their delicate wicker baskets? By the evening of the first day, Waley had an answer: visiting the BEF’s II Corps, he was told that ‘75% of the news which had come in from the front-line had been received by pigeon’.',
    author: ['Lucia Bianciotto'],
    shortSummary: 'For Major Alec Waley, the commanding officer of the British Expeditionary Force’s Carrier Pigeon Service, 31 July 1917 was a peculiarly tense day, but ultimately a very satisfying one.',
    image: ['https://i1.wp.com/www.military-history.org/wp-content/uploads/2018/01/Pigeons-in-Tanks-Corps-service.jpg?w=763&ssl=1']
  },
  {
    title: 'Afghanistan: graveyard of armies',
    text: 'Taken in historical context, the 13-year presence of NATO combat troops in Afghanistan amounted to scarcely a footnote to centuries of foreign military intervention in the country. From the Achaemenid imperial army in the 6th century BC to the combined might of 48 International Security Assistance Force (ISAF) nations that deployed in 2003, Afghanistan has endured more than two millennia of invasions of its territory. There is a common misconception that runs like this: Afghanistan is a country that cannot be conquered, and every foreign power that has attempted to hold it has come to grief. The first assertion is false, the second is true.',
    author: ['David Comer'],
    shortSummary: 'A huge, mountainous, landlocked Central Asian state, Afghanistan has defied invaders for 2,500 years. David Comer takes a look at the country’s military longue durée.',
    image: ['https://i1.wp.com/www.military-history.org/wp-content/uploads/2018/04/0A-Lead-Option-2.jpg?w=700&ssl=1']
  },
  {
    title: '5 Myths about the Wars of the Roses',
    text: 'In a sense, the Wars of the Roses began with the usurpation of the throne by Henry Bolingbroke in 1399. Lancastrian legitimacy was always actively contested, except perhaps for a brief period during the reign of Henry V (1413-1422).',
    author: ['Sham'],
    shortSummary: 'We examine 5 myths surrounding the Wars of the Roses.',
    image: ['https://i1.wp.com/www.military-history.org/wp-content/uploads/2014/10/WoR_UsurpationHenryBolingbroke_1399.jpg']
  }
];


Post.create(postData)
  .then(result => {
    console.log(`Created ${result.length} blogs!`);
    mongoose.connection.close();
  });
