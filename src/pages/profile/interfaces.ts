export interface IFullUserData{
    id: string,
    name?: string,
    gender?: string,
    birthday?: string,
    location?: string,
    summary?: string,
    gitHub?: string,
    linkedIn?: string,
    twitter?: string,
    [key: string]: string | undefined;
}