#!/bin/sh

# Start Nginx
nginx

# Start the Nginx Prometheus exporter
nginx-prometheus-exporter \
    --nginx.scrape-uri=http://localhost/metrics \
    --web.listen-address=:9113 \
    --nginx.retries=10