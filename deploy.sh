GREEN='\033[0;32m'
RED='\033[0;31m'
END='\033[0m'

echo -e "${GREEN}Building assets...${END}\n"
npm run build

echo -e "${GREEN}Deploying files...${END}\n"
gcloud app deploy
