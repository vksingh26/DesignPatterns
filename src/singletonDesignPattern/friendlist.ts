export class FriendList {
    facebookFriends: number = 0;
    tweeterFollowers: number = 0;
    instaFollowers: number = 0;
    slackFriends: number = 0;

    constructor() {
        if (FriendList._instance) {
            throw new Error('cannot initialze singleton class using new!')
        }
        FriendList._instance = this;
    }

    public static _instance: FriendList = new FriendList(); //static instance variable of the same class

    public static get instance(): FriendList {
        return FriendList._instance;
    }
}