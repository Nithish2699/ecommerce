
# 🛒 E-Commerce Web Application (GCP DevOps Project)

A full-stack cloud-native e-commerce application deployed on **Google Cloud Platform** with **CI/CD**, **Docker**, **Kubernetes**, and **New Relic Monitoring**.

---

## 📦 Features

- React frontend with product catalog, cart, checkout
- Flask backend with JWT auth, order handling, and SQLAlchemy ORM
- Google Cloud Run + GKE for deployment
- CI/CD via Cloud Build & GitHub Actions
- Infrastructure managed with Terraform
- Monitoring and alerting with **New Relic**

---

## 🧱 Tech Stack

| Layer       | Tools & Services |
|-------------|------------------|
| Frontend    | React, Bootstrap |
| Backend     | Flask, Gunicorn, Flask-JWT |
| Database    | Cloud SQL (PostgreSQL) |
| CI/CD       | GitHub Actions, Cloud Build |
| Container   | Docker            |
| Orchestration | Kubernetes (GKE) |
| Monitoring  | New Relic         |
| IaC         | Terraform         |

---

## 🌐 Architecture

```
[ React Frontend ] ---> [ Flask API on GKE ] ---> [ Cloud SQL ]
        |                         |
        v                         v
   Cloud Build CI/CD      Cloud Build CI/CD
        |                         |
        v                         v
 [ Docker Image ]         [ Docker Image ]
        |                         |
        v                         v
  [ GCR + Kubernetes (GKE) ] — [ New Relic Monitoring ]
```

---

## 🚀 Deployment Steps

### 1. 🔧 GCP Setup

```bash
# Enable APIs
gcloud services enable container.googleapis.com sqladmin.googleapis.com run.googleapis.com cloudbuild.googleapis.com

# Create a GKE cluster
gcloud container clusters create ecommerce-cluster     --region=us-central1     --num-nodes=2
```

### 2. 🐳 Docker Image Build & Push

**Frontend:**
```bash
cd frontend
gcloud builds submit --tag gcr.io/PROJECT_ID/ecommerce-frontend
```

**Backend:**
```bash
cd backend
gcloud builds submit --tag gcr.io/PROJECT_ID/ecommerce-backend
```

Replace `PROJECT_ID` with your actual project ID.

### 3. ⚙️ Kubernetes Deployment

```bash
gcloud container clusters get-credentials ecommerce-cluster --region=us-central1

kubectl apply -f k8s/
```

### 4. 🌍 Access the App

```bash
kubectl get service frontend-service
kubectl get service backend-service
```

Use the external IP of the frontend to access the app in the browser.

---

## 📊 New Relic Integration

- Add New Relic API key to your Flask `app.py`
- Monitor services via the New Relic dashboard
- Auto-alerting and performance metrics

---

## 📁 Project Structure

```
ecommerce/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/
│   ├── src/
│   └── Dockerfile
├── k8s/
│   ├── frontend-deployment.yaml
│   ├── backend-deployment.yaml
│   └── *.yaml
└── README.md
---
## 👨‍💻 Author

Built by **Nithish Raju** 

---

## 🏁 Final Notes

✅ CI/CD working on both frontend and backend  
✅ App deployed to GCP using GKE  
✅ Real-time monitoring integrated with New Relic  
✅ Production-ready infrastructure with Terraform (optional extension)
