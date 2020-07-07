Big Blue Button module
======================

BigBlueButton is an open source high-quality web conferencing, online learning
system. https://bigbluebutton.org/ This module implements the BigBlueButton
API, allows moderators to create new meetings and users to join meetings based
on the role they have.
"Big Blue Button Views" is a submodule, provides integration and default views.



Requirement
-----------
BigBlueButton Server: https://docs.bigbluebutton.org/



Installation and setup
----------------------

1. Install this module using the official Backdrop CMS instructions at
   https://backdropcms.org/guide/modules
2. Configure BBB Settings at admin/config/media/bigbluebutton:
   - Administration > Configuration > Media > Big Blue Button meetings
   - Adding the Base URL and the Security Salt value. You can get these values
     using the command `bbb-conf --salt` on your BigBlueButton server.
     The salt is tagged by 'Secret'. For example:
     - `URL: http://192.168.1.7/bigbluebutton`
     - `Secret: 6bbdc14d32df911075a5f3176adc1a0f`
3. Create a new content type at admin/structure/types/add:
   - Administration > Structure > Content types > Add content type
   - Set the options under "Big Blue Button settings".
   - Enable the "Treat this node type as a meeting" option.
4. Create a content of your new type. Set the options under "Meeting settings".
5. Set the user permissions at admin/config/people/permissions.
   - Administration > Configuration > User accounts > Permissions
   - The module provides some permissions:
       - Administer BigBlueButton: Allow administration of BigBlueButton
       - Moderate meetings: Allow moderation of meetings
       - Moderate own meetings: Allow moderation of own meetings
       - Attend meetings: Allow following meetings as an attendee
       - Record meetings: Allow the user to record meetings.
6. Open the content and use the "Attend meeting" or the "Moderate meeting" links.
7. You can add a preconfigured block to the content with meeting details:
   - Administration > Structure > Layouts > Default Layout > Manage blocks > 
     Sidebar > Add block > BBB Meeting details
   - Press the "Add block" and the "Save layout" buttons.
   - Open the content and use the "Attend meeting" or the "Moderate meeting"
     or the "Terminate meeting" links.



Big Blue Button Views module
----------------------------

It is a submodule, provides integration and default views.

The module adds new fields to those available by views:
- Big Blue Button: Attendee password - The password needed to join a meeting.
- Big Blue Button: Created: The creation timestamp.
- Big Blue Button: Dial number: The number to dial to join the meeting by phone.
- Big Blue Button: Join: Provide a simple link to join as attendee.
- Big Blue Button: Join moderator: Provide a simple link to join as moderator.
- Big Blue Button: Logout URL - The URL the user gets redirected to when leaving the meeting.
- Big Blue Button: Meeting ID - The unique meeting ID.
- Big Blue Button: Meeting Token - The unique meeting token.
- Big Blue Button: Moderator password - The password needed to moderate a meeting.
- Big Blue Button: Username - The username displayed in the meeting.
- Big Blue Button: Welcome message - The message displayed when joining a meeting.
- Big Blue Button Stats: Joined - The timestamp a user joined the meeting.
- Big Blue Button Stats: Role - The user's role in the meeting.

The module adds new filter/sort criteria to those available by views:
- Big Blue Button: Created: The creation timestamp.
- Big Blue Button: Meeting ID - The unique meeting ID.
- Big Blue Button: Meeting Token - The unique meeting token.
- Big Blue Button: Username - The username displayed in the meeting.
- Big Blue Button Stats: Joined - The timestamp a user joined the meeting.
- Big Blue Button Stats: Role - The user's role in the meeting.



Local BigBlueButton test server
-------------------------------

You can test the BBB module with a local BigBlueButton test server:
1. Install Docker: https://www.docker.com/
2. Use these commands:
   - `docker pull bigbluebutton/bigbluebutton`
   - `docker run --rm -p 80:80/tcp -p 1935:1935 -p 3478:3478 -p 3478:3478/udp bigbluebutton/bigbluebutton -h <HOST_IP>`
     Make sure you provide the host IP of the server on which you run the docker command.
     e.g. `docker run --rm -p 80:80/tcp -p 1935:1935 -p 3478:3478 -p 3478:3478/udp bigbluebutton/bigbluebutton -h 192.168.1.7`
3. Test BigBlueButton server without Backdrop: Once running, you can navigate to
   `http://<HOST_IP>` to access your BigBlueButton server. e.g. http://192.168.1.7
4. Configure BBB Settings at admin/config/media/bigbluebutton:
   - Administration > Configuration > Media > Big Blue Button meetings
   - Base URL: `http://<HOST_IP>/bigbluebutton`
   - Security Salt: Copy the salt string from docker terminal log. Search the
     line of `SECRET=<salt>`
     e.g. `SECRET=6bbdc14d32df911075a5f3176adc1a0f`
   - Select the "Open in a new window" option.
   - Press the "Save configuration" button.
   - Press the "Test Connection With Saved Configuration" button.
5. Create a new content type at admin/structure/types/add:
   - Administration > Structure > Content types > Add content type
   - Name: Conferences
   - Set the options under "Big Blue Button settings":
     - Enable the "Treat this node type as a meeting" option.
   - Press the "Save content type" button.
6. Create a node of your new type:
   - node/add/conferences
   - Title: Conference
   - Press the "Save" button.
7. Open the content:
   - conferences/conference
   - Use the "Attend meeting" or the "Moderate meeting" links.

Source: https://github.com/bigbluebutton/docker/



Issues
------

Bugs and Feature requests should be reported in the Issue Queue:
https://github.com/backdrop-contrib/bbb/issues



Current Maintainers
-------------------

- Attila Vasas (https://github.com/vasasa).



Credits
-------

- Ported to Backdrop CMS by Attila Vasas (https://github.com/vasasa).
- Originally written for Drupal by Stefan Auditor (https://www.drupal.org/u/sanduhrs).



License
-------

This project is GPL v2 software. See the LICENSE.txt file in this directory for
complete text.



Screenshots
-----------

![Big Blue Button module screenshot 1](https://github.com/backdrop-contrib/bbb/blob/1.x-1.x/images/screenshot1.png)

![Big Blue Button module screenshot 2](https://github.com/backdrop-contrib/bbb/blob/1.x-1.x/images/screenshot2.png)
