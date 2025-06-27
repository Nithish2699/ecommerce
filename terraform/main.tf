provider "google" {
  project = var.project_id
  region  = var.region
}

resource "google_sql_database_instance" "mysql" {
  name             = "ecommerce-db"
  database_version = "MYSQL_8_0"
  region           = var.region

  settings {
    tier = "db-f1-micro"
    ip_configuration {
      ipv4_enabled = true
      authorized_networks {
        name  = "public"
        value = "0.0.0.0/0"
      }
    }
  }
}

resource "google_sql_user" "users" {
  name     = "flaskuser"
  instance = google_sql_database_instance.mysql.name
  password = var.db_password
}

resource "google_sql_database" "app_db" {
  name     = "ecommercedb"
  instance = google_sql_database_instance.mysql.name
}

output "db_connection_uri" {
  value = "mysql+pymysql://flaskuser:${var.db_password}@${google_sql_database_instance.mysql.public_ip_address}/${google_sql_database.app_db.name}"
}
