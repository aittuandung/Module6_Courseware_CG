export class JwtResponse {
    public token: string;
    public name: string;
    public phoneNumber: string;
    public avatar: string;
    public roles: any[];
    constructor(token: string, name: string, phoneNumber: string, avatar: string, roles: any) {
        this.token = token;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.avatar = avatar;
        this.roles = roles;
    }
}
