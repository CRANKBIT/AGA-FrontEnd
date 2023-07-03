variable "domain_name" {}
variable "subdomain_name" {
  default = "*.barneywang.click"
  type = string
}
variable "acm_certificate_validation_method" {
  default = "DNS"
  type = string
}


variable "route53_private_zone" {
  default = false
  type = bool
}
variable "route53_record_allow_overwrite" {
  default = true
  type = bool
}
variable "route53_record_ttl" {
  default = 60
  type = number
}