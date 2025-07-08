#!/bin/bash

# 部署脚本 - 用于云服务器部署
set -e

echo "开始部署全球社交媒体平台选择指南..."

# 更新代码
echo "正在更新代码..."
git pull origin main

# 安装依赖
echo "正在安装依赖..."
npm ci

# 构建项目
echo "正在构建项目..."
npm run build

# 设置权限
echo "正在设置文件权限..."
sudo chown -R www-data:www-data /var/www/socialmedia205
sudo chmod -R 755 /var/www/socialmedia205

# 重启Nginx
echo "正在重启Nginx..."
sudo systemctl restart nginx

echo "部署完成！"
echo "您的应用现在应该可以通过 http://your-domain.com 访问" 