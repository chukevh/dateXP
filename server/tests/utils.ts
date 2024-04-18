const parseJson = (obj: {}) => {
    const json = JSON.stringify(obj);
    JSON.parse(json);
};

export default parseJson