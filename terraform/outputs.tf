output "cloud_sql_instance_ip" {
  value = google_sql_database_instance.mysql.public_ip_address
}
