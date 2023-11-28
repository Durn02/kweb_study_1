/*====| structure |=====
학생 이름   : STU_NAME      / VARCHAR(20)
학번        : STU_ID        / INT(15)
입학년도    : ENTER_Y       / INT(4)
전공        : MAJOR         / VARCHAR(15)
전화번호    : TEL           / VARCHAR(13)
주소        : ADDR          / VARCHAR(60)
누적이수학점: CURR_CREDIT   / INT
평균 평점   : GPA           / INT
재학여부    : ATTENDING     / TINYINT(1)

개별번호    : STU_NUM       / INT(5)
======================*/

CREATE DATABASE exercise1;
USE exercise1;

CREATE TABLE `students` (
    `id`            INT         NOT NULL AUTO_INCREMENT primary key,
    `STU_NAME`      VARCHAR(20) NOT NULL,
    `STU_ID`        INT         NOT NULL,
    `TEL`           VARCHAR(13) NOT NULL,
    `ADDR`          VARCHAR(60) NOT NULL,
    `CURR_CREDIT`   INT(4)      DEFAULT 0 NOT NULL,
    `GPA`           FLOAT       DEFAULT 0.0 NOT NULL,
    `is_ATTENDING`  TINYINT(1)  DEFAULT 1 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `STU_ID` (
    `id`            INT         NOT NULL AUTO_INCREMENT primary key,
    `ENTER_Y`       INT(4)      NOT NULL,
    `MAJOR`         VARCHAR(15) NOT NULL,
    `SUT_NUM`       INT(5)      DEFAULT 0 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

