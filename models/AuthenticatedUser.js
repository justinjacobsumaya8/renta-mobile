class AuthenticatedUser {
    static format = (object = {}) => {
        return {
            id: object.id ? parseInt(object.id) : "",
            name: object.name ?? "",
            email: object.email ?? "",
        };
    };
}

export default AuthenticatedUser;
