# environment variables
region       = "ap-southeast-2"
project_name = "crankbit"
environment  = "dev"
domain_name  = "barneywang.click"

# s3 variables

# cloudfront variables
OAC_origin_type                = "s3"
signing_behavior               = "always"
signing_protocol               = "sigv4"
root_object                    = "index.html"
alternative_domain_name        = "www.barneywang.click"
restriction_type               = "none"
allowed_methods                = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
cached_methods                 = ["GET", "HEAD"]
query_string                   = false
cookies_forward                = "none"
viewer_protocol_policy         = "redirect-to-https"
min_ttl                        = 0
default_ttl                    = 3600
max_ttl                        = 86400
price_class                    = "PriceClass_200"
cloudfront_default_certificate = false
ssl_support_method             = "sni-only"
minimum_protocol_version       = "TLSv1"

# acm variables
subdomain_name                    = "*.barneywang.click"
acm_certificate_validation_method = "DNS"
route53_private_zone              = false
route53_record_allow_overwrite    = true
route53_record_ttl                = 60

# route 53 variabls
evaluate_target_health = true
wildcard_name          = "www"
wildcard_type          = "CNAME"
wildcard_ttl           = 300