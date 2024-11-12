export interface LoginDTO {
    username: string;
    password: string;
}

export interface registerDTO extends LoginDTO {
    isAdmin: boolean
}

export interface ProfileDto {
    id:string
}
