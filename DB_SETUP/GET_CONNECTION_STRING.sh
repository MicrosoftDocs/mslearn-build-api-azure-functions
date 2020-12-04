databaseName=tailwind
containerName=products

# Get the connection string
echo "Getting connection string. This might take up to two minutes as we prepare the database..."

# Get the account name, which is randomized
accountName=$(az cosmosdb list --query "[0].name" -o tsv)

# Get the group name, which is preassigned
groupName=$(az group list --query "[0].name" -o tsv)

# Create the database
az cosmosdb sql database create -a $accountName -g $groupName -n $databaseName -o none

# Add products data
az cosmosdb sql container create -g $groupName -a $accountName -d $databaseName -n $containerName -p /brand/name -o none

endpoint=https://$accountName.documents.azure.com:443
key=$(az cosmosdb keys list -g $groupName -n $accountName --type keys --query "primaryMasterKey" -o json)

## silent npm install
npm install > "/dev/null" 2>&1

node ./POPULATE_DATABASE.js --endpoint $endpoint --key $key --databaseName $databaseName --containerName $containerName

echo "This is your connection string. Copy it to your clipboard..."
az cosmosdb keys list -n $accountName -g $groupName --type connection-strings --query "connectionStrings[0].connectionString" -o tsv


