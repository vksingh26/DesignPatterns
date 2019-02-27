import { FriendList } from "./friendlist";
import { singletonPattern } from "./singletonPattern";

let friendList = FriendList.instance;

friendList.facebookFriends = 150;
friendList.instaFollowers = 250;
friendList.slackFriends = 20;
friendList.tweeterFollowers = 200;

console.log(`Facebook Friends:  ${friendList.facebookFriends}
Insta Followers: ${friendList.instaFollowers}
Slack Friends: ${friendList.slackFriends}
Tweeter Followers: ${friendList.tweeterFollowers}`);

friendList.facebookFriends++;
friendList.instaFollowers += 2;

singletonPattern();