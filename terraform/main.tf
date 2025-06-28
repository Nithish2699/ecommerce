provider "google" {
  project = var.project_id
  region  = var.region
}

resource "google_container_cluster" "ecommerce_cluster" {
  name     = "ecommerce-cluster"
  location = var.region

  # ✅ Enable Autopilot mode
  enable_autopilot = true

  networking_mode = "VPC_NATIVE"
  ip_allocation_policy {}
}
