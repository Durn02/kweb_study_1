CREATE DATABASE messenger;
USE messenger;

CREATE TABLE `users` (
    `id`            INT             NOT NULL AUTO_INCREMENT primary key,
    `USR_ID`        VARCHAR(20)     NOT NULL,
    `USR_PW`        VARCHAR(20)     NOT NULL,
    `USR_NAME`      VARCHAR(15)     NOT NULL,
    `PROFILE_LINK`  VARCHAR(150)    NOT NULL,
    `PROFILE_MSG`   VARCHAR(20)     NOT NULL,
    `WITHDRAW`      TINYINT(1)      DEFAULT 0   NOT NULL,
    `JOIN_DATE`     DATE            NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `channels` (
    `id`            INT             NOT NULL AUTO_INCREMENT primary key,
    `NAME`          VARCHAR(20)     NOT NULL,
    `USER`          INT             NOT NULL,
    `LINK`          VARCHAR(150)    NOT NULL,
    `CAPACITY`      BIGINT          NOT NULL,
    `WITHDRAW`      TINYINT(1)      DEFAULT 0   NOT NULL,
    `CREATE_DATE`   DATE            NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `chats` (
    `id`            INT             NOT NULL AUTO_INCREMENT primary key,
    `CONTENTS`      VARCHAR(500)    NOT NULL,
    `USER`          INT             NOT NULL,
    `CHANNEL`       INT             NOT NULL,
    `CREATE_DATE`   DATE            NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `follows` (
    `id`            INT     NOT NULL AUTO_INCREMENT primary key,
    `FOLLOWER`      INT     NOT NULL,
    `FOLLOWEE`      INT     NOT NULL,
    `FOLLOW_DATE`   DATE    NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `blocks` (
    `id`            INT     NOT NULL AUTO_INCREMENT primary key,
    `BLOCKER`       INT     NOT NULL,
    `BLOCKEE`       INT     NOT NULL,
    `BLOCK_DATE`    DATE    NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;






-- source C:\0.programming\kweb_study\HW\Chapter4\Exercise2\messenger.sql
-- DROP DATABASE messenger;
-- DROP TABLE students;