#!/bin/bash

set -euo pipefail

# Variables
WORKDIR="/home/ubuntu/k6-simulation"
NAMESPACE="otel"

echo "[INFO] Chuyển vào thư mục k6..."
cd "$WORKDIR"

echo "[INFO] Chạy k6 destroy-data..."
k6 run destroy-data.js

echo "[INFO] Chạy k6 init-data..."
k6 run init-data.js

echo "[INFO] Lấy tên pod trong namespace $NAMESPACE..."
POD_NAME=$(kubectl get pods -n "$NAMESPACE" --no-headers | awk 'NR==1 {print $1}')

if [[ -z "$POD_NAME" ]]; then
  echo "[ERROR] Không tìm thấy pod nào trong namespace $NAMESPACE"
  exit 1
fi

echo "[INFO] Xóa pod: $POD_NAME"
kubectl delete pod -n "$NAMESPACE" "$POD_NAME"

echo "[SUCCESS] Hoàn tất automation."
