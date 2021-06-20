const API_VERSIONS = {
    v1: 'v1',
    v2: 'v2',
};

const API_VERSIONS_CONTROL = {
    // default
    0: true,
    [API_VERSIONS.v1]: true,
    [API_VERSIONS.v2]: false,
};

module.exports = {
    API_VERSIONS,
    API_VERSIONS_CONTROL,
};
