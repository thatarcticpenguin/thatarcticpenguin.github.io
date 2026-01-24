---
title: I built a tiny HTTP server from scratch
date: "null"
tags:
---
Well i dont care to explain much about the title, pretty self-explanatory, aint it?

So no Flash, Django, FastAPI, just Python.

So before we get our hands dirty by coding this, let me tell you a bit of what i got to know, after all, before learning to make something, you need to understand what you're making.

## TCP/IP

Lets start by discussing wtf is a Transfer Control Protocol (TCP), you see, when the presidents of two countries meet, there is a formality on what they should do, and what not to do, you need to decide a place, send your security, council members, important head officials, etc. to that location, meet, have an interpreter to translate your conversations, and all in all, have proper communication and decorum so both countries maintain their prestige.

The same thing happens when you use TCP, two devices following a set of rules to connect and acknowledge each other. We'll talk more about this later. For now, just know this exists.

## Sockets

Wait a min, why're we learning abt plugs and sockets? Not that socket you donut. The socket we use in networking. Think of a socket as a door, it basically enables two-way communication and provides an interface between two devices on some protocol to communicate.

So, connection time.

Well, in making a connection, we have two types of sockets, stream sockets, and datagram sockets.

### Stream sockets

- They are basically extremely reliable, pretty much error-free socket connection that rely on the TCP/IP suite, TCP or Transmission Control Protocol is a protocol that ensures data is transferred sequentially and IP ensures proper routing.
- Applications such as Telnet and SSH use stream sockets. HTTP too, is based on this.

### Datagram sockets

- Also called connection-less sockets.
- Less reliable. Why, you ask? Coz they dont rely on TCP, rather they rely on User Datagram Protocol, or UDP, so packets may or may not arrive, if they arrive, they might not arrive sequentially, BUT, if a packet arrives, the data within it is error-free.
- Provides absolute holy speed. 

in extremely simple words, UDP does'nt care. So why use it? Imagine you are playing a game, maybe CS:GO, now how CS:GO works is that it tracks the player movements on your phone, which is then sent to a main server handling your game, this information (remember, the server doesn't render any graphical stuff, it just sends and recieves the coordinates, HP, and any other texty stuff) to other match players, which is then rendered by the device onto their screens as your position. Now, this needs speed, and the protocol used here is UDP, noone really cares if you lose like two packets describing your position when you send/recieve almost 40 packets a second, do they? That's the advantage of UDP.

So, simply put, UDP for speed, TCP for reliability (chat messages and stuff)

Now lets talk about data encapsulation.

- In simple terms, our data is made as packet, encapsulated first by a protocol, then the next transmission protocol, then the internet protocol, and finally the device layer/physical/hardware protocol.

i.e, TFTP --> UDP --> IP --> Ethernet/Physical

and when it arrives at the location, the layers are stripped by the hardware, kernel, kernel again, and the TFTP layer respectively. That's the shit your computer does everytime you reload a webpage and stuff

Now, we finna talk about OSI, OPEN SYSTEM INFRASTRUCTURE, ngl ever since I learnt this topic, i never fully understood it, so lemme see if i do now:

am just gonna briefly explain stuff here coz am lazy, and that too, on the 4-layer architecture, if you want the entire APSTNDP architecture, go google it.

### Application layer

Say, you're on your average food delivery app (lets call it omato), you have a big menu, and you click that big ass "buy" button and buy a pizza, now, the network communicates with the web server of Omato that +1 pizza has been added, but that data cannot just magically land on that server, it needs to be packaged, encrypted and then be sent to the current place without data loss, which is where the other layers come in.

## Transport layer

Now, lets take your +1 pizza that you ordered, your phone will then check what your address is, what is the nearest server, and then breaks down the data to be sent into small blocks (packets) which are sent over the network.

### Network layer

Wait, but how does my router know which server to send to? Should'nt there be an ID of sorts so we know where the data needs to go? That's where the IP Address comes in, think of it as an address to where the server is located. Once it knows that, the transport layer can send the packets to this IP Address.

### Netowork Access Layer

Think of this as the fiber-optic cable, wifi, or ethernet, stuff between your router and the server that handle the actual movement of the bits, it does'nt care what's inside the cable, it just transports.

BOOOOOOOOOORIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIINNNNNNNNNNNNNNNNG!

Let's just move tf on from this, but yea, allat just to move a packet...

Lets talk about IP addresses now.

We got IPv4 and IPv6, i bet atleast half of the B.Tech people know this term. If you don't, catch up.
Well IP basically contains 4 octets, so xxx.xxx.xxx.xxx kind of format. Say 192.1.0.1

Penguin, you clown, that's IPv4, I KNOW.
IPv6 has the format of ab00.ab00.ab00.ab00.ab00.ab00.ab00.ab00

Yea.... But why?

Because, believe it or not, we ran out of IPv4 addresses to give out, all possible combinations of them. So, we moved on to IPv6 with a hexadecimal system so we never can (Almost million billion trillion combos).