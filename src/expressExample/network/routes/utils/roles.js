const ROLES = {
    1: {
        id: 'admin',
        description: 'system admin'
    },
    2: {
        id: 'user',
        description: 'user who can sell and buy articles'
    }
}

const ROLE_NAMES = Object.entries(ROLES).map(role => role[1].name)

module.exports = {
    ROLES,
    ROLE_NAMES
}
