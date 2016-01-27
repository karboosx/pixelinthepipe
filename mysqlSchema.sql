CREATE TABLE IF NOT EXISTS `levels` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`filename` varchar(255) NOT NULL,
`password` varchar(255) NOT NULL,
`name` varchar(100) NOT NULL,
`subname` varchar(100) NOT NULL,
`difficult` enum('supereasy','easy','normal','hard') NOT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `name` (`filename`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;
