# Kubick (form. Mystic Alchemists)

![CurseForge](https://cf.way2muchnoise.eu/431680.svg) ![CurseForge Versions](https://cf.way2muchnoise.eu/versions/431680.svg)

The Mystic Alchemist's Modpack is innovative Minecraft Forge modpack related to building technical world with a bit of adventure.

> Server currently is moved out from our k8s cluster because of issues with importing configuration, as a solution we've build a bare-metal server based on Docker, we aren't sure about final decision about production.

## Features

- Stunning new biomes by [Biomes'O'Plenty](https://www.curseforge.com/minecraft/mc-mods/biomes-o-plenty)
- New [Chisel]()-based blocks and furnitures ([Bibliocraft]()) to make your buildings awesome.
- New structures and dungeons to discover, powered by [Rougelike Dungeons]() and [Reccurrent Complex]()
- Interesting underground life with upgraded caves, dungeons and mining mechanics.
- Unique tool crafting experience with [Thinker's Construct]() and [Tetra]()

## Usage

Complete guide for installing client-side mods with [CurseForge]() and building server based on [Docker]() or if somebody prefers production-like environment [Kubernetes]() with [Skaffold]().

```
$ git clone https://github.com/ZiQiLN/mystic-alchemists.git
$ cd mystic-alchemists
$ cd docker-compose up -f "docker-compose.lite.yaml"
```

## Recommendations

- **Minium allocated RAM**: 6GB
- **Recommended allocated RAM**: 8GB
- [**Optifine**](OPTIFINE.md): Partial Support for OptiFine HD U F5 (not included

## Credits

Modpack was build by [@ziqiln](https://github.com/ziqiln) with usage of code published in other repositories (for building Docker-backed Server) like [itzg/minecraft-server](https://github.com/itzg/docker-minecraft-server).
