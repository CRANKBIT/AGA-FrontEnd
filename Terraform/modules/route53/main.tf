#  route53 create record and alias to cloudfront
# get hosted zone details
data "aws_route53_zone" "hosted_zone" {
  name = var.domain_name
}

# create a record set in route 53 and alias to cloudfron distribution
resource "aws_route53_record" "site_domain" {
  zone_id = data.aws_route53_zone.hosted_zone.zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = var.cloudfront_distribution_domain_name
    zone_id                = var.cloudfront_distribution_hosted_zone_id
    evaluate_target_health = var.evaluate_target_health
  }
}

resource "aws_route53_record" "wildcard" {
  zone_id = data.aws_route53_zone.hosted_zone.zone_id
  name    = var.wildcard_name
  type    = var.wildcard_type
  ttl     = var.wildcard_ttl
  records = [var.domain_name]
}