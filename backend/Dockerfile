# Use the official lightweight Python image
FROM python:3.10-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy the app files
COPY . .

# Expose port
EXPOSE 8080

# Run the application with Gunicorn
CMD ["gunicorn", "-b", "0.0.0.0:8080", "app:app"]
