const mongoose = require('mongoose');
const environment = require('./config/environment');
mongoose.connect(environment.dbUri);

const Entry = require('../models/blogentry');

Entry.collection.drop();

const blogData = [
  {
    title: 'The Battle of Hastings',
    text: 'Following the death of Edward the Confessor (King of Anglo-Saxon England), in January 1066, Harold Godwinson was named king. Edward had been childless and so Harold was chosen to succeed him but it wasn’t a popular decision with everyone. Across the Channel there was one man who felt he had more right to the English throne and so William Duke of Normandy, a distant blood relative of the dead king, gathered his troops and crossed the water to Britain. What ensued on 14 October 1066 was one of the bloodiest battles in British history – famously immortalised on the Bayeaux Tapestry – and saw the death of King Harold and the birth of a new ruling dynasty as the Anglo-Saxons made way for the Normans.',
    author: ['Theodora Birch'],
    image: ['https://ichef.bbci.co.uk/news/976/cpsprodpb/169BE/production/_99660629_d1c5f76d-1c25-457b-a59f-82b74f4fe773.jpg']
  },
  {
    title: 'How significant was the Battle of Waterloo',
    text: 'The Battle of Waterloo was fought on 18 June 1815 between Napoleon’s French Army and a coalition led by the Duke of Wellington and Marshal Blücher. The decisive battle of its age, it concluded a war that had raged for 23 years, ended French attempts to dominate Europe, and destroyed Napoleon’s imperial power forever.',
    author: ['Theodora Birch'],
    image: ['https://secure.i.telegraph.co.uk/multimedia/archive/03218/NUL-116877_3218528b.jpg']
  },
  {
    title: 'The Charge of the Light Brigade',
    text: 'The Charge of the Light Brigade was a disastrous British cavalry charge against heavily defended Russian troops at the Battle of Balaklava (1854) during the Crimean War (1853-56). The suicidal attack was made famous by Alfred, Lord Tennyson in his 1855 poem of the same name. Military historians and strategists continue to study the attack to underscore the importance of military intelligence and a clear chain of command and communication.',
    author: ['Theodora Birch'],
    image: ['https://todayinhistorydotblog.files.wordpress.com/2017/10/chargeofthelightbrigade.jpg?w=1200']
  }
];


Entry.create(blogData)
  .then(result => {
    console.log(`Created ${result.length} cocktails!`);
    mongoose.connection.close();
  });
