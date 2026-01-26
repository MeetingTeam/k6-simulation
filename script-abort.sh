#!/bin/bash

# Di chuyển tới thư mục làm việc
cd ~/k8s-repo/application || {
  echo "Không tìm thấy thư mục application"
  exit 1
}

# Kiểm tra số lượng tham số
if [ $# -eq 0 ]; then
  echo "Vui lòng nhập abort service"
  exit 1
fi

# Input thứ nhất → app5031
APP5031_VALUE=$1

# Nếu có input thứ hai → app5032
APP5032_VALUE=$2

echo "Deploy app5031 với value: $APP5031_VALUE"

helm upgrade --install app5031-service \
  app5031-service \
  -f app5031-service/values.dev.yaml \
  --set app.env[0].value="$APP5031_VALUE"

# Nếu user nhập 2 input thì deploy thêm app5032
if [ $# -ge 2 ]; then
  echo "Deploy app5032 với value: $APP5032_VALUE"

  helm upgrade --install app5032-service \
    app5032-service \
    -f app5032-service/values.dev.yaml \
    --set app.env[0].value="$APP5032_VALUE"
fi

# Chờ 5 giây
sleep 5

echo "Hoàn tất deploy"
