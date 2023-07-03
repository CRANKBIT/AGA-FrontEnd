# cloudfront distribution has access to S3 with OAC
resource "aws_cloudfront_origin_access_control" "origin_access_control" {
  name                              = "${var.project_name}-${var.domain_name}-${var.environment}-${var.region}-OAC"
  description                       = "Allow Cloudfront access to S3"
  origin_access_control_origin_type = var.OAC_origin_type
  signing_behavior                  = var.signing_behavior
  signing_protocol                  = var.signing_protocol
}


resource "aws_cloudfront_distribution" "s3_distribution" {
  depends_on = [var.s3_bucket_id]

  origin {
    domain_name              = var.origin_domain_name
    origin_id                = "S3-${var.project_name}-${var.domain_name}-${var.environment}"
    origin_access_control_id = aws_cloudfront_origin_access_control.origin_access_control.id
  }

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "crankbit website distribution"
  default_root_object = var.root_object
  aliases             = [var.domain_name, var.alternative_domain_name]

  restrictions {
    geo_restriction {
      restriction_type = var.restriction_type
    }
  }

  default_cache_behavior {
    allowed_methods  = var.allowed_methods
    cached_methods   = var.cached_methods
    target_origin_id = "S3-${var.project_name}-${var.domain_name}-${var.environment}"

    forwarded_values {
      query_string = var.query_string
      cookies {
        forward = var.cookies_forward
      }
    }

    viewer_protocol_policy = var.viewer_protocol_policy
    min_ttl                = var.min_ttl
    default_ttl            = var.default_ttl
    max_ttl                = var.max_ttl
  }
  price_class = var.price_class

  tags = {
    Name = var.project_name
  }

  viewer_certificate {
    cloudfront_default_certificate = var.cloudfront_default_certificate
    acm_certificate_arn            = var.acm_certificate_arn
    ssl_support_method             = var.ssl_support_method
    minimum_protocol_version       = var.minimum_protocol_version
  }
}