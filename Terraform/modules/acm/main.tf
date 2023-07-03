# request public certificates from the amazon certificate manager.
provider "aws" {
  alias  = "use1"
  region = "us-east-1"
  profile = "jenkins-server"
}
resource "aws_acm_certificate" "acm_certificate" {
  provider                  = aws.use1
  domain_name               = var.domain_name
  subject_alternative_names = [var.subdomain_name]
  validation_method         = var.acm_certificate_validation_method

  lifecycle {
    create_before_destroy = true
  }
}

# get details about a route 53 hosted zone
data "aws_route53_zone" "route53_zone" {
  name         = var.domain_name
  private_zone = var.route53_private_zone
}

# create a record set in route 53 for domain validatation
resource "aws_route53_record" "route53_record" {
  for_each = {
    for dvo in aws_acm_certificate.acm_certificate.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = var.route53_record_allow_overwrite
  name            = each.value.name
  records         = [each.value.record]
  ttl             = var.route53_record_ttl
  type            = each.value.type
  zone_id         = data.aws_route53_zone.route53_zone.zone_id
}

# validate acm certificates
resource "aws_acm_certificate_validation" "acm_certificate_validation" {
  provider                = aws.use1
  certificate_arn         = aws_acm_certificate.acm_certificate.arn
  validation_record_fqdns = [for record in aws_route53_record.route53_record : record.fqdn]
}