locals {
  region       = var.region
  project_name = var.project_name
  environment  = var.environment
  domain_name  = var.domain_name
}

# Create S3 bucket to store objects from jenkins pipeline
module "s3_bucket" {
  source                         = "../modules/s3"
  project_name                   = local.project_name
  domain_name                    = local.domain_name
  environment                    = local.environment
  region                         = local.region
  aws_cloudfront_distribution_id = module.aws_cloudfront_CDN.aws_cloudfront_distribution_id
}

module "aws_cloudfront_CDN" {
  source                         = "../modules/cloudfront"
  project_name                   = local.project_name
  domain_name                    = local.domain_name
  environment                    = local.environment
  region                         = local.region
  OAC_origin_type                = var.OAC_origin_type
  signing_behavior               = var.signing_behavior
  signing_protocol               = var.signing_protocol
  s3_bucket_id                   = module.s3_bucket.s3_bucket_id
  origin_domain_name             = module.s3_bucket.origin_domain_name
  root_object                    = var.root_object
  alternative_domain_name        = var.alternative_domain_name
  restriction_type               = var.restriction_type
  allowed_methods                = var.allowed_methods
  cached_methods                 = var.cached_methods
  query_string                   = var.query_string
  cookies_forward                = var.cookies_forward
  viewer_protocol_policy         = var.viewer_protocol_policy
  min_ttl                        = var.min_ttl
  default_ttl                    = var.default_ttl
  max_ttl                        = var.max_ttl
  price_class                    = var.price_class
  cloudfront_default_certificate = var.cloudfront_default_certificate
  acm_certificate_arn            = module.acm.acm_certificate_arn
  ssl_support_method             = var.ssl_support_method
  minimum_protocol_version       = var.minimum_protocol_version
}

module "acm" {
  source                            = "../modules/acm"
  domain_name                       = local.domain_name
  subdomain_name                    = var.subdomain_name
  acm_certificate_validation_method = var.acm_certificate_validation_method
  route53_private_zone              = var.route53_private_zone
  route53_record_allow_overwrite    = var.route53_record_allow_overwrite
  route53_record_ttl                = var.route53_record_ttl
}

module "route53" {
  source                                 = "../modules/route53"
  domain_name                            = local.domain_name
  cloudfront_distribution_domain_name    = module.aws_cloudfront_CDN.cloudfront_distribution_domain_name
  cloudfront_distribution_hosted_zone_id = module.aws_cloudfront_CDN.cloudfront_distribution_hosted_zone_id
  evaluate_target_health                 = var.evaluate_target_health
  wildcard_name                          = var.wildcard_name
  wildcard_type                          = var.wildcard_type
  wildcard_ttl                           = var.wildcard_ttl
}
