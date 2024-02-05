#!/bin/bash
rnd=$RANDOM
accountName=tailwind-traders-$RANDOM
databaseName=tailwind
containerName=products

echo "Beginning database creation process..."

groupName=$(az group list --query "[0].name" -o tsv)

echo "Creating Cosmos DB database $accountName in Resource Group $groupName..."
echo "This can take up to 10 minutes. Feel free to continue with the Learn Module."
az cosmosdb create -n $accountName -g $groupName -o none

echo "Creating database $databaseName in Cosmos DB account $accountName..."
az cosmosdb sql database create -a $accountName -g $groupName -n $databaseName -o none

echo "Creating container $containerName in database $databaseName..."
az cosmosdb sql container create -a $accountName -g $groupName -d $databaseName -n $containerName -p "/id" -o none