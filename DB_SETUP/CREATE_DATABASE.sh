#!/bin/bash
rnd=$RANDOM
accountName=tailwind-traders-$RANDOM
databaseName=tailwind
containerName=products

# If the database already exists, an env var called ACCOUNT_NAME will be present
if [ -n "$API_ACCOUNT_NAME" ]; then 
    # get the connection string from Cosmos DB
    echo "Getting connection string..."
    az cosmosdb keys list -n $API_ACCOUNT_NAME \
    -g $API_GROUP_NAME \
    --type connection-strings \
    --query "connectionStrings[0].connectionString" -o tsv

else

    # Database doesn't exist. Create it...

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
    
    # Store the account name and resource group as env vars - we'll use them later on in the module
    echo "export API_ACCOUNT_NAME=$accountName" >> ~/.bashrc    
    echo "export API_GROUP_NAME=$groupName" >> ~/.bashrc

    echo "Finished! Your database, $accountName, is now ready."

fi


