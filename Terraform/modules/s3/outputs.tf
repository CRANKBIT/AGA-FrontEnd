output "s3_bucket_id" {
  value = aws_s3_bucket.crankbit_bucket
}

output "origin_domain_name" {
  value = aws_s3_bucket.crankbit_bucket.bucket_regional_domain_name
}