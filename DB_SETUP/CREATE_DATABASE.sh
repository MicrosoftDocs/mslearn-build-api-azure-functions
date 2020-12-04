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