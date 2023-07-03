# cloudfront variables
variable "project_name" {}
variable "domain_name" {}
variable "environment" {}
variable "region" {}
variable "OAC_origin_type" {
  default = "s3"
  type = string
  description = "cloudfront access to s3"
}
variable "signing_behavior" {
  default = "always"
  type = string
}
variable "signing_protocol" {
  default = "sigv4"
  type = string
}
variable "s3_bucket_id" {}
variable "origin_domain_name" {
  description = "The domain name of the S3 bucket used as the CloudFront origin."
  type        = string
}
variable "root_object" {
  default = "index.html"
}
variable "alternative_domain_name" {
  default = "www.barneywang.click"
}
variable "restriction_type" {
  default = "none"
  type = string
}

variable "query_string" {
  default = false
  type = bool
}
variable "cookies_forward" {
  default = "none"
}
variable "viewer_protocol_policy" {
  default = "redirect-to-https"
}
variable "allowed_methods" {
  type    = list(string)
  default = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
}
variable "cached_methods" {
  type    = list(string)
  default = ["GET", "HEAD"]
}
variable "min_ttl" {
  default = 0
  type = number
}
variable "default_ttl" {
  default = 3600
  type = number
}
variable "max_ttl" {
  default = 86400
  type = number
}
variable "price_class" {
  default = "PriceClass_200"
}
variable "cloudfront_default_certificate" {
  default = false
  type = bool
}
variable "acm_certificate_arn" {}
variable "ssl_support_method" {
  default = "sni-only"
  type = string
}
variable "minimum_protocol_version" {
  default = "TLSv1"
  type = string
}