param ra-rg-location string = resourceGroup().location
param ra-rg-tags object = {}
param appName string = 'ra-portfolio-app'
param hostingPlanName string = 'ra-portfolio-plan'
param storageAccountName string = uniqueString(resourceGroup().id, 'reactclientstorage')
param keyVaultName string = 'ra-portfolio-keyVault' 
param skuSecretName string = 'appServicePlanSku'

resource keyVault 'Microsoft.KeyVault/vaults@2022-07-01' existing = {
  name: keyVaultName
}

resource appServicePlan 'Microsoft.Web/serverfarms@2022-09-01' = {
  name: hostingPlanName
  location: ra-rg-location
  sku: {
    name: list(keyVault.id, skuSecretName).value // Retrieve SKU from Key Vault
    tier: 'Basic' // Adjust the tier if needed
  }
  kind: 'app'
  properties: {
    reserved: false
  }
}

resource storageAccount 'Microsoft.Storage/storageAccounts@2022-09-01' = {
  name: storageAccountName
  location: ra-rg-location
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
  properties: {
    accessTier: 'Hot'
  }
}

resource staticWebsite 'Microsoft.Storage/storageAccounts/blobServices/staticWebsites@2022-09-01' = {
  name: 'default/StaticWebsite'
  parent: storageAccount
  properties: {
    indexDocument: 'index.html'
    error404Document: '404.html'
  }
}

resource webApp 'Microsoft.Web/sites@2022-09-01' = {
  name: appName
  location: ra-rg-location
  kind: 'app'
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      appSettings: [
        {
          name: 'WEBSITE_MODE'
          value: 'Static'
        },
        {
          name: 'STORAGE_ACCOUNT'
          value: storageAccount.name
        },
        {
          name: 'STORAGE_CONTAINER'
          value: '$web'
        }
      ]
    }
  }
}

output storage
