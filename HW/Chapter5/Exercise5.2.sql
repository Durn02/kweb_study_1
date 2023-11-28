-- 1
SELECT `users`.`id`, `users`.`name`, `tickets`.`seat_number`
    FROM `tickets`
        INNER JOIN `users` ON `tickets`.`user`=`users`.`id`
    WHERE `tickets`.`train`=11
    ORDER BY `tickets`.`seat_number` ASC;

-- 2
SELECT 
    -- columns
    `users`.`id`,
    `users`.`name`,
    Count(*) AS `trains_count`,
    Sum(Round(`trains`.`distance`/10, 4)) AS `total_distance`

    FROM `tickets`
        INNER JOIN `users` ON `tickets`.`user` = `users`.`id`
        INNER JOIN `trains` ON `tickets`.`train` = `trains`.`id`
    GROUP BY `users`.`id`
    ORDER BY `total_distance` DESC Limit 6;

-- 3
SELECT
    `trains`.`id`,
    `types`.`name` AS `type`,
    `s1`.`name` AS `src_stn`,
    `s2`.`name` AS `dst_stn`,
    TIMEDIFF(`trains`.`arrival`, `trains`.`departure`) AS `travel_time`

    FROM `trains`
    INNER JOIN `types` ON `trains`.`type` = `types`.`id`
    INNER JOIN `stations` `s1` ON `trains`.`source` = `s1`.`id`
    INNER JOIN `stations` `s2` ON `trains`.`destination` = `s2`.`id`
    ORDER BY `travel_time` DESC LIMIT 6;

-- 4
SELECT
    `types`.`name` AS `type`,
    `src`.`name` AS `src_stn`,
    `dst`.`name` AS `dst_stn`,
    `trains`.`departure`,
    `trains`.`arrival`,
    ROUND((`types`.`fare_rate` * `trains`.`distance` / 1000), -2) AS `fare`
FROM `trains`
    INNER JOIN `types` ON `trains`.`type` = `types`.`id`
    INNER JOIN `stations` `src` ON `trains`.`source` = `src`.`id`
    INNER JOIN `stations` `dst` ON `trains`.`destination` = `dst`.`id`
    ORDER BY `trains`.`departure`;

-- 5
SELECT
    `trains`.`id`,
    `types`.`name` AS `type`,
    `src`.`name` AS `src_stn`,
    `dst`.`name` AS `dst_stn`,
    COUNT(DISTINCT `tickets`.`user`) AS `occupied`,
    `types`.`max_seats` AS `maximum`

    FROM `trains`
        INNER JOIN `types` ON `trains`.`type` = `types`.`id`
        INNER JOIN `stations` `src` ON `trains`.`source` = `src`.`id`
        INNER JOIN `stations` `dst` ON `trains`.`destination` = `dst`.`id`
        LEFT JOIN `tickets` ON `trains`.`id` = `tickets`.`train`
    GROUP BY `trains`.`id`
    HAVING `occupied` > 0
    ORDER BY `trains`.`id`;

-- 6
SELECT
    `trains`.`id`,
    `types`.`name` AS `type`,
    `src`.`name` AS `src_stn`,
    `dst`.`name` AS `dst_stn`,
    COUNT(DISTINCT `tickets`.`user`) AS `occupied`,
    `types`.`max_seats` AS `maximum`
FROM `trains`
JOIN `types` ON `trains`.`type` = `types`.`id`
JOIN `stations` `src` ON `trains`.`source` = `src`.`id`
JOIN `stations` `dst` ON `trains`.`destination` = `dst`.`id`
LEFT JOIN `tickets` ON `trains`.`id` = `tickets`.`train`
GROUP BY `trains`.`id`, `types`.`name`, `src`.`name`, `dst`.`name`, `types`.`max_seats`
ORDER BY `trains`.`id`;