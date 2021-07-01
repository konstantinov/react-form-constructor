import { findIndex, isArray } from 'lodash/fp';

export const findPath = (value, content, path = '') => {
    if (content[0] && isArray(content[0])) {
        for (const i in content) {
            for (const j in content) {
                const colResult = findPath(value, content[i][j], path + i + '.' + j + '.');
                if (colResult) {
                    return colResult;
                }
            }
        }
    }
    const result = findIndex((item) => item === value, content);

    if (result >= 0) {
        return path + result;
    }

    for (const i in content)
        if (content[i].content) {
            const deepResult = findPath(value, content[i].content, path + i + '.content.');
            if (deepResult) {
                return deepResult;
            }
        }
};

export const insertItem = (content, item, index, replace = false) => [
    ...content.slice(0, index),
    { ...item },
    ...content.slice(replace ? index + 1 : index)
];