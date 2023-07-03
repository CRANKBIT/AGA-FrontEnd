# Create S3 bucket to store objects from jenkins pipeline
resource "aws_s3_bucket" "crankbit_bucket" {
  bucket = "${var.project_name}-${var.domain_name}-${var.environment}"
  tags = {
    Name = var.project_name
  }
}

resource "aws_s3_bucket_versioning" "crankbit_bucket_versioning" {
  bucket = aws_s3_bucket.crankbit_bucket.id
  versioning_configuration {
    status = "Disabled"
    
  }
}

resource "aws_s3_bucket_ownership_controls" "ownership_controls" {
  bucket = aws_s3_bucket.crankbit_bucket.id
  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_acl" "crankbit_bucket_acl" {
  depends_on = [aws_s3_bucket_ownership_controls.ownership_controls]
  bucket = aws_s3_bucket.crankbit_bucket.id
  acl = "private"
}


resource "aws_s3_bucket_public_access_block" "public_access_block" {
  bucket = aws_s3_bucket.crankbit_bucket.id

  block_public_acls       = true
  block_public_policy     = true
  restrict_public_buckets = true
  ignore_public_acls      = true
}

data "aws_caller_identity" "current" {

}

resource "aws_s3_bucket_policy" "bucket_policy" {
  bucket = aws_s3_bucket.crankbit_bucket.id
  policy = <<EOF
{
    "Version": "2012-10-17",
    "Statement": {
        "Sid": "AllowCloudFrontServicePrincipalReadOnly",
        "Effect": "Allow",
        "Principal": {
            "Service": "cloudfront.amazonaws.com"
        },
        "Action": "s3:GetObject",
        "Resource": "arn:aws:s3:::${aws_s3_bucket.crankbit_bucket.id}/*",
        "Condition": {
            "StringEquals": {
                "AWS:SourceArn": "arn:aws:cloudfront::${data.aws_caller_identity.current.account_id}:distribution/${var.aws_cloudfront_distribution_id}"
            }
        }
    }
}
EOF
}