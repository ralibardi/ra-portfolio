param dnszones_ronny_dev_name string = 'ronny.dev'
param ra_portfolio_name string = 'ra-portfolio'
param certificates_alibardi_dev_ra_portfolio_name string = 'alibardi.dev-ra-portfolio'
param loadtests_RA_portfolio_loadTesting_name string = 'RA-portfolio-loadTesting'
param actionGroups_Application_Insights_Smart_Detection_name string = 'Application Insights Smart Detection'
param workspaces_DefaultWorkspace_WUK_externalid string = '/subscriptions/91d20e1a-5da1-482d-8a04-327e49a543d3/resourceGroups/DefaultResourceGroup-WUK/providers/Microsoft.OperationalInsights/workspaces/DefaultWorkspace-91d20e1a-5da1-482d-8a04-327e49a543d3-WUK'

resource actionGroups_Application_Insights_Smart_Detection_name_resource 'microsoft.insights/actionGroups@2023-09-01-preview' = {
  name: actionGroups_Application_Insights_Smart_Detection_name
  location: 'Global'
  properties: {
    groupShortName: 'SmartDetect'
    enabled: true
    emailReceivers: []
    smsReceivers: []
    webhookReceivers: []
    eventHubReceivers: []
    itsmReceivers: []
    azureAppPushReceivers: []
    automationRunbookReceivers: []
    voiceReceivers: []
    logicAppReceivers: []
    azureFunctionReceivers: []
    armRoleReceivers: [
      {
        name: 'Monitoring Contributor'
        roleId: '749f88d5-cbae-40b8-bcfc-e573ddc772fa'
        useCommonAlertSchema: true
      }
      {
        name: 'Monitoring Reader'
        roleId: '43d0d8ad-25c7-4714-9337-8ba259a9fe05'
        useCommonAlertSchema: true
      }
    ]
  }
}

resource ra_portfolio_name_components_resource 'microsoft.insights/components@2020-02-02' = {
  name: ra_portfolio_name
  location: 'ukwest'
  kind: 'web'
  properties: {
    Application_Type: 'web'
    Flow_Type: 'Redfield'
    Request_Source: 'IbizaWebAppExtensionCreate'
    RetentionInDays: 90
    WorkspaceResourceId: workspaces_DefaultWorkspace_WUK_externalid
    IngestionMode: 'LogAnalytics'
    publicNetworkAccessForIngestion: 'Enabled'
    publicNetworkAccessForQuery: 'Enabled'
  }
}

resource loadtests_RA_portfolio_loadTesting_name_resource 'Microsoft.LoadTestService/loadtests@2022-12-01' = {
  name: loadtests_RA_portfolio_loadTesting_name
  location: 'uksouth'
  identity: {
    type: 'None'
  }
  properties: {}
}

resource dnszones_ronny_dev_name_resource 'Microsoft.Network/dnszones@2023-07-01-preview' = {
  name: dnszones_ronny_dev_name
  location: 'global'
  properties: {
    zoneType: 'Public'
  }
}

resource certificates_alibardi_dev_ra_portfolio_name_resource 'Microsoft.Web/certificates@2023-12-01' = {
  name: certificates_alibardi_dev_ra_portfolio_name
  location: 'UK West'
  properties: {
    hostNames: [
      'alibardi.dev'
    ]
    canonicalName: 'alibardi.dev'
  }
}

resource ra_portfolio_name_staticSites_resource 'Microsoft.Web/staticSites@2023-12-01' = {
  name: ra_portfolio_name
  location: 'West Europe'
  sku: {
    name: 'Free'
    tier: 'Free'
  }
  properties: {
    repositoryUrl: 'https://github.com/ralibardi/${ra_portfolio_name}'
    branch: 'main'
    stagingEnvironmentPolicy: 'Enabled'
    allowConfigFileUpdates: true
    provider: 'GitHub'
    enterpriseGradeCdnStatus: 'Disabled'
  }
}

resource ra_portfolio_name_components_degradationindependencyduration 'microsoft.insights/components/ProactiveDetectionConfigs@2018-05-01-preview' = {
  parent: ra_portfolio_name_components_resource
  name: 'degradationindependencyduration'
  location: 'ukwest'
  properties: {
    RuleDefinitions: {
      Name: 'degradationindependencyduration'
      DisplayName: 'Degradation in dependency duration'
      Description: 'Smart Detection rules notify you of performance anomaly issues.'
      HelpUrl: 'https://docs.microsoft.com/en-us/azure/application-insights/app-insights-proactive-performance-diagnostics'
      IsHidden: false
      IsEnabledByDefault: true
      IsInPreview: false
      SupportsEmailNotifications: true
    }
    Enabled: true
    SendEmailsToSubscriptionOwners: true
    CustomEmails: []
  }
}

resource ra_portfolio_name_components_degradationinserverresponsetime 'microsoft.insights/components/ProactiveDetectionConfigs@2018-05-01-preview' = {
  parent: ra_portfolio_name_components_resource
  name: 'degradationinserverresponsetime'
  location: 'ukwest'
  properties: {
    RuleDefinitions: {
      Name: 'degradationinserverresponsetime'
      DisplayName: 'Degradation in server response time'
      Description: 'Smart Detection rules notify you of performance anomaly issues.'
      HelpUrl: 'https://docs.microsoft.com/en-us/azure/application-insights/app-insights-proactive-performance-diagnostics'
      IsHidden: false
      IsEnabledByDefault: true
      IsInPreview: false
      SupportsEmailNotifications: true
    }
    Enabled: true
    SendEmailsToSubscriptionOwners: true
    CustomEmails: []
  }
}

resource ra_portfolio_name_components_digestMailConfiguration 'microsoft.insights/components/ProactiveDetectionConfigs@2018-05-01-preview' = {
  parent: ra_portfolio_name_components_resource
  name: 'digestMailConfiguration'
  location: 'ukwest'
  properties: {
    RuleDefinitions: {
      Name: 'digestMailConfiguration'
      DisplayName: 'Digest Mail Configuration'
      Description: 'This rule describes the digest mail preferences'
      HelpUrl: 'www.homail.com'
      IsHidden: true
      IsEnabledByDefault: true
      IsInPreview: false
      SupportsEmailNotifications: true
    }
    Enabled: true
    SendEmailsToSubscriptionOwners: true
    CustomEmails: []
  }
}

resource ra_portfolio_name_components_extension_billingdatavolumedailyspikeextension 'microsoft.insights/components/ProactiveDetectionConfigs@2018-05-01-preview' = {
  parent: ra_portfolio_name_components_resource
  name: 'extension_billingdatavolumedailyspikeextension'
  location: 'ukwest'
  properties: {
    RuleDefinitions: {
      Name: 'extension_billingdatavolumedailyspikeextension'
      DisplayName: 'Abnormal rise in daily data volume (preview)'
      Description: 'This detection rule automatically analyzes the billing data generated by your application, and can warn you about an unusual increase in your application\'s billing costs'
      HelpUrl: 'https://github.com/Microsoft/ApplicationInsights-Home/tree/master/SmartDetection/billing-data-volume-daily-spike.md'
      IsHidden: false
      IsEnabledByDefault: true
      IsInPreview: true
      SupportsEmailNotifications: false
    }
    Enabled: true
    SendEmailsToSubscriptionOwners: true
    CustomEmails: []
  }
}

resource ra_portfolio_name_components_extension_canaryextension 'microsoft.insights/components/ProactiveDetectionConfigs@2018-05-01-preview' = {
  parent: ra_portfolio_name_components_resource
  name: 'extension_canaryextension'
  location: 'ukwest'
  properties: {
    RuleDefinitions: {
      Name: 'extension_canaryextension'
      DisplayName: 'Canary extension'
      Description: 'Canary extension'
      HelpUrl: 'https://github.com/Microsoft/ApplicationInsights-Home/blob/master/SmartDetection/'
      IsHidden: true
      IsEnabledByDefault: true
      IsInPreview: true
      SupportsEmailNotifications: false
    }
    Enabled: true
    SendEmailsToSubscriptionOwners: true
    CustomEmails: []
  }
}

resource ra_portfolio_name_components_extension_exceptionchangeextension 'microsoft.insights/components/ProactiveDetectionConfigs@2018-05-01-preview' = {
  parent: ra_portfolio_name_components_resource
  name: 'extension_exceptionchangeextension'
  location: 'ukwest'
  properties: {
    RuleDefinitions: {
      Name: 'extension_exceptionchangeextension'
      DisplayName: 'Abnormal rise in exception volume (preview)'
      Description: 'This detection rule automatically analyzes the exceptions thrown in your application, and can warn you about unusual patterns in your exception telemetry.'
      HelpUrl: 'https://github.com/Microsoft/ApplicationInsights-Home/blob/master/SmartDetection/abnormal-rise-in-exception-volume.md'
      IsHidden: false
      IsEnabledByDefault: true
      IsInPreview: true
      SupportsEmailNotifications: false
    }
    Enabled: true
    SendEmailsToSubscriptionOwners: true
    CustomEmails: []
  }
}

resource ra_portfolio_name_components_extension_memoryleakextension 'microsoft.insights/components/ProactiveDetectionConfigs@2018-05-01-preview' = {
  parent: ra_portfolio_name_components_resource
  name: 'extension_memoryleakextension'
  location: 'ukwest'
  properties: {
    RuleDefinitions: {
      Name: 'extension_memoryleakextension'
      DisplayName: 'Potential memory leak detected (preview)'
      Description: 'This detection rule automatically analyzes the memory consumption of each process in your application, and can warn you about potential memory leaks or increased memory consumption.'
      HelpUrl: 'https://github.com/Microsoft/ApplicationInsights-Home/tree/master/SmartDetection/memory-leak.md'
      IsHidden: false
      IsEnabledByDefault: true
      IsInPreview: true
      SupportsEmailNotifications: false
    }
    Enabled: true
    SendEmailsToSubscriptionOwners: true
    CustomEmails: []
  }
}

resource ra_portfolio_name_components_extension_securityextensionspackage 'microsoft.insights/components/ProactiveDetectionConfigs@2018-05-01-preview' = {
  parent: ra_portfolio_name_components_resource
  name: 'extension_securityextensionspackage'
  location: 'ukwest'
  properties: {
    RuleDefinitions: {
      Name: 'extension_securityextensionspackage'
      DisplayName: 'Potential security issue detected (preview)'
      Description: 'This detection rule automatically analyzes the telemetry generated by your application and detects potential security issues.'
      HelpUrl: 'https://github.com/Microsoft/ApplicationInsights-Home/blob/master/SmartDetection/application-security-detection-pack.md'
      IsHidden: false
      IsEnabledByDefault: true
      IsInPreview: true
      SupportsEmailNotifications: false
    }
    Enabled: true
    SendEmailsToSubscriptionOwners: true
    CustomEmails: []
  }
}

resource ra_portfolio_name_components_extension_traceseveritydetector 'microsoft.insights/components/ProactiveDetectionConfigs@2018-05-01-preview' = {
  parent: ra_portfolio_name_components_resource
  name: 'extension_traceseveritydetector'
  location: 'ukwest'
  properties: {
    RuleDefinitions: {
      Name: 'extension_traceseveritydetector'
      DisplayName: 'Degradation in trace severity ratio (preview)'
      Description: 'This detection rule automatically analyzes the trace logs emitted from your application, and can warn you about unusual patterns in the severity of your trace telemetry.'
      HelpUrl: 'https://github.com/Microsoft/ApplicationInsights-Home/blob/master/SmartDetection/degradation-in-trace-severity-ratio.md'
      IsHidden: false
      IsEnabledByDefault: true
      IsInPreview: true
      SupportsEmailNotifications: false
    }
    Enabled: true
    SendEmailsToSubscriptionOwners: true
    CustomEmails: []
  }
}

resource ra_portfolio_name_components_longdependencyduration 'microsoft.insights/components/ProactiveDetectionConfigs@2018-05-01-preview' = {
  parent: ra_portfolio_name_components_resource
  name: 'longdependencyduration'
  location: 'ukwest'
  properties: {
    RuleDefinitions: {
      Name: 'longdependencyduration'
      DisplayName: 'Long dependency duration'
      Description: 'Smart Detection rules notify you of performance anomaly issues.'
      HelpUrl: 'https://docs.microsoft.com/en-us/azure/application-insights/app-insights-proactive-performance-diagnostics'
      IsHidden: false
      IsEnabledByDefault: true
      IsInPreview: false
      SupportsEmailNotifications: true
    }
    Enabled: true
    SendEmailsToSubscriptionOwners: true
    CustomEmails: []
  }
}

resource ra_portfolio_name_components_migrationToAlertRulesCompleted 'microsoft.insights/components/ProactiveDetectionConfigs@2018-05-01-preview' = {
  parent: ra_portfolio_name_components_resource
  name: 'migrationToAlertRulesCompleted'
  location: 'ukwest'
  properties: {
    RuleDefinitions: {
      Name: 'migrationToAlertRulesCompleted'
      DisplayName: 'Migration To Alert Rules Completed'
      Description: 'A configuration that controls the migration state of Smart Detection to Smart Alerts'
      HelpUrl: 'https://docs.microsoft.com/en-us/azure/application-insights/app-insights-proactive-performance-diagnostics'
      IsHidden: true
      IsEnabledByDefault: false
      IsInPreview: true
      SupportsEmailNotifications: false
    }
    Enabled: false
    SendEmailsToSubscriptionOwners: true
    CustomEmails: []
  }
}

resource ra_portfolio_name_components_slowpageloadtime 'microsoft.insights/components/ProactiveDetectionConfigs@2018-05-01-preview' = {
  parent: ra_portfolio_name_components_resource
  name: 'slowpageloadtime'
  location: 'ukwest'
  properties: {
    RuleDefinitions: {
      Name: 'slowpageloadtime'
      DisplayName: 'Slow page load time'
      Description: 'Smart Detection rules notify you of performance anomaly issues.'
      HelpUrl: 'https://docs.microsoft.com/en-us/azure/application-insights/app-insights-proactive-performance-diagnostics'
      IsHidden: false
      IsEnabledByDefault: true
      IsInPreview: false
      SupportsEmailNotifications: true
    }
    Enabled: true
    SendEmailsToSubscriptionOwners: true
    CustomEmails: []
  }
}

resource ra_portfolio_name_components_slowserverresponsetime 'microsoft.insights/components/ProactiveDetectionConfigs@2018-05-01-preview' = {
  parent: ra_portfolio_name_components_resource
  name: 'slowserverresponsetime'
  location: 'ukwest'
  properties: {
    RuleDefinitions: {
      Name: 'slowserverresponsetime'
      DisplayName: 'Slow server response time'
      Description: 'Smart Detection rules notify you of performance anomaly issues.'
      HelpUrl: 'https://docs.microsoft.com/en-us/azure/application-insights/app-insights-proactive-performance-diagnostics'
      IsHidden: false
      IsEnabledByDefault: true
      IsInPreview: false
      SupportsEmailNotifications: true
    }
    Enabled: true
    SendEmailsToSubscriptionOwners: true
    CustomEmails: []
  }
}

resource Microsoft_Network_dnszones_A_dnszones_ronny_dev_name 'Microsoft.Network/dnszones/A@2023-07-01-preview' = {
  parent: dnszones_ronny_dev_name_resource
  name: '@'
  properties: {
    TTL: 3600
    ARecords: [
      {
        ipv4Address: '51.124.91.155'
      }
    ]
    targetResource: {}
    trafficManagementProfile: {}
  }
}

resource dnszones_ronny_dev_name_www 'Microsoft.Network/dnszones/CNAME@2023-07-01-preview' = {
  parent: dnszones_ronny_dev_name_resource
  name: 'www'
  properties: {
    TTL: 3600
    CNAMERecord: {
      cname: 'blue-bay-0bbff5f03.5.azurestaticapps.net'
    }
    targetResource: {}
    trafficManagementProfile: {}
  }
}

resource Microsoft_Network_dnszones_NS_dnszones_ronny_dev_name 'Microsoft.Network/dnszones/NS@2023-07-01-preview' = {
  parent: dnszones_ronny_dev_name_resource
  name: '@'
  properties: {
    TTL: 172800
    NSRecords: [
      {
        nsdname: 'ns1-07.azure-dns.com.'
      }
      {
        nsdname: 'ns2-07.azure-dns.net.'
      }
      {
        nsdname: 'ns3-07.azure-dns.org.'
      }
      {
        nsdname: 'ns4-07.azure-dns.info.'
      }
    ]
    targetResource: {}
    trafficManagementProfile: {}
  }
}

resource Microsoft_Network_dnszones_SOA_dnszones_ronny_dev_name 'Microsoft.Network/dnszones/SOA@2023-07-01-preview' = {
  parent: dnszones_ronny_dev_name_resource
  name: '@'
  properties: {
    TTL: 3600
    SOARecord: {
      email: 'azuredns-hostmaster.microsoft.com'
      expireTime: 2419200
      host: 'ns1-07.azure-dns.com.'
      minimumTTL: 300
      refreshTime: 3600
      retryTime: 300
      serialNumber: 1
    }
    targetResource: {}
    trafficManagementProfile: {}
  }
}

resource Microsoft_Network_dnszones_TXT_dnszones_ronny_dev_name 'Microsoft.Network/dnszones/TXT@2023-07-01-preview' = {
  parent: dnszones_ronny_dev_name_resource
  name: '@'
  properties: {
    TTL: 3600
    TXTRecords: [
      {
        value: [
          '_t1ovncxwas1z08219dk19ewuu8loioy'
        ]
      }
    ]
    targetResource: {}
    trafficManagementProfile: {}
  }
}

resource ra_portfolio_name_staticSites_default 'Microsoft.Web/staticSites/basicAuth@2023-12-01' = {
  parent: ra_portfolio_name_staticSites_resource
  name: 'default'
  location: 'West Europe'
  properties: {
    applicableEnvironmentsMode: 'SpecifiedEnvironments'
  }
}

resource ra_portfolio_name_staticSites_alibardi_dev 'Microsoft.Web/staticSites/customDomains@2023-12-01' = {
  parent: ra_portfolio_name_staticSites_resource
  name: 'alibardi.dev'
  location: 'West Europe'
  properties: {}
}

resource ra_portfolio_name_staticSites_ronny_dev 'Microsoft.Web/staticSites/customDomains@2023-12-01' = {
  parent: ra_portfolio_name_staticSites_resource
  name: 'ronny.dev'
  location: 'West Europe'
  properties: {}
}
