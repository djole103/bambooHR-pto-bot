# Bamboohr "Who's Out?" Slackbot
![bhr](https://cloud.githubusercontent.com/assets/12915163/17829398/4b948526-667b-11e6-8ba1-b6d429b4db20.jpg)

Slack bot to post in a slack channe every Monday with who is scheduled to be out of the office this week. It will post to the slack channel you specify as default when setting up a custom integration.
The bot looks at the current week (M-F) and sees if any scheduled time off overlaps. The people with time off, and the days they'll be gone, will be posted to Slack.

Uses the BambooHR time off API, botkit, lodash.find, and moment!

## Never bring a lunch to work for a friend who has left town again! lolz

# Setup
1. Requires node 4.x (Tested on 4.8.[4/6]). Confirm path and version.
2. Add environment variables for `SLACK_WEBHOOK`, `BAMBOOHR_TOKEN`, and `BAMBOOHR_SUBDOMAIN`.
3. `npm install`
4. `npm start`
