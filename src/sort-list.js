function sortList(people, sortOptions) {
    const property = sortOptions.property;
    const direction = sortOptions.direction;

    return people.slice().sort((a, b) => {
        if(a[property] > b[property]) {
            return 1 * direction;
        }
        else if(b[property] > a[property]) {
            return -1 * direction;
        }
        return 0;
    });
}

export default sortList;