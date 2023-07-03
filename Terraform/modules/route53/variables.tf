variable "domain_name" {}
variable "cloudfront_distribution_domain_name" {}
variable "cloudfront_distribution_hosted_zone_id" {}
variable "evaluate_target_health" {
  default = true
  type = bool
}
variable "wildcard_name" {
  default = "www"
  type = string
}
variable "wildcard_type" {
  default = "CNAME"
  type = string
}

variable "wildcard_ttl" {
  default = 300
  type = number
}