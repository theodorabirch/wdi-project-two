
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
    text: ' A century ago, between 8 August and 11 November 1918, after four years of trench stalemate, the Allied armies on the Western Front went onto the offensive, broke through the enemy line, and maintained their advance for three months until the German Army had been brought to final defeat. How was it done? Debate has raged ever since about the combination of factors that delivered Allied victory in the autumn of 1918. Al McCluskey argues that the Hundred Days was an operational masterpiece, largely attributable to Douglas Haig, one deliberately designed to draw down the all-important German reserves until none were available to block a new BEF thrust, in the Bellenglise sector, in late September 1918. The popular image of the First World War remains that of an unimaginative and incompetent military command, incapable of meeting the demands placed on on it by modern industrialised warfare. The autumn 1918 battles of the Hindenburg Line suggest an alternative view. Far from being an unimaginative application of attrition, these massive engagements highlight the increasingly effective employment of operational art by the Allied high command. An innovative campaign design had effectively neutralised the German Army’s operational reserves. In particular, during the critical period between 26-29 September, the German reserves were either isolated from the battle east of the River Meuse, or sucked into the major attacks in Flanders, Cambrai, Champagne, and the Argonne. As a consequence, there were few available to strike back at Bellenglise, leaving the 46th Division free to punch through the beleaguered defences. Although there was no equivalent to the modern conceptual understanding of the operational level of war in 1918, the problem that had faced senior commanders was operational in nature nonetheless: in short, how could successful tactical actions be aggregated into a decisive, war-winning campaign?Haig and GHQ played a key role in solving this problem. Pre-war doctrine gave little direction beyond the tactical level. Nevertheless, it was from these principles that Haig had been able to develop his conceptualisation of the phases that a full-scale offensive would have to follow: the reconnaissance; the meeting engagement; the wearing-out fight; and the pursuit. Despite Haig’s over-optimistic assessments in 1916 and 1917, the huge PoW hauls from the stunning success at the Second Marne on 18 July and at Amiens on 8 August 1918 implied that this time the course of events really had changed and that the transition to the pursuit was beginning. What is certainly true is that historical causation in relation to a sequence of events as complex and multifaceted as the Hundred Days Offensive cannot be reduced to one or two factors. The challenge is to judge the respective importance of multiple factors. Had the Allied armies’ learning curves been sharper than that of their German enemies through the long years of war, so the military gap in terms of battlefield proficiency was narrower by late 1918? Or did the Allies’ growing preponderance of materiel, not least in tanks and aircraft, and, of course, in manpower, make the difference? Was it really a matter of mass rather than technique? What of the wider military context? The Allied blockade meant that Germany was starving by the last year of the war. If 1.5 million German soldiers were killed in the fighting during the First World War, an estimated 750,000 German civilians died of hunger on the home front.German soldiers on the Western Front sensed they were losing the war after the supreme effort of the Ludendorff Offensive in the spring of 1918 had failed to break the Allied line. They knew their womenfolk back home were wasting away on a diet of turnip soup. And, increasingly, they were infected by the radical mood inspired by the Russian Revolution.Had the German Army already lost much of its fighting spirit by August 1918? Was the outcome of the Hundred Days really a matter of morale? Join the debate alongside our experts. The letters page is open.',
    author: ['Theodora Birch'],
    shortSummary: 'A century ago, between 8 August and 11 November 1918, after four years of trench stalemate, the Allied armies on the Western Front went onto the offensive, broke through the enemy line, and maintained their advance for three months until the German Army had been brought to final defeat.',
    image: ['https://i2.wp.com/www.military-history.org/wp-content/uploads/2018/10/German-prisoners-100-Days.jpg?w=1000&ssl=1']
  }
];


Post.create(postData)
  .then(result => {
    console.log(`Created ${result.length} blogs!`);
    mongoose.connection.close();
  });
