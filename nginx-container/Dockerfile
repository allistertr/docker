FROM nginx:1.12.1
MAINTAINER Otus Solutions


# COPY nginx.conf /etc/nginx/conf.d/nginx.conf
COPY certificate.key /etc/nginx/ssl/certificate.key
COPY certificate.crt /etc/nginx/ssl/certificate.crt
COPY localhost.conf /etc/nginx/sites-enabled/localhost.conf
# COPY otus.dev.ccem.ufrgs.br.conf /etc/nginx/sites-enabled/
# COPY studio.dev.ccem.ufrgs.br.conf /etc/nginx/sites-enabled/
COPY domain.dev.ccem.ufrgs.br.conf /etc/nginx/sites-enabled/
COPY nginx.conf /etc/nginx/nginx.conf:ro
# COPY api-domain.dev.ccem.ufrgs.br.conf /etc/nginx/sites-enabled/api-domain.dev.ccem.ufrgs.br.conf
# COPY api-otus.dev.ccem.ufrgs.br.conf /etc/nginx/sites-enabled/api-otus.dev.ccem.ufrgs.br.conf
# VOLUME ["/etc/nginx/sites-enabled", "/etc/nginx/ssl", "/etc/nginx/conf.d", "/usr/share/nginx/html"]
# WORKDIR /etc/nginx
RUN chmod 755 -R /usr/share/nginx/html/
# RUN chmod 755 -R /usr/share/nginx/html/otus-domain
EXPOSE 80
EXPOSE 443
ENTRYPOINT ["nginx"]
# Parametros extras para o entrypoint
CMD ["-g", "daemon off;"]
