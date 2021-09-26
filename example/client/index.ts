import { Daxios } from '../../daxios';
// use "import type" to not accidentally
// import server code into the client
import type { MyApp } from '../server/app';

declare const daxios: Daxios<MyApp>;

// Hover over the variables below
// to see their infered type
const cat1 = daxios.get('cat/black-cat'); // "🐈‍⬛"
const cat2 = daxios.post('cat/sad-cat'); // "😿"
const cat3 = daxios.delete('cat/angry'); // "😾"
const cat4 = daxios.delete('cat'); // void

const user0 = daxios.get('user'); // ["🤡", "🧟", "🧟‍♂️", "🧞‍♂️", "🧙‍♂️"]
const user1 = daxios.get('user/clown'); // "🤡"
const user2 = daxios.get('user/many-zombies'); // ["🧟", "🧟‍♂️"]
const user3 = daxios.post('user/genie'); // "🧞‍♂️"
const user4 = daxios.delete('user/wizard'); // "🧙‍♂️"
