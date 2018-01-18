// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Input: [1, 2, 4], [1, 3, 4] Output: [1, 1, 2, 3, 4, 4]
var mergeTwoLists = function(l1, l2) {
    let newList = [];
    while (l1.length || l2.length) {
        if (l1.length && !l2.length) {
            newList = [...newList, ...l1];
            return newList;
        } else if (l2.length && !l1.length) {
            newList = [...newList, ...l2];
            return newList;
        } else if (l1[0] < l2[0]) {

            newList.push(l1[0]);
            l1.shift();
        } else {
            newList.push(l2[0]);
            l2.shift();
        }
    }
    console.log(newList)
    return newList;
};
