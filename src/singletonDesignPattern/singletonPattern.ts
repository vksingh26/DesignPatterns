import { FriendList } from "./friendlist";

export function singletonPattern() {
    let singletonPattern = FriendList.instance;

    console.log(`Facebook Friends : ${singletonPattern.facebookFriends}
    Insta Followers: ${singletonPattern.instaFollowers}`)
}