import { lists } from '../objects/objectsList.js'


export let categories = lists.map(list => {
    if (list.category == 1) {
        return 1;
    }
    if (list.category == 2) {
        return 2;
    }
    return 3;
})
