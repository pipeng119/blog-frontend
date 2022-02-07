export function isEqualJSON(v1: any, v2: any): boolean {
    if (v1 === v2) {
        return true;
    } else if (typeof v1 === 'object' && typeof v2 === 'object') {
        if (v1 instanceof Array && v2 instanceof Array) {
            return v1.length === v2.length && v1.every((e, i) => isEqualJSON(e, v2[i]));
        } else if (!!v1 && !!v2) {
            const v1Keys = Object.keys(v1)
                .filter((key) => v1[key] !== undefined);
            const v2Keys = Object.keys(v2)
                .filter((key) => v2[key] !== undefined);
            return v1Keys.length === v2Keys.length && v1Keys.every((key) => isEqualJSON(v1[key], v2[key]));
        }
    } else {
        return false;
    }
    return false;
}