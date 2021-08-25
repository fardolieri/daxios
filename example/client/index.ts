import { Daxios } from '../../daxios';
// use "import type" to not accidentally
// import server code into the client
import type { MyApp } from '../server/app';

declare const daxios: Daxios<MyApp>;

// Hover over the variables below
// to see their infered type
const x1 = daxios.get('cat/get-cats');
const x2 = daxios.post('cat/sad-cat');
const x3 = daxios.delete('cat/angry');

const x4 = daxios.get('user/clown');
const x5 = daxios.get('user/many-zombies');
const x6 = daxios.post('user/genie');
const x7 = daxios.delete('user/wizard');
