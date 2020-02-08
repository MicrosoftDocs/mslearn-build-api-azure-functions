#!/bin/bash
rnd=$RANDOM
accountName=tailwind-traders-$RANDOM
databaseName=tailwind
containerName=products

echo "Beginning database creation process..."

groupName=$(az group list --query "[0].name" -o tsv)

echo "Creating Cosmos DB database $accountName in Resource Group $groupName..."
echo "This can take up to 10 minutes. Feel free to continue with the Learn Module. Just make sure to keep this terminal running."
az cosmosdb create -n $accountName -g $groupName -o none

echo "Creating 'tailwind' database in $accountName..."
az cosmosdb sql database create -a $accountName -g $groupName -n $databaseName -o none

echo "Creating 'products' collection in 'tailwind' database..."
az cosmosdb sql container create -g $groupName -a $accountName -d $databaseName -n $containerName -p /brand/name -o none

echo "Preparing to import data..."

endpoint=https://$accountName.documents.azure.com:443
key=$(az cosmosdb list-keys -g $groupName -n $accountName --query "primaryMasterKey" -o json)

echo "Installing Node modules..."

npm i --silent

echo "Populating database..."
node ./POPULATE_DATABASE.js --endpoint $endpoint --key $key --databaseName $databaseName --containerName $containerName

echo "Finished! Your database, $accountName, is now ready."
