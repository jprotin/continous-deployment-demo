#!/bin/sh -e

COLOR_SUCCESS='\033[0;32m'
NC='\033[0m'

#===================================#
#         Change shortcode url
#===================================#
printf "\n${COLOR_SUCCESS} ======================================= ${NC}\n"
printf "\n${COLOR_SUCCESS}     SED  ${PUBLIC_URL}:${PORT_PHP} \n"
printf "\n${COLOR_SUCCESS} ======================================= ${NC}\n"


sed -i -e "s/{PUBLIC_URL_PHP\}/`echo ${PUBLIC_URL}`:`echo ${PORT_PHP}`/g" hosted-fields-front.html

exec apache2-foreground