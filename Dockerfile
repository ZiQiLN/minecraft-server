FROM openjdk:8

LABEL MAINTAINER = "Jakub Olan <jakub.olan001@gmail.com>"

ENV FORGE_VERSION 1.12.2-14.23.5.2847
ENV MINECRAFT_VERSION 1.12.2

RUN mkdir /mc

WORKDIR /mc

VOLUME [ "/world", "/mods" ]

ADD https://files.minecraftforge.net/maven/net/minecraftforge/forge/1.12.2-14.23.5.2847/forge-1.12.2-14.23.5.2847-installer.jar \
    config/server.properties ./

RUN chmod 700 forge-1.12.2-14.23.5.2847-installer.jar

RUN java -jar forge-1.12.2-14.23.5.2847-installer.jar --installServer

RUN echo "eula=true" > eula.txt

RUN mkdir mods

RUN chmod 700 forge-1.12.2-14.23.5.2847-universal.jar

EXPOSE 25565

CMD java \ 
    -Xmx2048M \ 
    -Xmx2048M \ 
    -XX:+UseG1GC \
    -XX:+UnlockExperimentalVMOptions \ 
    -XX:MaxGCPauseMillis=100 \ 
    -XX:+DisableExplicitGC \ 
    -XX:TargetSurvivorRatio=90 \ 
    -XX:G1NewSizePercent=50 \ 
    -XX:G1MaxNewSizePercent=80 \ 
    -XX:G1MixedGCLiveThresholdPercent=35 \ 
    -XX:+AlwaysPreTouch \ 
    -XX:+ParallelRefProcEnabled \ 
    -jar forge-1.12.2-14.23.5.2847-universal.jar