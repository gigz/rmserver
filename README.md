# Server to send commands to RM Mini 3

Node server to send commands to RM Mini 3

learn:
http://<server_ip>:<server_port>/ircommand?ip=<rm_ip>&mac=<rm_mac>&action=learnfile&command=<cmd_name>

send:
http://<server_ip>:<server_port>/ircommand?ip=<rm_ip>&mac=<rm_mac>&action=send&command=<cmd_name>

Inspired by Adam Clark - https://community.smartthings.com/t/lightwave-rf-integration-uk/23875/447
