# environment variables
variable "region" {}
variable "project_name" {}
variable "environment" {}
variable "domain_name" {}

# s3 variables

# cloudfront variables
variable "OAC_origin_type" {
  default     = "s3"
  type        = string
  description = "cloudfront access to s3"
}
variable "signing_behavior" {
  default = "always"
  type    = string
}
variable "signing_protocol" {
  default = "sigv4"
  type    = string
}

variable "root_object" {
  default = "index.html"
}
variable "alternative_domain_name" {
  default = "www.barneywang.click"
}
variable "restriction_type" {
  default = "none"
  type    = string
}
variable "allowed_methods" {
  type    = list(string)
  default = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
}
variable "cached_methods" {
  type    = list(string)
  default = ["GET", "HEAD"]
}
variable "query_string" {
  default = false
  type    = bool
}
variable "cookies_forward" {
  default = "none"
}
variable "viewer_protocol_policy" {
  default = "redirect-to-https"
}

variable "min_ttl" {
  default = 0
  type    = number
}
variable "default_ttl" {
  default = 3600
  type    = number
}
variable "max_ttl" {
  default = 86400
  type    = number
}
variable "price_class" {
  default = "PriceClass_200"
}
variable "cloudfront_default_certificate" {
  default = false
  type    = bool
}
variable "ssl_support_method" {
  default = "sni-only"
  type    = string
}
variable "minimum_protocol_version" {
  default = "TLSv1"
  type    = string
}

# acm variables
variable "subdomain_name" {
  default = "*.barneywang.click"
  type    = string
}
variable "acm_certificate_validation_method" {
  default = "DNS"
  type    = string
}

variable "route53_private_zone" {
  default = false
  type    = bool
}
variable "route53_record_allow_overwrite" {
  default = true
  type    = bool
}
variable "route53_record_ttl" {
  default = 60
  type    = number
}

# route 53 variabls
variable "evaluate_target_health" {
  default = true
  type    = bool
}
variable "wildcard_name" {
  default = "www"
  type    = string
}
variable "wildcard_type" {
  default = "CNAME"
  type    = string
}

variable "wildcard_ttl" {
  default = 300
  type    = number
}