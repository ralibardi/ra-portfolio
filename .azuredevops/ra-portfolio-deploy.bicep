param appName string
param raRgLocation string
param azureAdClientId string
@secure()
param azureAdClientSecret string
param azureAdIssuerUrl string

resource appServicePlan 'Microsoft.Web/serverfarms@2022-09-01' = {
  name: '${appName}-plan'
  location: raRgLocation
  sku: {
    name: 'F1'
    tier: 'Free'
  }
  kind: 'app'
  properties: {
    reserved: false
  }
}

resource webApp 'Microsoft.Web/sites@2022-09-01' = {
  name: appName
  location: raRgLocation
  kind: 'app'
  identity: {
    type: 'SystemAssigned'
  }
  properties: {
    serverFarmId: appServicePlan.id
    siteConfig: {
      appSettings: [
        {
          name: 'EXAMPLE_SETTING'
          value: 'value'
        }
      ]
    }
  }
}

resource webAppAuthSettings 'Microsoft.Web/sites/config@2022-03-01' = {
  parent: webApp
  name: 'authsettingsV2'
  properties: {
    platform: {
      enabled: true
    }
    globalValidation: {
      requireAuthentication: true
      redirectToProvider: 'AzureActiveDirectory'
      unauthenticatedClientAction: 'RedirectToLoginPage'
    }
    identityProviders: {
      azureActiveDirectory: {
        enabled: true
        registration: {
          clientId: azureAdClientId
          clientSecretSettingName: 'MICROSOFT_PROVIDER_AUTHENTICATION_SECRET'
          openIdIssuer: azureAdIssuerUrl
        }
        login: {
          loginParameters: [
            'response_type=code id_token'
            'response_mode=form_post'
            'scope=openid profile email'
            'prompt=login'
          ]
          disableWWWAuthenticate: false
        }
      }
    }
  }
}

resource azureAdClient 'Microsoft.Web/sites/config@2022-03-01' = {
  parent: webApp
  name: 'appsettings'
  properties: {
    MICROSOFT_PROVIDER_AUTHENTICATION_SECRET: azureAdClientSecret
  }
}
